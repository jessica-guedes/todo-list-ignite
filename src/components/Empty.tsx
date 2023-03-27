import { ClipboardText } from "@phosphor-icons/react";
import styles from './Empty.module.css'


export function Empty(){
  return (
  <div className={styles.emptyTasks}>
        <ClipboardText size={56}/>
        <div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
  </div>
  )
}