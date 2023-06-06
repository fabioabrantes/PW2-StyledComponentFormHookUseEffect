import styles from './Button.module.css';

interface IProps{
  color?:'primary'|'secondary'|'danger'|'success';
}

export function Button({color='primary'}:IProps){
  return <button className={`${styles.button} ${styles[color]}` }>Enviar</button>
}