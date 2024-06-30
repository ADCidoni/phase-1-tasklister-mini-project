document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      const new_todo = document.getElementById("new-task-description").value
      console.log(document.getElementById("new-task-description").value)
      buildToDo(new_todo)
      form.reset()
    }) 
})

function buildToDo(todo) {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    li.textContent = `${todo}`
    li.appendChild(btn)
    console.log(li)
    document.getElementById('tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
