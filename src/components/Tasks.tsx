import { Empty } from './Empty';
import styles from './Tasks.module.css';

export function Tasks(){
  return(
    <div className={styles.tasks}>
      <header>
        <div className={styles.listTasks}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>
        
        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>

      <Empty />

    </div>
  )
}