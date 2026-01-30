import React, { useState, useEffect } from 'react';
import { fetchLiveJobs } from '../services/geminiService.ts';

const JobCard: React.FC<{ job: any; sourceLink?: string; onViewDetails: (job: any, source: string) => void }> = ({ job, sourceLink, onViewDetails }) => (
  <div className="bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1918f0]/10 hover:-translate-y-1 flex flex-col h-full group">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100 group-hover:bg-[#1918f0]/5 transition-colors">
          <span className="text-xl font-bold text-[#1918f0]">{job.company?.charAt(0)}</span>
        </div>
        <div>
          <h3 className="font-bold text-[#110584] text-lg leading-tight group-hover:text-[#1918f0] transition-colors line-clamp-1">{job.title}</h3>
          <p className="text-[#110584]/60 text-sm font-medium">{job.company}</p>
        </div>
      </div>
      <span className="text-[9px] font-black uppercase text-gray-400 bg-gray-50 px-2 py-1 rounded flex-shrink-0">{job.postedDate}</span>
    </div>
    
    <p className="text-xs text-gray-500 mb-4 line-clamp-2 leading-relaxed">
      {job.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
      <span className="px-3 py-1 bg-gray-50 text-[#110584]/60 rounded-lg text-[9px] font-bold uppercase tracking-wider">{job.location}</span>
      <span className="px-3 py-1 bg-gray-50 text-[#110584]/60 rounded-lg text-[9px] font-bold uppercase tracking-wider">{job.type}</span>
      <span className="px-3 py-1 bg-[#1918f0]/5 text-[#1918f0] rounded-lg text-[9px] font-bold uppercase tracking-wider">{job.salary}</span>
    </div>

    <div className="grid grid-cols-2 gap-2">
      <button 
        onClick={() => onViewDetails(job, sourceLink || "#")}
        className="py-3 rounded-xl font-bold text-xs border-2 border-[#1918f0] text-[#1918f0] hover:bg-[#1918f0] hover:text-white transition-all text-center"
      >
        View Details
      </button>
      <a 
        href={sourceLink || "#"} 
        target="_blank" 
        rel="noopener noreferrer"
        className="primary-btn py-3 rounded-xl font-bold text-xs shadow-lg shadow-[#1918f0]/10 text-center block"
      >
        Quick Apply
      </a>
    </div>
  </div>
);

const JobDetailView: React.FC<{ job: any; sourceLink: string; onBack: () => void }> = ({ job, sourceLink, onBack }) => (
  <div className="bg-white font-['Inter Tight'] min-h-screen">
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button onClick={onBack} className="flex items-center gap-2 text-[#1918f0] font-bold text-sm mb-12">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
        back to search
      </button>

      <div className="bg-white rounded-[32px] border border-gray-100 p-8 md:p-12 shadow-2xl shadow-gray-100 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-100">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-[24px] bg-gray-50 flex items-center justify-center border border-gray-100 text-3xl font-black text-[#1918f0]">
              {job.company?.charAt(0)}
            </div>
            <div>
              <h2 className="text-3xl font-black text-[#110584] leading-tight mb-1">{job.title}</h2>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-lg font-bold text-[#1918f0]">{job.company}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-sm font-medium text-gray-500">{job.location}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-xs font-black uppercase text-[#1918f0] bg-[#1918f0]/5 px-2.5 py-1 rounded-lg">{job.postedDate}</span>
              </div>
            </div>
          </div>
          <a 
            href={sourceLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="primary-btn px-10 py-4 rounded-2xl font-bold shadow-xl shadow-[#1918f0]/20 text-center"
          >
            Apply for this Job
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Employment</div>
            <div className="font-bold text-[#110584]">{job.type}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Estimated Salary</div>
            <div className="font-bold text-[#110584]">{job.salary}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Location</div>
            <div className="font-bold text-[#110584]">{job.location}</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Source</div>
            <div className="font-bold text-[#1918f0] truncate">{new URL(sourceLink).hostname}</div>
          </div>
        </div>

        <div className="space-y-6 pt-4">
          <h3 className="text-xl font-black text-[#110584]">About the Role</h3>
          <div className="text-lg text-[#110584]/70 leading-relaxed whitespace-pre-wrap">
            {job.fullJobDescription}
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="font-bold text-[#110584]">Ready to take the next step?</h4>
              <p className="text-sm text-gray-500">Apply via the original listing board.</p>
            </div>
            <a 
              href={sourceLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="primary-btn px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-[#1918f0]/20"
            >
              Go to Application
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const JobsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);
  const [sources, setSources] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [selectedSource, setSelectedSource] = useState<string>('');
  const [isDiscovering, setIsDiscovering] = useState(true);

  // Initial bulk load on mount
  useEffect(() => {
    const discoverJobs = async () => {
      setIsLoading(true);
      try {
        const results = await fetchLiveJobs("Trending Remote Software Engineering and Marketing jobs posted this week");
        setJobs(results.jobs);
        setSources(results.sources);
      } catch (err) {
        console.error("Auto-discovery failed", err);
      } finally {
        setIsLoading(false);
        setIsDiscovering(false);
      }
    };
    discoverJobs();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setHasSearched(true);
    setSelectedJob(null);
    try {
      const fullQuery = `${searchQuery} jobs in ${location || 'Global'}`;
      const results = await fetchLiveJobs(fullQuery);
      setJobs(results.jobs);
      setSources(results.sources);
    } catch (err) {
      console.error(err);
      alert("Search failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewDetails = (job: any, source: string) => {
    setSelectedJob(job);
    setSelectedSource(source);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedJob) {
    return <JobDetailView job={selectedJob} sourceLink={selectedSource} onBack={() => setSelectedJob(null)} />;
  }

  return (
    <div className="bg-white font-['Inter Tight'] min-h-screen">
      <section className="bg-gray-50 border-b border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl lg:text-6xl font-semibold text-[#110584] leading-[1.15] tracking-[-0.04em] mb-6">
              Search real jobs <br />with AI live search.
            </h1>
            <p className="text-lg text-[#110584]/60 max-w-xl mb-8">
              We browse the live web across LinkedIn, Indeed, and major job boards to find the most current opportunities for you.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Role (e.g. Senior Frontend)" 
                  className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[#1918f0] focus:ring-4 focus:ring-[#1918f0]/5 transition-all"
                />
              </div>
              <div className="relative flex-1">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <input 
                  type="text" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Location (e.g. New York)" 
                  className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[#1918f0] focus:ring-4 focus:ring-[#1918f0]/5 transition-all"
                />
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="primary-btn px-8 py-4 rounded-2xl font-bold shadow-xl shadow-[#1918f0]/20 flex items-center justify-center gap-2 whitespace-nowrap min-w-[160px]"
              >
                {isLoading && !isDiscovering ? (
                  <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
                ) : (
                  "Find Jobs"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#110584]">
              {hasSearched ? `Search Results for "${searchQuery}"` : "Live Career Feed"}
            </h2>
            <p className="text-sm text-gray-500">
              {isLoading ? "Fetching real-time data from major job boards..." : `Showing ${jobs.length} recently verified opportunities`}
            </p>
          </div>
          {!isLoading && jobs.length > 0 && (
            <div className="flex items-center gap-2 text-[#1918f0] font-bold text-xs uppercase tracking-widest bg-[#1918f0]/5 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-[#1918f0] rounded-full animate-pulse"></div>
              Live Feed Active
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl h-72 animate-pulse border border-gray-100 flex flex-col p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                <div className="mt-auto grid grid-cols-2 gap-2">
                  <div className="h-10 bg-gray-200 rounded-xl"></div>
                  <div className="h-10 bg-gray-200 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        ) : jobs.length > 0 ? (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job, i) => (
                <JobCard 
                  key={i} 
                  job={job} 
                  sourceLink={sources[i % sources.length]?.uri} 
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
            
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-[#1918f0]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <h4 className="text-sm font-bold text-[#191929] uppercase tracking-widest">Verified Sources & Job Boards</h4>
              </div>
              <div className="flex flex-wrap gap-4">
                {sources.map((source, i) => (
                  <a 
                    key={i} 
                    href={source.uri} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-[#1918f0] font-bold hover:underline bg-white px-3 py-1.5 rounded-lg border border-gray-200 flex items-center gap-2"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 00 2 2h10a2 2 0 00 2-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    {source.title.split('|')[0].trim()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : hasSearched ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-[#110584]">No live jobs found matching that query</h3>
            <p className="text-[#110584]/60 mt-2">Try simplifying your role name or changing the location.</p>
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-[#110584]/40 uppercase tracking-widest">Unable to load feed. Check your connection.</h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobsSection;