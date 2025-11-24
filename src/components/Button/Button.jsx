import styles from "./Button.module.css"

export default function Button({ children, onClick, type = "button" }) {
  return (
    <button onClick={onClick} type={type} className={styles.btn}>
      {children}
    </button>
  )
}
