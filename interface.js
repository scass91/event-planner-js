'use strict'

window.onload = () => {
  let button = document.getElementById('button')
  let eventList = new EventList()
  let eventsDiv = document.getElementById('events')
  
  const display = () => {
    eventsDiv.innerHTML = ''
    let events = eventList.renderEventList()
    eventsDiv.appendChild(events)
  }

  if (localStorage.getItem("Events")) {
    display()
  } else {
    eventsDiv.innerHTML = "No events listed";
  }

  button.addEventListener('click', () => {
    let content = document.getElementById('textbox')
    let date = document.getElementById('date')
    let time = document.getElementById('time')

    let eventPlan = new EventPlan(content.value, date.value, time.value)
    eventList.add(eventPlan)
    content.value = date.value = time.value = ''
    display()
  })

}
