var historyItems = [
  {
    id: 'pulsemedica',
    company: 'PulseMedica Corp.',
    position: 'Software Developer',
    department: '',
    startDate: 'December, 2020',
    endDate: 'Current',
    description:
        'Developed algorithms for a medical device. An advanced retina tracking algorithm, linear and non-linear registration algorithm between different modality of imaging systems are developed. Joining at the early stage of the company, my role have included developing the software architecture, implementing the algorithms, integrating machine learning models into the core software, creating (graphical) user interfaces, testing the system, and varieties of troubleshooting.'
  },
  {
    id: 'nissan',
    company: 'Nissan Motor Co., Ltd.',
    position: 'Research Engineer',
    department: 'Research and Development',
    startDate: 'April, 2013',
    endDate: 'September, 2019',
    description:
        'Developed a perception algorithms for autonomous driving system at a research and development department. Applied point cloud processing and sensor fusion techniques to detect and track objects around the vehicle. Developed a dynamic trajectory planning algorithm for intersection crossing. Implemented a microservice status monitoring system to notify developers of system status.'
  },
  {
    id: 'utokyo-master',
    company: 'The university of Tokyo',
    position: 'Master Student',
    department: 'Graduate School of Information Science and Technology',
    startDate: 'April, 2011',
    endDate: 'March, 2013',
    description: 'Studied robotics, computer vision, and control systems.'
  },
  {
    id: 'utokyo-bachelor',
    company: 'The university of Tokyo',
    position: 'Undergraduate Student',
    department: 'Faculty of Engineering',
    startDate: 'April, 2007',
    endDate: 'March, 2011',
    description: 'Studied mechanical engineering and robotics.'
  }
];

function createHistoryItem(
    id, company, position, department, startDate, endDate, description) {
  let historyItem = document.createElement('div');
  historyItem.className = 'row history-item wow fadeInUp';
  historyItem.id = id;

  let trail = document.createElement('div');
  trail.className = 'col-2 trail';
  trail.id = 'trail';
  historyItem.appendChild(trail);

  let contents = document.createElement('div');
  contents.className = 'col-10';
  contents.style.padding = '3em 0';

  let companyElement = document.createElement('h3');
  companyElement.className = 'company';
  companyElement.innerHTML = company;

  let positionElement = document.createElement('h4');
  positionElement.className = 'position';
  positionElement.innerHTML = position;

  let departmentElement = document.createElement('h4');
  departmentElement.className = 'department';
  departmentElement.innerHTML = department;

  let dateElement = document.createElement('h4');
  dateElement.className = 'date';
  dateElement.innerHTML = startDate + ' - ' + endDate;

  let hr = document.createElement('hr');

  let descriptionElement = document.createElement('p');
  descriptionElement.className = 'description';
  descriptionElement.innerHTML = description;

  contents.appendChild(companyElement);
  contents.appendChild(positionElement);
  contents.appendChild(departmentElement);
  contents.appendChild(dateElement);
  contents.appendChild(hr);
  contents.appendChild(descriptionElement);

  historyItem.appendChild(contents);

  return historyItem;
}

function updateTrail() {
  for (let i = 0; i < historyItems.length; i++) {
    let historyItem = document.getElementById(historyItems[i].id);
    let trail = historyItem.querySelector('#trail');
    trail.innerHTML = '';

    const historyItemHeight = historyItem.getBoundingClientRect().height;
    const circleCount = Math.floor(historyItemHeight / 30);

    for (let i = 0; i < circleCount; i++) {
      let circle = document.createElement('i');
      if (i == Math.floor(circleCount / 4)) {
        circle.className = 'fa-solid fa-circle dot'
      } else {
        circle.className = 'line'
      }
      trail.appendChild(circle);
    }
  }
}

function createHistoryDiagram(attachTo) {
  let history = document.getElementById(attachTo);
  for (let i = 0; i < historyItems.length; i++) {
    let item = historyItems[i];
    let historyItem = createHistoryItem(
        item.id, item.company, item.position, item.department, item.startDate,
        item.endDate, item.description);
    history.appendChild(historyItem);
  }
}

createHistoryDiagram('history-diagram');
updateTrail();
$(document).ready(function() {
  $(window).resize(function() {
    updateTrail();
  });
});
