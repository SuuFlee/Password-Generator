import { useStore } from "../../store";
import styles from "./style.module.scss";


function Input() {
  
  const {setIsNum, setIsSumb, setIsUpper, setIsLower, setNumberString} = useStore()

  interface IOption {
    number: number;
    text: string;
    fun: any;
    status?:string 
  }

  const options: IOption[] = [
    {number: 1, text: "Include Uppercase Letters", fun: setIsUpper},
    {number: 2, text: "Include Lowercase Letters", fun: setIsLower},
    {number: 3, text: "Include Number", fun: setIsNum},
    {number: 4, text: "Include Symbols", fun: setIsSumb},                                  /*  status: "disabled" */                                       /* , status: "active" */
  ]
  

  return (
    <div className={styles.choiceDiv}>
      
        {options.map(e => (
          <div key={e.number} className={styles.inputStyle}>
              <input className={styles.checkbox} type="checkbox" onChange={() => {e.fun(); setNumberString()}}/>      {/* disabled={e.status === "active" ? true : false} */}
            <label>{e.text}</label>
          </div>
        ))}
        
    </div>
  )
}

export default Input
