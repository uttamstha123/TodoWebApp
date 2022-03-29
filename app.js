// search animation 
const search = document.querySelector('.search-items label');
search.addEventListener('mouseover', () => {
    const searchInput = document.querySelector('#search');
    searchInput.style.cssText = 'display: block; opacity: 1';
})

// *********************************

// Todo's App
// Variables
const addTodo = document.querySelector('.form-group');
const todos = document.querySelector('.todo-container')
// Delete Items
const todoContainer = document.querySelector('.todo-container');

// Checked
const check = document.querySelector('.checked');

// searchInput
const searchItems = document.querySelector('.search-items');

// *********************************

// <Functions>
const generateTodo = todo => {
    let html =
        `<div class="todos">
        <div class="todo">
            <li class='todo-lists'>${todo}</li>
        </div>
        <div class="action-btn">
            <button class='check'>+</button>
            <button class='delete'>x</button>
        </div>
    </div>`
    todos.innerHTML += html;

}
const generateNewList = searchedItems => {
    console.log(searchedItems)
    // Get a list of items from a lists
    let lists = document.querySelector('.todo-container');
    Array.from(lists.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(searchedItems.toLowerCase()))
        .forEach(todo => {
            if (todo.classList.contains('todos'))
                todo.classList.add('filter')
        })
    Array.from(lists.children)
        .filter(todo => todo.textContent.toLowerCase().includes(searchedItems.toLowerCase()))
        .forEach(todo => {
            if (todo.classList.contains('todos'))
                todo.classList.remove('filter')
        })
}

function emptyMsg() {
    todos.innerHTML = `<p id='empty-msg'>Nothing to show 😕</p>`;
}
// </Functions>

// *********************************

// <EventListeners>
addTodo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = document.querySelector('.list-items').value.trim();
    // console.log(todo);
    if (todo.length)
        generateTodo(todo);
    addTodo.reset();
});

todoContainer.addEventListener('click', e => {
    if (e.target.classList[0] === 'delete')
        e.target.parentElement.parentElement.remove();
    if (e.target.classList[0] === 'check')
        e.target.parentElement.parentElement.classList.toggle('checked');
    if (!todos.children.length)
        emptyMsg();

});

searchItems.addEventListener('keyup', () => {
    const searchValue = document.querySelector('#search');
    let value = searchValue.value.trim();
    generateNewList(value);
})
// </EventListeners>