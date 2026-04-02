import { useStore } from "../../store"
import styles from "./style.module.scss"


function Range() {

  const {len, setLen} = useStore()

  
  return (
    <div className={styles.container}>
        <div className={styles.text}>
            <p className={styles.firestText}>Character Length</p>
            <p className={styles.secondText}>{len}</p>
        </div>
        <input className={styles.range} type="range" min="0" max="20" step="1" value={len} onChange={(e: any)=>setLen(e.target.value)}/> 
        
    </div>
  )
}

export default Range
