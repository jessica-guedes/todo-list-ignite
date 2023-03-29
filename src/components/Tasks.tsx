import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import todoLogo from '../assets/todo-logo.svg';
import { Empty } from './Empty';


import styles from './Tasks.module.css';
import { TasksList } from './TasksList';




export function Tasks(){
  const [tasks, setTasks] = useState([
    'Fazer exercício',
  ])
  const [newTaskText, setNewTaskText] = useState('')

  const isNewTaskEmpty = newTaskText.length === 0;

  const [listTasksCount, setListTasksCount] = useState( 0 )

  const [listCompletedTasks, setListCompletedTasks] = useState( 0 )

  function handleCreateNewTasks(event: FormEvent) {
    event?.preventDefault()

    setTasks([...tasks, newTaskText]);
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');

    setNewTaskText(event.target.value);
  }
  function deleteTask(taskToDelete: string){
    const taskWithoutDeleteOne = tasks.filter(task => {
      return task !== taskToDelete
    });

    setTasks(taskWithoutDeleteOne)
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>){
    event?.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleCreateTask(){
    setListTasksCount((state) => {
      return state + 1
    });
  }

  function handleCreateListCompletedTasks(){
    setListCompletedTasks((state) => {
      return state + 1
    })
  }

  return(
    <div>
      <div>
      <header className={styles.header}>
        <img src={todoLogo} alt="" />
      </header>

      <form onSubmit={handleCreateNewTasks} className={styles.form}>
        <input 
          type="text" 
          value={newTaskText} 
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button onClick={handleCreateTask} type='submit' disabled={isNewTaskEmpty}>
          Criar
          <PlusCircle size={20}/>
        </button>
      </form>
      </div>

      <div className={styles.tasks}>
        <main>
          <div className={styles.listTasks}>
            <strong>Tarefas criadas</strong>
            <span>{listTasksCount}</span>
          </div>
      
          <div className={styles.completedTasks}>
            <strong>Concluídas</strong>
            <span>{listCompletedTasks}</span>
          </div>
        </main>
       
        {
          
          tasks.map(task => {
          return (
          <TasksList 
            key={task}
            content={task}
            onDeleteTask={deleteTask}
            />
          )
        })}
      </div>
    </div>
  )
}