'use strict';

class DatePicker {
    constructor(id, callback) {
        this.id = id;
        this.callback = callback;
        this.element = document.getElementById(id);
    }

    render(date) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const month = date.getMonth();
        const year = date.getFullYear();
        // Gets previous month & year
        const prevMonth = month === 0 ? 11 : month - 1;
        const prevYear = prevMonth === 11 ? year - 1 : year;
        // Get number of days in prev month
        const prevDaysInMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        let html = `<table><caption>${monthNames[month]} ${year}</caption><tr>`;
        for (let i = 0; i < 7; i++) {
            html += `<th>${["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][i]}</th>`;
        }
        html += `</tr><tr>`;

        let day = 1;
        let next_day = 1;
        let prev_day = prevDaysInMonth - firstDayOfMonth + 1;

        for (let i = 0; i < 42; i++) {
            if (i > daysInMonth + firstDayOfMonth - 1) {
                html += `<td class='test'>${next_day}</td>`;
                next_day++;
            }
            else if (i < firstDayOfMonth) {
                html += `<td class='test'>${prev_day}</td>`;
                prev_day++;
            }
            else if (i >= firstDayOfMonth && day <= daysInMonth) {
                html += `<td>${day}</td>`;
                day++;
            }
            if ((i + 1) % 7 === 0 && i < 41) { //adding new line?
                html += `</tr><tr>`;
            }
        }

        html += `</tr></table>`;
        html += `<button class="prev-button">&lt;</button>`;
        html += `<button class="next-button">&gt;</button>`;
        this.element.innerHTML = html;

        // Upon clicking on the date, calls callback function for appropriate cells
        const table = this.element.querySelector('table');
        table.addEventListener('click', event => {
            if (event.target.className !== 'test') {
                const dateObj = { month: month + 1, day: event.target.innerText, year };
                this.callback(this.id, dateObj);
            }
        });

        // Creates Previous Button event listener
        const prevButton = this.element.querySelector('.prev-button');
        prevButton.addEventListener('click', ()  => {
            const prev = new Date(year, month - 1, 1);
            this.render(prev);
        });

        // Add event listener for next button
        const nextButton = this.element.querySelector('.next-button');
        nextButton.addEventListener('click', () => {
            const next = new Date(year, month + 1, 1);
            this.render(next);
        });
    }
}