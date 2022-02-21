// элемент где будыт распологатся задачи 
const taskLis = document.querySelector('.task-list__items')
// метод вставки html в DOM
export const render = ()=>{
    if (!localStorage.getItem('tasks')){
        var html = `
        <div class="task-list__message">Задач пока нет ! </div>
        `   
        taskLis.innerHTML = html  
    } else{
        let str =   localStorage.getItem('tasks')
        let tasks = JSON.parse(str)
      let  html =  tasks.map(task=>{
          return  `<div class="task-list__item">
                <div class="task-list__text">${task.name}</div>
                <div class="task-list__btn">
                <button class="task-btn task-btn_del"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path></svg></button>
                </div>
            </div>
            
            `
        })
        taskLis.innerHTML = html  
    }
      
}

   




