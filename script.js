const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let itemCount = 0
let checkedCount = 0
function myFunction(){
    var inputText = document.getElementById("myText").value;
    document.getElementById.innerHTML = inputText;
  if ( inputText !== null && inputText.length > 0 )
  {
    addTodo(inputText)
  }
function newStatus(){
 const checkId = this.id.replace("text"," ")
  if (this.checked)
  {
    checkedCount++
    itemCountSpan.innerHTML = itemCount
    unCounted = itemCount - checkedCount
  uncheckedCountSpan.innerHTML = unCounted
 }
 else{
    checkedCount -- 
     }
    }
function addTodo(itemText){
  itemCount ++ ;
  var newItem = document.createElement('li')
  newItem.className = classNames.TODO_ITEM
  checkBox = document.createElement('input')
  checkBox.type = 'checkbox';
  itemCountSpan.innerHTML = itemCount;
  checkBox.onclick = newStatus
  unCounted = itemCount - checkedCount
  span = document.createElement('span')
  span.innerHTML = itemText;
  uncheckedCountSpan.innerHTML = unCounted;
  newItem.appendChild(checkBox)
  newItem.appendChild(span)
  list.appendChild(newItem)
  }
}