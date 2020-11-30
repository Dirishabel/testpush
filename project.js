let opentask = document.getElementById("opentask")
console.log(opentask)
let closetask = document.getElementById("closetask")   
let tasknumber = 0
let closenumber = 0

opentask.textContent = "Открыто задач: " + tasknumber.toString();
closetask.textContent = "Закрыто задач: " + closenumber.toString();

let addtaskbut = document.getElementById('addtaskbutton');
let regwindow = document.getElementById('registration');
addtaskbut.addEventListener('click', openregwindow, false);
function openregwindow(){
    regwindow.style.visibility = 'visible';
    tasknamevalue.value = ""
    taskdatevalue.value = ""

}

jQuery(function($){
    $(document).mouseup(function (e){
         // отслеживаем событие клика по веб-документу
        var block = $("#regwindow");
        //console.log(block.context.hidden) // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (!block.is(e.target) && $("#registration").css('visibility') == 'visible' // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
                regwindow.style.visibility = 'hidden'; // если условия выполняются - скрываем наш элемент
        }
    });
});

let tasknamevalue = document.getElementById('taskname');
let taskdatevalue = document.getElementById('taskdate');

let confirmtaskbut = document.getElementById('confirmadd');
let tasklist = document.getElementById('tasklist');
confirmtaskbut.addEventListener('click', confirm, false)
function confirm(){
    tasknumber += 1
    opentask.textContent = "Открыто задач: " + tasknumber.toString();
    let newtaskitem = document.createElement('li');
    let newtaskinfo = document.createElement('div');

    let important = document.createElement('img');
    important.src = 'images/fire.png';
    important.className = 'fireicon';

    let deltask =  document.createElement('a');
    deltask.className ="btn-floating btn-small waves-effect waves-light red accent-3";
    let icon =  document.createElement('i');
    icon.className ="material-icons";
    icon.innerHTML = "close";
    deltask.appendChild(icon)
    deltask.addEventListener('click', deletetask, false);
    function deletetask(){
        deltask.parentElement.remove()
        tasknumber -=1
        closenumber += 1
        opentask.textContent = "Открыто задач: " + tasknumber.toString();
        closetask.textContent = "Закрыто задач: " + closenumber.toString();
    }

    let taskname = document.createElement('p');
    let taskdeadline = document.createElement('p');
    taskname.textContent = "Название: " + tasknamevalue.value;
    taskdeadline.textContent = "Сдать до: "+taskdatevalue.value;
    newtaskinfo.appendChild(important)
    newtaskinfo.appendChild(deltask)
    newtaskinfo.appendChild(taskname)
    newtaskinfo.appendChild(taskdeadline)
    newtaskinfo.className = 'taskitem'
    newtaskitem.appendChild(newtaskinfo);
    tasklist.appendChild(newtaskitem);

    regwindow.style.visibility = 'hidden';
}