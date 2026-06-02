import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, ArrowRight } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-blue-500/10 p-4 rounded-full mb-8 border border-blue-500/20">
        <Rocket className="w-16 h-16 text-blue-400" />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        Master Skills with <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          VectorShift
        </span>
      </h1>
      
      <p className="text-xl text-slate-400 max-w-2xl mb-12">
        A premium mentorship platform providing curated roadmaps, 
        expert guidance, and real-world project tracking for students.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link 
          to="/dashboard"
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
        >
          View Dashboard
          <ArrowRight className="w-5 h-5" />
        </Link>
        <Link 
          to="/login"
          className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-4 px-8 rounded-xl transition-all border border-slate-700 hover:border-slate-600"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
