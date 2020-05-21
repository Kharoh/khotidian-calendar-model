const days = []

for (let i = 3; i < 70; i++) {
  days.push(createDayElement(i % 7, Math.floor(i / 7)))
}

days.forEach(element => document.getElementsByClassName('calendar')[0].appendChild(element))

/**
 * Create a new day div ready to append to the calendar
 * @param {number} index - The index of the day in the week i.e. sunday is 0 and saturday is 6
 * @param {number} week - The week number, relatively to the current week, i.e. the current week is 0, the last week is 1
 */
function createDayElement(index, week) {
  /* Crate the element */
  const element = document.createElement('div')
  element.classList.add('day')

  /* Set the element position in the grid */
  element.style.gridColumn = index + 1
  element.style.gridRow = week + 2

  /* Sometimes, set the completed attribute */
  if (Math.random() < 0.8) element.classList.add('habit-completed')

  return element
}
