const taskContainer = document.querySelector('.main__todo-container')
const taskTemplate = document.querySelector('#one').content
const taskForm  = document.forms.taskForm
const taskInput = taskForm.task
const taskAddButton = taskForm.submit


//  Оботчик кнопки add. Клонируем темплэйт, устанавливаем значение из инпута и апендим в контейнер
const handleTaskSubmit = () => {
    const task = taskTemplate.querySelector('.task').cloneNode(true)
    task.querySelector('.task__title').textContent = taskInput.value
    taskContainer.prepend(task)
    disabledButton(taskAddButton)
    taskForm.reset()
}

//  Функция дизэйбла кнопки
const disabledButton = (button) => {
    button.setAttribute('disabled', true)
}

//  Функция включения кнопки
const enabledButton = (button) => {
    button.removeAttribute('disabled', true)
}

//  Оботчик кнопки удаления задачи
const handleTaskDelete = (event) => {
    if(event.target.classList.contains('task__button')) {
        event.target.closest('.task').remove();
    }
}

//  Оботчик состояния сабмита
const handleButtonState = () =>{
    if(taskInput.value.length === 0) {
        disabledButton(taskAddButton)
    } else {
        enabledButton(taskAddButton)
    }
}


taskForm.addEventListener('submit', (event) => {
    event.preventDefault()
    handleTaskSubmit()
})
window.addEventListener('click', (event) => handleTaskDelete(event))
taskForm.addEventListener('input', handleButtonState)
document.addEventListener("DOMContentLoaded", disabledButton(taskAddButton))