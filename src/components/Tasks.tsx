import { ClipboardText } from '@phosphor-icons/react';
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

      <div className={styles.emptyTasks}>
          <ClipboardText size={56}/>
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
      </div>

    </div>
  )
}