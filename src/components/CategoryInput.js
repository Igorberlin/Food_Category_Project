import {useState } from "react";
//import { CategoryContext } from "../App";
import { useHistory } from "react-router-dom";
const CategoryInput = () => {
    const [input, setInput] = useState('')
    
    // const context = useContext(CategoryContext)
    const history = useHistory();
    const optimateInput = (str) => {
        return str.slice(0,1).toUpperCase()+ str.slice(1)
    }

    const inputHandler = (e) => {
        setInput(e.target.value)
    }
    return (
        <div className="input-group my-5">
            <input type="text" className="form-control"
                placeholder="type category"
                aria-describedby="search-btn"
                value = {input}
                onChange = {inputHandler}
            />
            <button className="btn btn-primary"
                    onClick = {()=>{                   
                        //context.changeCategory(optimateInput(input))
                        history.push(`/${optimateInput(input)}`)
                        setInput('')
                    }}
                    id="search-btn"
            >search category</button>
        </div>
    )
}
export default CategoryInput;