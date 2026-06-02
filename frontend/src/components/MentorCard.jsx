import React from 'react';
import { Star, Building2, CheckCircle2 } from 'lucide-react';

export function MentorCard({ mentor, onSelect }) {
  return (
    <div className="bg-slate-800 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
      <div className="p-6 flex-grow space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="relative">
            <img 
              src={mentor.image} 
              alt={mentor.name} 
              className="w-16 h-16 rounded-full object-cover border-2 border-slate-700"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-slate-800">
              <CheckCircle2 className="w-3 h-3 text-white" />
            </div>
          </div>
          
          <div className="flex items-center gap-1 bg-slate-900/50 px-2.5 py-1 rounded-full border border-slate-700/50">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-slate-200">{mentor.rating}</span>
            <span className="text-xs text-slate-500">({mentor.reviews})</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white truncate">{mentor.name}</h3>
          <p className="text-blue-400 font-medium text-sm mt-1">{mentor.role}</p>
          <div className="flex items-center gap-1.5 mt-2 text-slate-400 text-sm">
            <Building2 className="w-4 h-4" />
            <span className="truncate">{mentor.company}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-700/50">
          <p className="text-xs text-slate-500 uppercase font-semibold mb-3 tracking-wider">Expertise</p>
          <div className="flex flex-wrap gap-2">
            {mentor.expertise.map((tag, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 text-xs font-medium bg-slate-900 text-slate-300 rounded-lg border border-slate-700/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-900/30 border-t border-slate-700/50 mt-auto">
        <button 
          onClick={() => onSelect(mentor.id)}
          className="w-full py-2.5 px-4 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-xl transition-colors duration-200"
        >
          Select Mentor
        </button>
      </div>
    </div>
  );
}
