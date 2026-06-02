import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Rocket, Home, LayoutDashboard, Map as MapIcon, Users, Menu, X, ChevronRight, BookOpen, Briefcase } from 'lucide-react';

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'My Roadmaps', path: '/roadmaps', icon: MapIcon },
    { name: 'Exams', path: '/exams', icon: BookOpen },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Mentor Match', path: '/mentors', icon: Users },
  ];

  return (
    <aside 
      className={`bg-slate-900 border-r border-slate-800 transition-all duration-300 flex flex-col sticky top-0 h-screen shadow-lg z-50 ${
        isExpanded ? 'w-64' : 'w-20'
      }`}
    >
      {/* Sidebar Header */}
      <div className={`h-16 flex items-center border-b border-slate-800 px-4 ${isExpanded ? 'justify-between' : 'justify-center'}`}>
        {isExpanded && (
          <Link to="/" className="flex items-center gap-2 group overflow-hidden">
            <div className="bg-blue-600 p-1.5 rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent whitespace-nowrap">
              VectorShift
            </span>
          </Link>
        )}
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ${!isExpanded && 'mx-auto'}`}
        >
          {isExpanded ? <Menu className="w-5 h-5" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-2">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path || (link.path === '/dashboard' && location.pathname === '/');
          
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all group relative overflow-hidden ${
                isActive 
                  ? 'bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/20' 
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 font-medium border border-transparent'
              } ${!isExpanded && 'justify-center'}`}
            >
              <Icon className={`flex-shrink-0 ${isExpanded ? 'w-5 h-5' : 'w-6 h-6'} transition-transform group-hover:scale-110`} />
              
              {isExpanded && (
                <span className="whitespace-nowrap">{link.name}</span>
              )}

              {isExpanded && isActive && (
                <ChevronRight className="w-4 h-4 ml-auto opacity-50" />
              )}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
