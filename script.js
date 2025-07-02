const darkModeToggle = document.getElementById('darkModeToggle');
        const showFullTimetable = document.getElementById('showFullTimetable');
        const body = document.body;
        const fullTimetable = document.getElementById('fullTimetable');
        const todaySchedule = document.getElementById('todaySchedule');

        const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });

        const daySchedules = {
            Monday: [
                { time: '9:00-10:50', subject: 'Life Skills', location: 'CL12', color: 'lavender' },
                { time: '1:00-1:50', subject: 'Mathematics-2', location: 'G5', color: 'blue' },
                { time: '2:00-2:50', subject: 'UHV', location: 'G1', color: 'green' },
                { time: '3:00-3:50', subject: 'Physics-2', location: 'G1', color: 'blue' }
            ],
            Tuesday: [
                { time: '10:00-10:50', subject: 'Mathematics-2', location: 'G2', color: 'blue' },
                { time: '11:00-11:50', subject: 'SDF', location: 'TS8', color: 'red' },
                { time: '1:00-2:50', subject: 'Physics Lab-2', location: 'PL2', color: 'lavender' }
            ],
            Wednesday: [
                { time: '10:00-10:50', subject: 'UHV', location: 'TS12', color: 'red' },
                { time: '11:00-11:50', subject: 'Physics-2', location: 'TS12', color: 'red' },
                { time: '3:00-3:50', subject: 'Mathematics-2', location: 'G3', color: 'blue' },
                { time: '4:00-4:50', subject: 'SDF', location: 'G1', color: 'blue' }
            ],
            Thursday: [
                { time: '11:00-11:50', subject: 'Mathematics-2', location: 'TS10', color: 'red' },
                { time: '2:00-4:50', subject: 'Engineering Drawing and Design', location: 'CAD2', color: 'lavender' }
            ],
            Friday: [
                { time: '9:00-9:50', subject: 'Physics-2', location: 'G3', color: 'blue' },
                { time: '10:00-10:50', subject: 'UHV', location: 'G3', color: 'blue' },
                { time: '3:00-3:50', subject: 'SDF', location: 'G3', color: 'blue' }
            ],
            Saturday: [
                { time: '9:00-9:50', subject: 'SDF', location: 'G3', color: 'blue' },
                { time: '10:00-10:50', subject: 'Physics-2', location: 'G3', color: 'blue' },
                { time: '11:00-12:50', subject: 'SDF Lab', location: 'CL02', color: 'lavender' }
            ]
        };

        if (daySchedules[currentDay]) {
            todaySchedule.innerHTML = daySchedules[currentDay].map(slot => `
                <div class="schedule-card ${slot.color}">
                    <p><strong>${slot.time}</strong></p>
                    <p>${slot.subject}</p>
                    <p>${slot.location}</p>
                </div>
            `).join('');
        } else {
            todaySchedule.innerHTML = `<p>No Classes Today</p>`;
        }

        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
        });

        if (localStorage.getItem('darkMode') === 'true') {
            body.classList.add('dark-mode');
        }

        showFullTimetable.addEventListener('click', () => {
            fullTimetable.classList.toggle('visible');
        });