import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are Zysculpt's Expert AI Career Architect. 
Your goal is to build and refine ATS-optimized career documents (Resumes, Cover Letters, or Resignation Letters).

STRICT OPERATING GUIDELINES:
1. NO CONVERSATIONAL FILLER IN DOCUMENTS: The document content (Markdown) must NEVER contain meta-talk, instructions, or requests for more info. 
2. STRUCTURE: Use standard Markdown headers: # for Name/Title, ## for Section Headings (like EXPERIENCE), ### for Sub-headings.
3. ISOLATION: If you need to ask for more info or explain something, do it BEFORE or AFTER the Markdown document, never inside it.
4. SIGNALING: Append "[READY]" at the very end of your response ONLY when a full document has been generated.
5. ATS OPTIMIZATION: Use clear, industry-standard headings.

If information is missing, do not hallucinate placeholders. Instead, ask the user concisely in a separate paragraph.`;

const INTERVIEW_SYSTEM_INSTRUCTION = `You are an expert Interviewer. 
Your goal is to conduct a professional, conversational mock interview. 
Guidelines:
1. Start by asking a relevant interview question.
2. Wait for the user's response.
3. Provide very brief, constructive feedback on their answer.
4. Ask a follow-up or a new question.
5. Keep the tone professional and encouraging.
6. Always end your message with a question for the candidate.`;

const ATS_SCORER_SYSTEM_INSTRUCTION = `You are an expert ATS (Applicant Tracking System) Analyst. 
Analyze the provided resume against the given job description. 
Provide a comprehensive analysis in JSON format.
The analysis must include:
- overallScore: (0-100)
- formattingScore: (0-100)
- keywordScore: (0-100)
- findings: {
    matchingKeywords: string[],
    missingKeywords: string[],
    formattingIssues: string[],
    improvementSuggestions: string[]
  }
- summary: A brief encouraging summary of the fit.`;

export interface MediaPart {
  data: string;
  mimeType: string;
}

export const getGeminiResponse = async (userMessage: string, mode: string, mediaParts?: MediaPart[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const contextPrompt = `Context: This user is specifically building a ${mode.replace('_', ' ')}. 
    Current Input: ${userMessage || "Generate/Update the document based on provided files."}`;

    const parts: any[] = [{ text: contextPrompt }];
    if (mediaParts && mediaParts.length > 0) {
      mediaParts.forEach(m => {
        parts.push({
          inlineData: {
            data: m.data,
            mimeType: m.mimeType
          }
        });
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ parts }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.1,
      },
    });

    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error connecting to AI service.";
  }
};

export const fetchLiveJobs = async (query: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Find 6 real-world, current job listings for the following query: "${query}". 
      For each job, provide:
      1. Job Title
      2. Company Name
      3. Location
      4. Employment Type (Full-time, Remote, etc.)
      5. A very brief 1-sentence description for the preview.
      6. A detailed description (3-4 paragraphs) for the details page including requirements and benefits.
      7. The approximate date it was originally posted (e.g., '2 days ago', 'Yesterday', 'Mar 15').
      
      Format the response as a JSON array of objects.
      Schema:
      [
        {
          "title": "Job Title",
          "company": "Company Name",
          "location": "Location",
          "type": "Type",
          "description": "Short description",
          "fullJobDescription": "Detailed multi-paragraph description",
          "salary": "Estimated salary or 'Not specified'",
          "postedDate": "Date string"
        }
      ]`,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              company: { type: Type.STRING },
              location: { type: Type.STRING },
              type: { type: Type.STRING },
              description: { type: Type.STRING },
              fullJobDescription: { type: Type.STRING },
              salary: { type: Type.STRING },
              postedDate: { type: Type.STRING }
            },
            required: ["title", "company", "location", "type", "description", "fullJobDescription", "salary", "postedDate"]
          }
        }
      },
    });

    const jobs = JSON.parse(response.text);
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map((chunk: any) => ({
      title: chunk.web?.title || "Job Source",
      uri: chunk.web?.uri || "#"
    })) || [];

    return { jobs, sources };
  } catch (error) {
    console.error("Job Search Error:", error);
    throw error;
  }
};

export const getMockInterviewResponse = async (history: { role: 'user' | 'assistant', content: string }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
      config: {
        systemInstruction: INTERVIEW_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Let's continue the interview. What else would you like to share?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to our systems. Could you repeat that?";
  }
};

export const analyzeAtsScore = async (resumeText: string, jobDescription: string, resumeFiles?: MediaPart[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `RESUME CONTENT:\n${resumeText}\n\nJOB DESCRIPTION:\n${jobDescription}`;
    
    const parts: any[] = [{ text: prompt }];
    if (resumeFiles && resumeFiles.length > 0) {
      resumeFiles.forEach(f => {
        parts.push({
          inlineData: {
            data: f.data,
            mimeType: f.mimeType
          }
        });
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [{ parts }],
      config: {
        systemInstruction: ATS_SCORER_SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overallScore: { type: Type.NUMBER },
            formattingScore: { type: Type.NUMBER },
            keywordScore: { type: Type.NUMBER },
            findings: {
              type: Type.OBJECT,
              properties: {
                matchingKeywords: { type: Type.ARRAY, items: { type: Type.STRING } },
                missingKeywords: { type: Type.ARRAY, items: { type: Type.STRING } },
                formattingIssues: { type: Type.ARRAY, items: { type: Type.STRING } },
                improvementSuggestions: { type: Type.ARRAY, items: { type: Type.STRING } },
              },
              required: ["matchingKeywords", "missingKeywords", "formattingIssues", "improvementSuggestions"]
            },
            summary: { type: Type.STRING }
          },
          required: ["overallScore", "formattingScore", "keywordScore", "findings", "summary"]
        }
      },
    });

    const result = JSON.parse(response.text);
    return result;
  } catch (error) {
    console.error("ATS Analysis Error:", error);
    throw error;
  }
};