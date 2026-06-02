import { useNavigate } from 'react-router-dom';
import { MOCK_USER_STATS } from '../mockData';
import { Flame, Target, Zap, Activity, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className='p-8 bg-slate-950 min-h-screen text-slate-200'>
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className='text-4xl font-black mb-2 text-white tracking-tight'>Student Hub</h1>
          <p className="text-slate-400 font-medium">Welcome back! Here's your industry readiness overview.</p>
        </div>
        
        <button 
          onClick={() => navigate('/roadmaps')}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95 group"
        >
          CONTINUE
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Main Score Card */}
        <div className='md:col-span-2 bg-slate-900 p-8 rounded-[2rem] shadow-2xl border border-slate-800 relative overflow-hidden group'>
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -mr-32 -mt-32 rounded-full transition-all group-hover:bg-blue-600/20"></div>
          
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Activity className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className='text-slate-300 font-bold text-lg uppercase tracking-wider'>Industry-Ready Score</h2>
          </div>

          <div className='flex items-baseline gap-2 mb-8'>
            <div className='text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600'>{MOCK_USER_STATS.overallProgress}%</div>
          </div>

          <div className='space-y-6 relative z-10'>
            <div>
              <div className='flex justify-between text-sm font-bold mb-2'>
                <span className="text-slate-400">Exam Readiness</span>
                <span className="text-blue-400">{MOCK_USER_STATS.examReadiness}%</span>
              </div>
              <div className='w-full bg-slate-950 h-3 rounded-full border border-slate-800 overflow-hidden'>
                <div className='bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full transition-all duration-1000' style={{width: `${MOCK_USER_STATS.examReadiness}%`}}></div>
              </div>
            </div>
            <div>
              <div className='flex justify-between text-sm font-bold mb-2'>
                <span className="text-slate-400">Project Readiness</span>
                <span className="text-indigo-400">{MOCK_USER_STATS.projectReadiness}%</span>
              </div>
              <div className='w-full bg-slate-950 h-3 rounded-full border border-slate-800 overflow-hidden'>
                <div className='bg-gradient-to-r from-indigo-500 to-purple-400 h-full rounded-full transition-all duration-1000' style={{width: `${MOCK_USER_STATS.projectReadiness}%`}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Streak Card */}
        <div className='bg-slate-900 p-8 rounded-[2rem] shadow-xl flex flex-col items-center justify-center border border-slate-800 hover:border-orange-500/30 transition-all group'>
          <div className='bg-orange-500/10 p-5 rounded-3xl mb-4 group-hover:scale-110 transition-transform'>
            <Flame className="w-10 h-10 text-orange-500 fill-orange-500/20" />
          </div>
          <div className='text-5xl font-black text-white mb-1'>{MOCK_USER_STATS.streak}</div>
          <p className='text-slate-500 text-sm font-bold uppercase tracking-widest'>Day Streak</p>
        </div>

        {/* Tasks Card */}
        <div className='bg-slate-900 p-8 rounded-[2rem] shadow-xl flex flex-col items-center justify-center border border-slate-800 hover:border-blue-500/30 transition-all group'>
          <div className='bg-blue-500/10 p-5 rounded-3xl mb-4 group-hover:scale-110 transition-transform'>
            <Target className="w-10 h-10 text-blue-500 fill-blue-500/20" />
          </div>
          <div className='text-5xl font-black text-white mb-1'>{MOCK_USER_STATS.tasksDone}</div>
          <p className='text-slate-500 text-sm font-bold uppercase tracking-widest'>Tasks Done</p>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
