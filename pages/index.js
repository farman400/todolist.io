import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [todo,setTodo] = useState({title: "",desc: ""})

  const addTodo =() =>{
    let todos = localStorage.getItem("todos")
    if(todos){
      let todosJson=JSON.parse(todos)
      if (todosJson.filter(value=>{return value.title==todo.title}).length>0){
          alert('Todo already exists')
      }
      else
      {
        todosJson.push(todo)
        localStorage.setItem("todos",JSON.stringify(todosJson))
        alert("Todo has been added")
        setTodo({title: "",desc: ""})
      }
      
    }
    else
    {
      localStorage.setItem("todos",JSON.stringify([todo]))
    }
  }
  const onChange =(e)=>{
      setTodo({...todo,[e.target.name]: e.target.value})
      console.log(todo)
  }
  return (
    <div className="my-2 font-semibold text-3xl"> 
        <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add a Task</h1>
    </div>
    <div class="lg mx-auto">
        <div class="p-f w-f">
          <div class="relative">
            <label for="title" class="leading-7 text-sm text-gray-600">Todo Title</label>
            <input onChange={onChange} value={todo.title}type="desc" id="title" name="title" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-f w-f">
          <div class="relative">
            <label for="desc" class="leading-7 text-sm text-gray-600">Todo Text</label>
            <input onChange={onChange} value={todo.desc} type="text" id="desc" name="desc" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full"> 
        </div>
        <div class="p-2 w-full">
          <button onClick={addTodo}class="flex mx-auto text-white w-1/8 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Todo</button>
        </div>
        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        </div>
    </div>
  </div>
</section>
    </div>
  )
}



