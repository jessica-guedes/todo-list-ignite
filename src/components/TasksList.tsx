import { Trash } from "@phosphor-icons/react";
import styles from './TasksList.module.css';
import check from '../assets/check.svg';
import uncheck from '../assets/uncheck.svg';
import { useState, SetStateAction } from "react";


interface TaskProps {
  content: string;
  onDeleteTask: (task: string) => void
  onCompleteTask: () => void;
  isCompleted: React.Dispatch<SetStateAction<boolean>>;
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  onToggleTaskCompletion: () => void;
  
}

export function TasksList({
  content, 
  onDeleteTask, 
  onCompleteTask,
  isCompleted,
  setIsCompleted,
  onToggleTaskCompletion,
}:TaskProps) {

 
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  function handleDeleteTask(){
    onDeleteTask(content)
  }

  function handleToggleTaskCompletion() {
    if (!isCompleted && !completedTasks.includes(content)) {
      setCompletedTasks([...completedTasks, content]);
      onToggleTaskCompletion();
      onCompleteTask();
  }
      setIsCompleted((prev) => !prev);
  }

  return (  
        <div className={styles.tasksList}>
            <div className={styles.tasksListCheck}>
              <button onClick={() => handleToggleTaskCompletion()}>
                {isCompleted ? (
                  <img className={styles.tasksListChecked} src={check}/>
                ) : (
                  <img className={styles.tasksListUnchecked}src={uncheck}/>
                )}
              </button>
            </div>
            <p className={isCompleted ? styles.completedTask : ''}>{content}</p>
            <div className={styles.tasksListButton}>
              <button onClick={handleDeleteTask}>
                <Trash size={20} />
              </button>
            </div>
        </div>
  )
}