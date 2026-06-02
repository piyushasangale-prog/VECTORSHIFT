import React from 'react';
import { Target, Flame, CheckCircle, Activity, Briefcase, Code, PenTool } from 'lucide-react';
import { mockUserStats, mockRecentActivity } from '../data/mockData';

export function DashboardPage() {
  const stats = mockUserStats;
  const recentActivity = mockRecentActivity;

  // Determine domain specifics
  const domain = stats.domain;
  
  const getDomainConfig = () => {
    switch (domain) {
      case 'core':
        return { label: 'Simulations Completed', icon: PenTool, color: 'orange' };
      case 'non-tech':
        return { label: 'Case Studies Analyzed', icon: Briefcase, color: 'purple' };
      case 'tech':
      default:
        return { label: 'Tasks Solved', icon: Code, color: 'blue' };
    }
  };

  const domainConfig = getDomainConfig();
  const DomainIcon = domainConfig.icon;

  // SVG Semi-Circle logic
  const radius = 40;
  const circumference = Math.PI * radius;
  const dashoffset = circumference - (circumference * stats.industryScore) / 100;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      
      <div>
        <h1 className="text-3xl font-bold text-white">Student Hub</h1>
        <p className="text-slate-400 mt-1">Welcome back, {stats.name}. Here is your readiness overview.</p>
      </div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Industry-Ready Score */}
        <div className="md:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 md:p-8 border border-slate-700/50 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
          
          <div className="text-center relative z-10 mb-6">
            <h2 className="text-xl font-bold text-white">Industry Readiness</h2>
            <p className="text-slate-400 text-sm">Your overall capability score</p>
            
            <div className="mt-8 relative w-full max-w-xs mx-auto">
              <svg viewBox="0 0 100 55" className="w-full overflow-visible drop-shadow-xl">
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#1e293b" strokeWidth="8" strokeLinecap="round" />
                <path 
                  d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="url(#gradient)" 
                  strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} 
                  strokeDashoffset={dashoffset} className="transition-all duration-1000 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center">
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {stats.industryScore}%
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 relative z-10">
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300">Exam Readiness</span>
                <span className="text-blue-400">{stats.examReadiness}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${stats.examReadiness}%` }}></div>
              </div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300">Project Readiness</span>
                <span className="text-indigo-400">{stats.projectReadiness}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${stats.projectReadiness}%` }}></div>
              </div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-2xl border border-slate-700/50">
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300">Placement Readiness</span>
                <span className="text-purple-400">{stats.placementReadiness}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: `${stats.placementReadiness}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Stats Column */}
        <div className="flex flex-col gap-6">
          <div className={`bg-slate-800 rounded-2xl p-6 border border-slate-700/50 flex flex-col items-center justify-center text-center group hover:border-${domainConfig.color}-500/50 transition-colors flex-grow`}>
            <div className={`bg-${domainConfig.color}-500/10 p-4 rounded-full mb-3 group-hover:scale-110 transition-transform`}>
              <DomainIcon className={`w-8 h-8 text-${domainConfig.color}-400`} />
            </div>
            <p className="text-4xl font-bold text-white mb-1">{stats.totalSubmissions}</p>
            <p className="text-sm font-medium text-slate-400">{domainConfig.label}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700/50 flex flex-col items-center text-center group hover:border-orange-500/50 transition-colors">
              <div className="bg-orange-500/10 p-3 rounded-full mb-2">
                <Flame className="w-6 h-6 text-orange-400" />
              </div>
              <p className="text-2xl font-bold text-white">{stats.currentStreak}</p>
              <p className="text-xs font-medium text-slate-400">Streak</p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700/50 flex flex-col items-center text-center group hover:border-green-500/50 transition-colors">
              <div className="bg-green-500/10 p-3 rounded-full mb-2">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-2xl font-bold text-white">{stats.goalsMet}</p>
              <p className="text-xs font-medium text-slate-400">Goals Met</p>
            </div>
          </div>
        </div>

        {/* Recent Activity List */}
        <div className="md:col-span-2 bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700/50">
          <div className="flex items-center gap-2 mb-6">
            <Activity className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700/30 hover:bg-slate-900 transition-colors">
                <div className="mt-1 bg-green-500/20 rounded-full p-1 border border-green-500/30">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{activity.task}</p>
                  <div className="flex items-center gap-3 mt-1.5 text-xs text-slate-400">
                    <span className="text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                      {activity.track}
                    </span>
                    <span>{activity.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
