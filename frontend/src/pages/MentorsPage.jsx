import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, Briefcase, GraduationCap } from 'lucide-react';
import mentorsData from '../data/mentors.json';

const GOALS = [
  "Web Development",
  "Data Science",
  "Product Management",
  "UI/UX Design",
  "Core Engineering",
];

export function MentorsPage({ onEnroll }) {
  const [selectedGoal, setSelectedGoal] = useState('');
  const navigate = useNavigate();

  const filteredMentors = selectedGoal
    ? mentorsData.mentors.filter(m => m.expertise.includes(selectedGoal))
    : mentorsData.mentors;

  const handleEnroll = (mentor) => {
    if (!selectedGoal) {
      alert("Please select a goal first!");
      return;
    }
    onEnroll(selectedGoal, mentor);
    navigate('/dashboard');
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-white">Find Your Guide</h1>
        <p className="text-slate-400 mt-1">Select your goal and match with an industry expert.</p>
      </div>

      {/* Goal Selection */}
      <div className="bg-slate-800 rounded-3xl p-6 md:p-8 border border-slate-700/50 shadow-sm">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <TargetIcon /> What do you want to master?
        </h2>
        <div className="flex flex-wrap gap-3">
          {GOALS.map(goal => (
            <button
              key={goal}
              onClick={() => setSelectedGoal(goal)}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                selectedGoal === goal
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 border-transparent'
                  : 'bg-slate-900/50 text-slate-300 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800'
              }`}
            >
              {goal}
            </button>
          ))}
        </div>
      </div>

      {/* Mentors Grid */}
      {selectedGoal && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Available Mentors for {selectedGoal}</h2>
            <span className="text-sm font-medium text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700/50">
              {filteredMentors.length} found
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map(mentor => (
              <div key={mentor.id} className="bg-slate-800 rounded-3xl p-6 border border-slate-700/50 flex flex-col h-full hover:border-blue-500/50 transition-all group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                      <span className="text-xl font-bold text-blue-400">{mentor.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{mentor.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-slate-400 font-medium">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        {mentor.rating} ({mentor.reviews} reviews)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Briefcase className="w-4 h-4 text-blue-400" />
                    {mentor.role} @ {mentor.company}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                    {mentor.experience} Years Experience
                  </div>
                </div>

                <div className="flex-grow"></div>

                <button 
                  onClick={() => handleEnroll(mentor)}
                  className="w-full bg-slate-900/50 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-700 hover:border-blue-500 font-bold py-3 rounded-xl transition-colors mt-4"
                >
                  Select & Enroll
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function TargetIcon() {
  return (
    <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}
