import React, { useState } from 'react';
import { BookOpen, Calculator, BrainCircuit } from 'lucide-react';
import { mockExamsData } from '../data/mockData';

export function ExamsPage() {
  const [selectedBranch, setSelectedBranch] = useState(mockExamsData.branches[0]);
  const [selectedSemester, setSelectedSemester] = useState(mockExamsData.semesters[0]);

  const subjects = mockExamsData.subjects[selectedBranch] || [];

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-white">Exam Preparation</h1>
        <p className="text-slate-400 mt-1">Select your branch and semester to access study materials.</p>
      </div>

      <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700/50 shadow-sm flex flex-col md:flex-row gap-6 items-end">
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-semibold text-slate-300 mb-2">Branch</label>
          <select 
            className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            {mockExamsData.branches.map(branch => (
              <option key={branch} value={branch}>{branch}</option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/2">
          <label className="block text-sm font-semibold text-slate-300 mb-2">Semester</label>
          <select 
            className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
          >
            {mockExamsData.semesters.map(sem => (
              <option key={sem} value={sem}>{sem}</option>
            ))}
          </select>
        </div>
      </div>

      {subjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map(subject => (
            <div key={subject.id} className="bg-slate-800 rounded-3xl border border-slate-700/50 shadow-sm p-6 flex flex-col h-full hover:border-blue-500/50 transition-colors group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">{subject.name}</h3>
                  <p className="text-slate-400 text-sm font-medium">{subject.code}</p>
                </div>
              </div>

              <div className="flex-grow"></div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="flex flex-col items-center justify-center gap-2 bg-slate-900/50 hover:bg-slate-700 text-slate-300 font-semibold py-3 rounded-xl transition-colors border border-slate-700/50 hover:border-slate-600">
                  <Calculator className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm">Formula List</span>
                </button>
                <button className="flex flex-col items-center justify-center gap-2 bg-blue-500/10 hover:bg-blue-600 text-blue-400 hover:text-white font-semibold py-3 rounded-xl transition-colors border border-blue-500/20 hover:border-blue-500">
                  <BrainCircuit className="w-5 h-5" />
                  <span className="text-sm">AI Quiz</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-800/50 rounded-3xl border border-slate-700/50 border-dashed">
          <p className="text-slate-400 text-lg">No subjects found for this combination.</p>
        </div>
      )}
    </div>
  );
}
