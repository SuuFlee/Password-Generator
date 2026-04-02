import { useStore } from "../../store";
import styles from "./style.module.scss"
import { FaCopy } from "react-icons/fa";

function InputRP(){
    const {result, funcCopy} = useStore()

    return(
    <div className={styles.container}>
        <input placeholder="P4$5W0rD!" value={result} name="password" type="text" className={styles.input} disabled/>
        <div onClick={funcCopy} className={styles.facopy}><FaCopy color="rgb(124, 252, 124)"/></div>
    </div>
    )   
}
export default InputRP