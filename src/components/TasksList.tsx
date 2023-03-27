import { CheckCircle, Trash } from "@phosphor-icons/react";
import styles from './TasksList.module.css';
export function TasksList() {
  return (
    <div className={styles.tasksList}>
      <div className={styles.tasksListCheck}>
        <CheckCircle size={28}/>
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas temporibus dicta voluptates dolores voluptatem fugiat autem. Inventore earum labore provident, animi amet maiores ullam esse, quo beatae eos dolorem distinctio!</p>

      <div className={styles.tasksListButton}>
        <button>
          <Trash size={22} />
        </button>
      </div>
    </div>
  )
}