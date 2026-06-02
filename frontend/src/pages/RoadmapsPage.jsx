import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, BookOpen, Clock, ArrowRight } from 'lucide-react';

export function RoadmapsPage({ enrolledTracks }) {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-white">My Roadmaps</h1>
        <p className="text-slate-400 mt-1">Tracks you are currently enrolled in.</p>
      </div>

      {enrolledTracks.length === 0 ? (
        <div className="bg-slate-800/50 rounded-3xl p-10 border border-slate-700/50 border-dashed flex flex-col items-center justify-center text-center">
          <div className="bg-slate-800 p-4 rounded-full mb-4">
            <Compass className="w-8 h-8 text-slate-400" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">No Active Tracks</h2>
          <p className="text-slate-400 max-w-md mb-6">
            You haven't enrolled in any mentorship roadmaps yet. Visit the Mentor Match page to find a guide and start your journey.
          </p>
          <button 
            onClick={() => navigate('/mentors')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-sm"
          >
            Find a Mentor
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledTracks.map(track => (
            <div key={track.id} className="bg-slate-800 rounded-3xl p-6 border border-slate-700/50 flex flex-col h-full hover:border-blue-500/50 transition-colors shadow-sm group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 font-bold text-blue-400">
                  {track.mentor.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-white">{track.projectTitle}</h3>
                  <p className="text-sm text-slate-400">Mentor: {track.mentor.name}</p>
                  <p className="text-xs text-blue-400 font-medium mt-1 uppercase tracking-wider">{track.field}</p>
                </div>
              </div>

              <div className="flex-grow"></div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-400">Overall Progress</span>
                  <span className="text-blue-400">{track.progress}%</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-700/50">
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-500" 
                    style={{ width: `${track.progress}%` }}
                  ></div>
                </div>
              </div>

              <button 
                onClick={() => navigate(`/roadmaps/${track.id}`)}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 hover:border-blue-500 font-bold py-3 rounded-xl transition-colors"
              >
                Continue Track
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
