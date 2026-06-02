import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, PenTool, Briefcase, Clock, Zap, ArrowRight } from 'lucide-react';
import { mockProjectsData } from '../data/mockData';

export function ProjectsPage({ onStartBuilding, selectedMentor }) {
  const [filter, setFilter] = useState(selectedMentor ? selectedMentor.domain : 'All');
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedMentor) {
      setFilter(selectedMentor.domain);
    }
  }, [selectedMentor]);

  const domains = ['All', 'Tech', 'Core', 'Non-Tech'];

  const filteredProjects = filter === 'All' 
    ? mockProjectsData 
    : mockProjectsData.filter(p => p.domain === filter);

  const getDomainIcon = (domain) => {
    switch(domain) {
      case 'Tech': return <Code className="w-5 h-5 text-blue-400" />;
      case 'Core': return <PenTool className="w-5 h-5 text-orange-400" />;
      case 'Non-Tech': return <Briefcase className="w-5 h-5 text-purple-400" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (diff) => {
    switch(diff) {
      case 'Beginner': return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Intermediate': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
      case 'Advanced': return 'bg-red-500/10 text-red-400 border-red-500/20';
      default: return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Project Portfolio</h1>
          <p className="text-slate-400 mt-1">Build real-world projects to showcase on your resume.</p>
        </div>

        <div className="flex bg-slate-800 rounded-xl p-1 border border-slate-700/50 shadow-sm w-fit">
          {domains.map(d => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                filter === d 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-slate-800 rounded-3xl border border-slate-700/50 shadow-sm p-6 flex flex-col h-full hover:border-blue-500/50 hover:shadow-lg transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-700/50">
                {getDomainIcon(project.domain)}
              </div>
              <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(project.difficulty)}`}>
                {project.difficulty}
              </span>
            </div>

            <h3 className="font-bold text-white text-xl mb-2">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">{project.desc}</p>

            <div className="flex items-center gap-4 mb-6 text-sm font-medium text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-500" />
                {project.time}
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-slate-500" />
                {project.domain}
              </div>
            </div>

            <button 
              onClick={() => {
                onStartBuilding(project);
                navigate('/roadmaps');
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 hover:border-blue-500 font-bold py-3 rounded-xl transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500"
            >
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
