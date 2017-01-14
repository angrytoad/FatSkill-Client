import moment from 'moment';

export const emailFilter = (candidates) => {
  candidates.sort(function(a, b) {
    let textA = a.email.toUpperCase();
    let textB = b.email.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  return candidates;
};

export const nameFilter = (candidates) => {
  candidates.sort((a, b) => {
    let textA = a.name.toUpperCase();
    let textB = b.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  return candidates;
};

export const addedFilter = (candidates) => {
  candidates.sort((a, b) => {
    let dateA = moment(a.added.date);
    let dateB = moment(b.added.date);
    return (dateA.diff(dateB,'second') > 0) ? -1 : (dateA.diff(dateB,'second') < 0) ? 1 : 0;
  });
  return candidates;
};

export const completedFilter = (candidates) => {
  candidates.sort((a, b) => {
    let completedA = a.completed;
    let completedB = b.completed;
    return (completedA < completedB) ? -1 : (completedA > completedB) ? 1 : 0;
  });
  return candidates;
};

export const scoreFilter = (candidates) => {
  candidates.sort((a, b) => {
    let scoreA = a.score;
    let scoreB = b.score;
    return (scoreA < scoreB) ? -1 : (scoreA > scoreB) ? 1 : 0;
  });
  return candidates;
};