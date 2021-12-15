const taskContainer = document.querySelector('.main__todo-container')
const taskTemplate = document.querySelector('#one').content
const taskForm = document.querySelector('.main__form')
const taskInput = document.querySelector('.main__form-input')
const taskAddButton = document.querySelector('.main__form-button')


//  Оботчик кнопки add. Клонируем темплэйт, устанавливаем значение из инпута и апендим в контейнер
const handleTaskSubmit = () => {
    const task = taskTemplate.querySelector('.task').cloneNode(true)
    task.querySelector('.task__title').textContent = taskInput.value
    taskContainer.append(task)
    disabledSubmit(taskAddButton)
}

//  Функция дизэйбла любой кнопки
const disabledSubmit = (button) => {
    button.setAttribute('disabled', true)
}

//  Слушатель на кнопку удаления
window.addEventListener('click', (event) => {
    if(event.target.classList.contains('task__button')) {
        event.target.closest('.task').remove();
    }
})

//  Слушатель на сабмит формы
taskForm.addEventListener('submit', (event) => {
    event.preventDefault()
    handleTaskSubmit()
    taskForm.reset()
})

//  Слушатель на инпут для дизэйбла сабмита
window.addEventListener('keyup', (event) => {
    if(event.target.classList.contains('main__form-input')) {
        if(event.target.value.length <= 0) {
            const submit = event.target.closest('.main__form').querySelector('.main__form-button')
            submit.setAttribute('disabled', true)
        }   else {
            const submit = event.target.closest('.main__form').querySelector('.main__form-button')
            submit.removeAttribute('disabled', true)
        }
    }
})

//  Слушатель на документ. При загрузке контента отключаем кнопку
document.addEventListener("DOMContentLoaded", disabledSubmit(taskAddButton))