import { useStore } from '../../store'
import styles from './style.module.scss'


function LevelStrength(){
    
    const {bars} = useStore()
    
    return(
        <div className={styles.conteiner}>
            <input type="text" placeholder="STRENGTH" className={styles.strenghtInput} disabled/>
            <div className={styles.forFlex}>
                {bars.map((e)=>(
                <div key={e.number} className={e.led == "off" ? styles.off : styles.on} >
                </div>
            ))}
            </div>
        </div>  
    )
}
export default LevelStrength