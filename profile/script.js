document.addEventListener('DOMContentLoaded', () => {
  const maxItems = 4;
  const todoList = document.getElementById('todo-list');
  const newTodoInput = document.getElementById('new-todo');
  const addTodoButton = document.getElementById('add-todo');
  
  // Load to-do items from local storage
  function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
      addTodoToList(todo.text, todo.done);
    });
  }
  
  // Save to-do items to local storage
  function saveTodos() {
    const todos = [];
    document.querySelectorAll('#todo-list li').forEach(li => {
      todos.push({
        text: li.querySelector('.todo-text').textContent,
        done: li.querySelector('.todo-checkbox').checked
      });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  // Add a to-do item to the list
  function addTodoToList(text, done = false) {
    if (todoList.children.length >= maxItems) return;
    
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" class="todo-checkbox" ${done ? 'checked' : ''}>
      <span class="todo-text" style="color:#1e3557;">${text}</span>
      <button class="delete-todo">Delete</button>
    `;
    
    li.querySelector('.todo-checkbox').addEventListener('change', function() {
      if (this.checked) {
        li.classList.add('done');
        saveTodos();
      } else {
        li.classList.remove('done');
        saveTodos();
      }
    });
    
    li.querySelector('.delete-todo').addEventListener('click', function() {
      li.remove();
      saveTodos();
    });
    
    todoList.appendChild(li);
    saveTodos();
  }
  
  // Handle adding a new to-do item
  addTodoButton.addEventListener('click', () => {
    const text = newTodoInput.value.trim();
    if (text && todoList.children.length < maxItems) {
      addTodoToList(text);
      newTodoInput.value = '';
    }
  });
  
  // Load existing todos on page load
  loadTodos();
});
