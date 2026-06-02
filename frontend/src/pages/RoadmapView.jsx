import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { CheckCircle2, Circle, Link as LinkIcon, BookOpen, ChevronRight, Check, Send, BadgeCheck } from 'lucide-react';
import roadmapData from '../data/roadmap.json';

export function RoadmapView() {
  const { trackId } = useParams();
  const [taskStates, setTaskStates] = useState({});

  const getTaskState = (taskId) => {
    return taskStates[taskId] || { url: '', status: 'Pending' };
  };

  const handleUrlChange = (taskId, url) => {
    setTaskStates(prev => ({
      ...prev,
      [taskId]: {
        ...getTaskState(taskId),
        url
      }
    }));
  };

  const handleSubmitTask = (taskId) => {
    const currentState = getTaskState(taskId);
    if (!currentState.url.trim()) {
      alert("Please enter a valid Proof of Work URL before submitting.");
      return;
    }

    // Mock immediate successful submission for the demo
    setTaskStates(prev => ({
      ...prev,
      [taskId]: {
        ...getTaskState(taskId),
        status: 'Submitted'
      }
    }));
  };

  const totalTasks = useMemo(() => {
    return roadmapData.days.reduce((acc, day) => acc + day.tasks.length, 0);
  }, []);

  const progressPercentage = useMemo(() => {
    const completedCount = Object.values(taskStates).filter(
      t => t.status === 'Submitted' || t.status === 'Reviewed'
    ).length;
    
    return totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);
  }, [taskStates, totalTasks]);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Submitted':
        return (
          <span className="flex items-center gap-1 bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded text-xs font-bold">
            <BadgeCheck className="w-3.5 h-3.5" />
            Work Verified
          </span>
        );
      case 'Reviewed':
        return <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded text-xs font-bold">Reviewed</span>;
      default:
        return <span className="bg-slate-700 text-slate-300 border border-slate-600 px-2 py-0.5 rounded text-xs font-bold">Pending</span>;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10 pb-20 animate-in fade-in duration-500 p-4 md:p-8">
      
      {/* Header & Progress Bar */}
      <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700/50 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-700">
          <div 
            className="h-full bg-blue-500 transition-all duration-700 ease-out" 
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-3 border border-blue-500/20">
              <span>{roadmapData.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{roadmapData.title}</h1>
            <p className="text-slate-400">Submit proof of work to progress through the curriculum.</p>
          </div>
          
          <div className="flex flex-col items-center justify-center bg-slate-900 rounded-2xl p-6 border border-slate-700/50 min-w-[160px]">
            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-500">
              {progressPercentage}%
            </span>
            <span className="text-slate-400 text-sm font-semibold mt-1">Overall Progress</span>
            <span className="text-xs text-slate-500 mt-2 font-medium">
              {Math.round((progressPercentage / 100) * totalTasks)} of {totalTasks} tasks
            </span>
          </div>
        </div>
      </div>

      {/* Days List */}
      <div className="space-y-6">
        {roadmapData.days.map((day) => {
          const isDayComplete = day.tasks.every(t => {
            const status = getTaskState(t.id).status;
            return status === 'Submitted' || status === 'Reviewed';
          });
          
          return (
            <div 
              key={day.id} 
              className={`bg-slate-800/50 rounded-2xl border transition-colors duration-300 shadow-sm ${
                isDayComplete ? 'border-blue-500/30 shadow-blue-500/10' : 'border-slate-700/50 hover:border-slate-600'
              }`}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-xl font-bold ${
                      isDayComplete ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20' : 'bg-slate-700 text-slate-300'
                    }`}>
                      {isDayComplete ? <Check className="w-5 h-5" /> : day.id}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white">{day.title}</h2>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {day.tasks.map(task => {
                    const taskState = getTaskState(task.id);
                    const isTaskSubmitted = taskState.status === 'Submitted' || taskState.status === 'Reviewed';
                    
                    return (
                      <div 
                        key={task.id} 
                        className={`flex flex-col gap-4 p-5 rounded-xl border transition-all duration-200 ${
                          isTaskSubmitted 
                            ? 'bg-blue-500/5 border-blue-500/20' 
                            : 'bg-slate-900/50 border-slate-700/50 hover:bg-slate-900'
                        }`}
                      >
                        {/* Task Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-4 flex-grow">
                            <div className="mt-0.5 pointer-events-none">
                              {isTaskSubmitted ? (
                                <CheckCircle2 className="w-5 h-5 text-blue-500" />
                              ) : (
                                <Circle className="w-5 h-5 text-slate-500" />
                              )}
                            </div>
                            <span className={`text-base select-none transition-colors duration-200 font-medium ${
                              isTaskSubmitted ? 'text-slate-500 line-through decoration-slate-500' : 'text-slate-200'
                            }`}>
                              {task.title}
                            </span>
                          </div>
                          <div className="flex-shrink-0 mt-1">
                            {getStatusBadge(taskState.status)}
                          </div>
                        </div>

                        {/* Proof of Work Section */}
                        <div className="ml-9 flex flex-col sm:flex-row items-center gap-3">
                          <div className="relative flex-grow w-full">
                            <LinkIcon className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${taskState.url ? 'text-blue-400' : 'text-slate-500'}`} />
                            <input 
                              type="url"
                              placeholder="Proof of Work URL (e.g., github.com/repo)"
                              value={taskState.url}
                              onChange={(e) => handleUrlChange(task.id, e.target.value)}
                              disabled={isTaskSubmitted}
                              className={`w-full bg-slate-950 text-sm text-white rounded-lg py-2.5 pl-9 pr-3 outline-none border transition-colors ${
                                isTaskSubmitted 
                                  ? 'border-slate-800 text-slate-500 cursor-not-allowed opacity-60' 
                                  : 'border-slate-700 hover:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                              }`}
                            />
                          </div>
                          
                          {!isTaskSubmitted && (
                            <button 
                              onClick={() => handleSubmitTask(task.id)}
                              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors shadow-sm shadow-blue-600/20"
                            >
                              <Send className="w-4 h-4" />
                              Submit Work
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-6 border-t border-slate-700/50 flex justify-end">
                  <a 
                    href={day.resource.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors bg-indigo-500/10 px-4 py-2 rounded-lg border border-indigo-500/20"
                  >
                    <BookOpen className="w-4 h-4" />
                    {day.resource.title}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
