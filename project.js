let but = document.getElementById('addtaskbutton');
let tasklist = document.getElementById('tasklist');
but.addEventListener('click', confirm, false)
function confirm(){
    let newtaskitem = document.createElement('li');
    let newtaskinfo = document.createElement('div');

    let important = document.createElement('img');
    important.src = 'images/fire.png';
    important.className = 'fireicon';

    let taskname = document.createElement('p');
    let taskdeadline = document.createElement('p');
    taskname.textContent = "Название: ";
    taskdeadline.textContent = "Сдать до: ";
    newtaskinfo.appendChild(important)
    newtaskinfo.appendChild(taskname)
    newtaskinfo.appendChild(taskdeadline)
    newtaskinfo.className = 'taskitem'
    newtaskitem.appendChild(newtaskinfo);
    tasklist.appendChild(newtaskitem);
}