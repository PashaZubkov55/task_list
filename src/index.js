import './styles/style.css'
import { render } from './scripts/render'
 const input = document.querySelector('.input')
 const  form = document.querySelector('.form')
 let button = document.querySelector('.button')
 let  tasks = []
 //  при загрузки страницы 
 document.addEventListener('DOMContentLoaded',()=>{
    button.disabled = true 
    render()

 })
 // работа с input на заполнение 
 input.addEventListener('input',()=>{
     if (input.value) {
         button.disabled = false
         console.log('false')
     } else{
        button.disabled = true
        console.log('true')
     } 
    })
    //добавление задачи 
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    if (localStorage.getItem('tasks')) {
        let str = localStorage.getItem('tasks')
        let array = JSON.parse(str)
       
        let task = {
            id : array.length+1,
            name: input.value
        }
        array.push(task)
        localStorage.setItem('tasks', JSON.stringify(array))
        input.value = ''
        render()
    } else{
        let task = {
            id: 1 ,
            name: input.value
        }
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        input.value = ''
        render()
    }

    




})