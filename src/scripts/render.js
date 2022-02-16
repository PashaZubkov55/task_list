// элемент где будыт распологатся задачи 
const taskLis = document.querySelector('.task-list__items')
// метод вставки html в DOM
export const render = (html)=>{
    taskLis.innerHTML = html
}

