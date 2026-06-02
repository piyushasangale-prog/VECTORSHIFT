import React from 'react';
import { Code, Database, Layout, Sparkles } from 'lucide-react';

const categories = [
  { id: 'Web Development', label: 'Web Development', icon: Code, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { id: 'Data Science', label: 'Data Science', icon: Database, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { id: 'UI/UX', label: 'UI/UX Design', icon: Layout, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
];

export function GoalSelection({ selectedGoal, onSelectGoal }) {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-2 border border-blue-500/20">
          <Sparkles className="w-4 h-4" />
          <span>Find your path</span>
        </div>
        <h2 className="text-3xl font-bold text-white">What's your learning goal?</h2>
        <p className="text-slate-400 max-w-lg mx-auto">
          Choose a path to discover top mentors who can help you accelerate your career and master new skills.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {categories.map((category) => {
          const isSelected = selectedGoal === category.id;
          const Icon = category.icon;
          
          return (
            <button
              key={category.id}
              onClick={() => onSelectGoal(category.id)}
              className={`
                group relative flex flex-col items-center p-6 rounded-2xl border transition-all duration-300
                ${isSelected 
                  ? `bg-slate-800 ${category.border} shadow-[0_0_20px_rgba(0,0,0,0.2)] shadow-${category.color.split('-')[1]}-500/20 scale-105 z-10` 
                  : 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 hover:scale-[1.02]'
                }
              `}
            >
              <div className={`p-4 rounded-xl mb-4 ${category.bg} ${category.color} transition-transform group-hover:scale-110`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className={`text-lg font-semibold ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                {category.label}
              </h3>
              
              {isSelected && (
                <div className="absolute inset-0 border-2 rounded-2xl border-current opacity-20 pointer-events-none" style={{ color: 'inherit' }} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
