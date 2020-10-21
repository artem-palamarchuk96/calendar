const currentDate = new Date();

let year = currentDate.getFullYear();
let month = currentDate.getMonth();

const left = document.querySelector('#left');
const right = document.querySelector('#right');
const title = document.querySelector('#month');

left.addEventListener('click', () => {
  month = month - 1;
  if (month < 0) {
    month = 11;
    year = year - 1;
  }
  fillCalendar(year, month);
});

right.addEventListener('click', () => {
  month = month + 1;
  if (month > 11) {
    month = 0;
    year = year + 1;
  }
  fillCalendar(year, month);
});

document.addEventListener('DOMContentLoaded', () => {
  fillCalendar(year, month);
});

function fillCalendar(year, month) {
  title.textContent = new Date(year, month).toLocaleString('default', {
    month: 'long',
  });
  const daysInWeek = 7;

  const prevDaysInMonth = new Date(year, month, 0).getDate(); // 30
  const currentDaysInMonth = new Date(year, month + 1, 0).getDate(); // 31
  const nextDaysInMonth = new Date(year, month + 1 + 1, 0).getDate(); // 30

  // 4 - четверг
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // 6 - суббота
  const lastDayOfMonth = new Date(year, month, currentDaysInMonth).getDay();

  const wrap = document.querySelector('#calendar');
  wrap.innerHTML = '';

  //   const columns = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  //   const rows = [{ Пн: 4 }];

  // prev month days
  for (let i = daysInWeek - (daysInWeek - firstDayOfMonth + 1); i > 0; i--) {
    const elem = createCell(prevDaysInMonth - i);
    elem.style.backgroundColor = 'lightgrey';
    wrap.appendChild(elem);
  }

  for (let i = 1; i <= currentDaysInMonth; i++) {
    wrap.appendChild(createCell(i));
  }

  for (let i = 0; i < daysInWeek - lastDayOfMonth; i++) {
    const elem = createCell(i + 1);
    elem.style.backgroundColor = 'yellow';
    wrap.appendChild(elem);
  }
}

function createCell(textContent) {
  const elem = document.createElement('div');
  elem.textContent = textContent;
  elem.style.width = '48px';
  elem.style.height = '48px';
  elem.style.border = '1px solid black';
  elem.addEventListener('click', () => {
    alert(new Date(year, month, textContent));
  });
  return elem;
}


// { tue: 1, fri: 2, sat: 3 }

for (let i = 1; i <= 31; i++) {
    const dayInWeek = new Date(2020, 9, i).getDay();
    
}


function lol(year, month) {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const startOfDayInWeek = 7 - firstDayOfMonth + 1;

    columns = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    startOfDayInWeek
    

}