export function calculateStreak(submissionDates) {
  if (!submissionDates || submissionDates.length === 0) return 0;

  // Normalize to unique local dates (YYYY-MM-DD)
  const uniqueDates = [...new Set(submissionDates.map(dateStr => {
    const d = new Date(dateStr);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }))].sort((a, b) => new Date(b) - new Date(a)); // Sort descending (newest first)

  if (uniqueDates.length === 0) return 0;

  const todayStr = new Date().toLocaleDateString('en-CA'); // YYYY-MM-DD
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toLocaleDateString('en-CA');

  const mostRecent = uniqueDates[0];

  // If most recent is not today or yesterday, streak is broken
  if (mostRecent !== todayStr && mostRecent !== yesterdayStr) {
    return 0;
  }

  let streak = 1; // Count the most recent day
  let expectedDate = new Date(mostRecent);
  
  for (let i = 1; i < uniqueDates.length; i++) {
    expectedDate.setDate(expectedDate.getDate() - 1);
    const expectedStr = expectedDate.toLocaleDateString('en-CA');
    
    if (uniqueDates[i] === expectedStr) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}
