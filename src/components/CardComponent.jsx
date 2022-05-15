
import "./ExpenseItem.css"
const Card = (props)=>{

   const newClass= `class ${props.className}`
   return  <div className={newClass}> {props.childern} </div>
   
}

export default Card;