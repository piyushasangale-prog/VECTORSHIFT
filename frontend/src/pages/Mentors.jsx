import React, { useState } from 'react';
import { MOCK_MENTORS } from '../mockData';
import { useNavigate } from 'react-router-dom';
import { Users, Filter, Star } from 'lucide-react';

const Mentors = ({ onSelect }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filteredMentors = filter === 'All' 
    ? MOCK_MENTORS 
    : MOCK_MENTORS.filter(m => m.domain === filter);

  return (
    <div className='p-8 bg-slate-950 min-h-screen text-slate-200'>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className='text-4xl font-black text-white tracking-tight mb-2'>Find your Mentor</h1>
          <p className="text-slate-400 font-medium">Expert guidance tailored to your career goals.</p>
        </div>

        <div className='flex items-center bg-slate-900 p-1.5 rounded-2xl border border-slate-800 shadow-xl'>
          {['All', 'Tech', 'Core', 'Non-Tech'].map(d => (
            <button 
              key={d} 
              onClick={() => setFilter(d)} 
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                filter === d 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredMentors.map(mentor => (
          <div key={mentor.id} className='group bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all relative overflow-hidden'>
            <div className="absolute top-0 right-0 p-6">
              <div className="flex items-center gap-1 bg-slate-950/50 px-2 py-1 rounded-lg border border-slate-800">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                <span className="text-xs font-bold text-slate-300">{mentor.rating || '4.8'}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className='font-black text-2xl text-white group-hover:text-blue-400 transition-colors mb-1'>{mentor.name}</h3>
              <p className='text-slate-400 text-sm font-semibold'>{mentor.role} @ <span className="text-blue-500">{mentor.company}</span></p>
            </div>

            <div className='flex flex-wrap gap-2 mb-8'>
              {mentor.expertise.map(skill => (
                <span key={skill} className='bg-slate-950 text-slate-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg border border-slate-800 group-hover:border-blue-500/30 transition-colors'>
                  {skill}
                </span>
              ))}
            </div>

            <button 
              onClick={() => { onSelect(mentor); navigate('/projects'); }} 
              className='w-full py-4 bg-slate-950 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500 rounded-2xl font-black transition-all flex items-center justify-center gap-2 group/btn'
            >
              Select Mentor
              <Users className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Mentors;
