const storageKey='anything';
const converStringToObj=(str)=> { console.log( JSON.parse(str)||[]);return JSON.parse(str)||[];}
const converObjToString=(obj)=>JSON.stringify(obj)||"";
const getTodos=()=>converStringToObj(localStorage.getItem(storageKey));
const addTodo=(todo)=> localStorage.setItem(storageKey ,converObjToString([...getTodos(),todo]));
const deleteTodo =(todo)=>localStorage.setItem(storageKey ,converObjToString(getTodos().filter(_todo =>_todo !== todo)));
const bulidTodoEl=(todo) =>
{
  const el=document.createElement('li');
  el.classList.add('list-group-item');
  el.innerText=todo;
  return el;
}
const appendliToDom =(el)=>document.getElementById('todo-list-container').appendChild(el);
const clearTodoListDisplay =()=> document.getElementById('todo-list-container').innerHTML='';
const clearInput =() =>document.getElementById('new-todo-input').value='';
const displayTodos =()=>
{
  clearInput();
 clearTodoListDisplay();
    getTodos().forEach(_todo => appendliToDom(bulidTodoEl(_todo)));
    initClickListeners();
}
const initClickListeners =()=>
{
  Array.from(document.getElementsByClassName('list-group-item')).forEach(_item =>
    {
      _item.addEventListener('click',($event)=>
      {
        const todo =$event.target.innerText;
        if(window.confirm("Have you completed this task :" + todo))
        {
          deleteTodo(todo);
          displayTodos();
        }
      });
    });
}
//document.addEventListener("DOMcontentLoaded",()=>displayTodos());
document.getElementById('submit-new-todo-btn').addEventListener('click',($event)=>
{
 const newTodoInput=document.getElementById('new-todo-input');
 if(newTodoInput.value)
 {
   addTodo(newTodoInput.value.trim());
   displayTodos();
 }
});
/*document.getElementById('reset-storage-btn').addEventListener('click',(event)=>
{
  localStorage.removeItem(storageKey);
  displayTodos();
})
*/
