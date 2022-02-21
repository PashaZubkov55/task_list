import './styles/style.css'
import { render } from './scripts/render'
import {addTask} from './scripts/methods'
 const input = document.querySelector('.input')
 const  form = document.querySelector('.form')
 let  tasks = []
 
 if (localStorage.getItem('tasks')) {
    render()
 }
 
//localStorage.getItem('tasks')?  render(): console.log('масив пучтой')

form.addEventListener('submit',addTask = (event)=>{
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
        render()
    } else{
        let task = {
            id: 1 ,
            name: input.value
        }
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        render()
    }

    




})