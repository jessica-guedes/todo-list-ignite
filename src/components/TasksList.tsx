import { Trash } from "@phosphor-icons/react";
import styles from './TasksList.module.css';
import check from '../assets/check.svg';
import { Empty } from "./Empty";
import { useState } from "react";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void
}

export function TasksList({content, onDeleteTask}: TaskProps) {
  const [tasksList, setTasksList] = useState([])

  function handleDeleteTask(){
    onDeleteTask(content)
  }

  
  return (  
        <div className={styles.tasksList}>
            <div className={styles.tasksListCheck}>
              <button>
                <img src={check}/>
              </button>
            </div>
            <p>{content}</p>
            <div className={styles.tasksListButton}>
              <button onClick={handleDeleteTask}>
                <Trash size={20} />
              </button>
            </div>
        </div>
  )
}