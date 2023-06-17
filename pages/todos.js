
import React from 'react'
import { useEffect, useState } from 'react';
import styles1 from '../pages/styles1.module.css';
import styles2 from '../pages/styles2.module.css';

const todos = () => {
  // const todos = [{ "title": "1", "desc": "1" }, { "title": "1qwqe", "desc": "21" }, { "title": "", "desc": "" }, { "title": "pp", "desc": "jkk" }, { "title": "ikrgn", "desc": "ejorgn" }, { "title": "gym", "desc": "im going to the gym" }, { "title": "speak to chicks", "desc": "hi" }, { "title": "farman", "desc": "gun man" }, { "title": "100", "desc": "123" }];
  const [todos, setTodos] = useState([])
  useEffect(() => {
    let todos = localStorage.getItem("todos")
    setTodos(JSON.parse(todos))
  }, [])
  const deleteTodo = (title) => {
    let newTodos = todos.filter(item => { return item.title != title })
    localStorage.setItem("todos", JSON.stringify(newTodos))
    setTodos(newTodos)
  } 
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
        <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">Your Todos</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Your Todos will show up here</p>
        </div>
        
        <div class={`${styles2.column}`}  >
          {todos.map(item => {
            return<div className={`${styles2.column}`}> < div className={`${styles2.column} ${styles1.bordered}`} >
              <div className={`${styles2.row}`} class=" sm:items-center sm:justify-start justify-center text-center sm:text-left" >
                <div className={`${styles2.column}`}>
                {/* <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={'https://source.unsplash.com/featured/300x202'} /> */}
                </div>
                <br></br>
                <div className={`${styles2.column}`} >
                  <h2 class="title-font font-medium text-lg text-gray-900"><b>Title:</b> {item.title}</h2>
                  <h3 class="text-gray-900 mb-3"></h3>
                  <p class="text-gray-90 font-medium  mb-3"><b>Description: </b> {item.desc}</p>
                  <span class="inline-flex">
                    <div className={`${styles2.column}`}>
                      <a class="text-gray-500 cursor pointer" onClick={() => { deleteTodo(item.title) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 21.627 8.373 27 15 27 C 21.627 27 27 21.627 27 15 C 27 12.820623 26.409997 10.783138 25.394531 9.0214844 L 14.146484 20.267578 C 13.959484 20.454578 13.705453 20.560547 13.439453 20.560547 C 13.174453 20.560547 12.919422 20.455578 12.732422 20.267578 L 8.2792969 15.814453 C 7.8882969 15.423453 7.8882969 14.791391 8.2792969 14.400391 C 8.6702969 14.009391 9.3023594 14.009391 9.6933594 14.400391 L 13.439453 18.146484 L 24.240234 7.3457031 C 22.039234 4.6907031 18.718 3 15 3 z M 24.240234 7.3457031 C 24.671884 7.8662808 25.053743 8.4300516 25.394531 9.0195312 L 27.707031 6.7070312 C 28.098031 6.3150312 28.098031 5.6839688 27.707031 5.2929688 C 27.316031 4.9019687 26.683969 4.9019688 26.292969 5.2929688 L 24.240234 7.3457031 z" /></svg>                    </a>
                    </div>
                     <br></br>
                    <div className={`${styles2.column}`}>
                      <a class="text-grey-500 cursor pointer" href={`/edit/${item.title}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="24px" height="24px">    <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z" /></svg>
                      </a>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default todos