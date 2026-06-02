import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { RoadmapsPage } from './pages/RoadmapsPage';
import { RoadmapView } from './pages/RoadmapView';
import Mentors from './pages/Mentors';
import { ExamsPage } from './pages/ExamsPage';
import { ProjectsPage } from './pages/ProjectsPage';

function App() {
  const [enrolledTracks, setEnrolledTracks] = useState([]);
  const [selectedMentor, setSelectedMentor] = useState(null);

  const handleMentorSelect = (mentor) => {
    setSelectedMentor(mentor);
  };

  const handleProjectEnroll = (project) => {
    if (!selectedMentor) {
      alert("Please select a mentor first!");
      return;
    }
    
    const trackId = `${project.title.toLowerCase().replace(/\s+/g, '-')}-${selectedMentor.id}`;
    
    if (!enrolledTracks.some(track => track.id === trackId)) {
      setEnrolledTracks([...enrolledTracks, { 
        id: trackId, 
        projectTitle: project.title,
        field: project.domain,
        mentor: selectedMentor, 
        progress: 0,
        enrolledAt: new Date().toISOString() 
      }]);
    }
  };

  return (
    <BrowserRouter>
      <div className="flex h-screen w-full bg-slate-900 text-slate-200 overflow-hidden selection:bg-blue-500/30">
        
        {/* Sidebar is unconditionally rendered in this version */}
        <Sidebar />
        
        <main className="flex-grow flex flex-col overflow-y-auto relative">
          <Routes>
            {/* Hardcoded landing page is Dashboard */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Navigate to="/" replace />} />
            <Route path="/roadmaps" element={<RoadmapsPage enrolledTracks={enrolledTracks} />} />
            <Route path="/roadmaps/:trackId" element={<RoadmapView />} />
            <Route path="/mentors" element={<Mentors onSelect={handleMentorSelect} />} />
            <Route path="/exams" element={<ExamsPage />} />
            <Route path="/projects" element={<ProjectsPage onStartBuilding={handleProjectEnroll} selectedMentor={selectedMentor} />} />
            
            {/* Catch all to Dashboard */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
