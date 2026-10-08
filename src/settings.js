const saved = localStorage.getItem('calendarflow-week-start') || '1';
document.querySelector(`#week-start option[value="${saved}"]`).selected = true;
document.querySelector('#week-start').addEventListener('change', (e) => localStorage.setItem('calendarflow-week-start', e.target.value));
