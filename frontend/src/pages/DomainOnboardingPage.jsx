import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Laptop, PenTool, Briefcase } from 'lucide-react';

const domains = [
  {
    id: 'tech',
    title: 'Tech (CS/IT)',
    description: 'Software Engineering, Data Science, Cyber Security, etc.',
    icon: Laptop,
    color: 'blue'
  },
  {
    id: 'core',
    title: 'Core Engineering',
    description: 'Mechanical, Civil, Electrical, Aerospace, etc.',
    icon: PenTool,
    color: 'orange'
  },
  {
    id: 'non-tech',
    title: 'Non-Tech',
    description: 'Product Management, Marketing, Design, Sales, etc.',
    icon: Briefcase,
    color: 'purple'
  }
];

export function DomainOnboardingPage() {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const navigate = useNavigate();

  const handleSaveProfile = () => {
    if (!selectedDomain) return;
    
    // Completely synchronous, no async/await or timeouts
    navigate('/dashboard');
  };

  return (
    <div className="w-full flex-grow flex items-center justify-center p-4 bg-slate-50 min-h-full">
      <div className="max-w-2xl w-full space-y-8 animate-in fade-in zoom-in-95 duration-500">
        
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Choose Your Domain</h1>
          <p className="text-slate-500 text-lg">
            Tell us what you're interested in so we can tailor your experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon;
            const isSelected = selectedDomain === domain.id;
            
            return (
              <button
                key={domain.id}
                onClick={() => setSelectedDomain(domain.id)}
                className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-300 text-left w-full h-full ${
                  isSelected 
                    ? `bg-${domain.color}-50 border-${domain.color}-500 transform scale-105 shadow-md shadow-${domain.color}-500/20` 
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-sm'
                }`}
              >
                <div className={`p-4 rounded-full mb-4 ${
                  isSelected ? `bg-${domain.color}-500 text-white` : 'bg-slate-100 text-slate-500'
                }`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">{domain.title}</h3>
                <p className="text-slate-500 text-sm text-center flex-grow">
                  {domain.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="flex justify-center pt-8">
          <button
            onClick={handleSaveProfile}
            disabled={!selectedDomain}
            className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center min-w-[200px] ${
              !selectedDomain
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25'
            }`}
          >
            Complete Setup
          </button>
        </div>

      </div>
    </div>
  );
}
