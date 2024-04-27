var historyItems = [
  {
    company: 'PulseMedica Corporation',
    position: 'Software Developer',
    department: '',
    startDate: 'December, 2020',
    endDate: 'Current',
    description: 'Developed an advanced retina tracking for a medical device.'
  },
  {
    company: 'Nissan Motor co., Ltd.',
    position: 'Research Engineer',
    department: 'Research and Development',
    startDate: 'April, 2013',
    endDate: 'September, 2019',
    description:
        'Developed a perception algorithms for autonomous driving system at a research and development department.'
  },
  {
    company: 'The university of Tokyo',
    position: 'Master Student',
    department: 'Graduate School of Information Science and Technology',
    startDate: 'April, 2011',
    endDate: 'March, 2013',
    description: 'Studied robotics'
  },
  {
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
  historyItem.className = 'history-item';
  historyItem.id = id;
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
  let descriptionElement = document.createElement('p');
  descriptionElement.className = 'description';
  descriptionElement.innerHTML = description;

  historyItem.appendChild(companyElement);
  historyItem.appendChild(positionElement);
  historyItem.appendChild(departmentElement);
  historyItem.appendChild(dateElement);
  historyItem.appendChild(descriptionElement);

  return historyItem;
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
$(document).ready(function() {});
