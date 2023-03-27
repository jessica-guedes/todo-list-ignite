import styles from './Header.module.css';
import todoLogo from '../assets/todo-logo.svg';
import { PlusCircle } from '@phosphor-icons/react';

export function Header(){
  return(
    <div>
      <header className={styles.header}>
        <img src={todoLogo} alt="" />
      </header>

      <form className={styles.form}>
        <input type="text" />
        <button>
          Criar
          <PlusCircle size={20}/>
        </button>
      </form>
    </div>
  );
}