//HEADER
const header = document.getElementById('header-container');
header.style.backgroundColor="#00B069";

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const emergencyTasksH3 = document.querySelectorAll('.emergency-tasks h3');
emergencyTasksH3[0].style.backgroundColor='#A500F3';
emergencyTasksH3[1].style.backgroundColor='#A500F3';


const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = '#F9DB5E';

const noEmergencyTasksH3 = document.querySelectorAll('.no-emergency-tasks h3');
noEmergencyTasksH3[0].style.backgroundColor='black';
noEmergencyTasksH3[1].style.backgroundColor='black';

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(0, 53, 51)';
