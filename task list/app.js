const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput=document.querySelector('#task');


loadEventListeners();

function loadEventListeners(){
  form.addEventListener('submit',addTask);
  //remove tasks
  taskList.addEventListener('click',removeChild);
  //clear tasks
  clearBtn.addEventListener('click',clearTasks);
}
function addTask(e){
  if(taskInput.value==='')      
  alert('add a task');
//creating li elements
const li=document.createElement('li');
li.className='collection-item';
li.appendChild(document.createTextNode(taskInput.value));
//create link
const link=document.createElement('a');
link.className='delete-item secondary-content';
link.innerHTML='<i class="fa fa-remove"></i>';
li.appendChild(link);

taskList.appendChild(li); 
//storeTaskInLocalStorage(taskInput.value);

taskInput.value='';

e.preventDefault();

}

function removeChild(e){
  if(e.target.parentElement.classList.contains('delete-item'))
 {if(confirm('are you sure?')){
    e.target.parentElement.parentElement.remove();
  }
}

}
function clearTasks(){
  // taskList.innerHTML='';
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}
/*
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks')===null)
  {
    tasks=[];
  }else{
    tasks=JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify('tasks'));
}*/