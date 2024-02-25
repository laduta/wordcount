import { useState } from "react"
import "./TaskForm.css"


export const TaskForm = () => {
    const [text, setText] = useState("")
    const [wordcount, setWordCount] = useState(0)
    const [charCount, setCharCount] = useState(0)

    function handleTask(){
        if(text.length === 0){
            alert("Please enter something")
        }
        else{
            var regex = /[a-zA-Z0-9]/g;// only count letters and numbers
            setCharCount(text.match(regex).length)
            setWordCount(text.trim().split(/\s+/).length)
        }      
        
    }
    function clearTask(){
        setCharCount(0)
        setWordCount(0)
        setText("")
    }
  return (
    <section className="container">
        <div className="head-title">Word and Character Count</div>
        <div>
            <textarea onChange={(event) => setText(event.target.value)} id="mytext" value={text} placeholder="Enter or paste text here"></textarea>
        </div>
        <div className="btn-layout">
            <div className="StartBtn"><button onClick={handleTask}>Click to Start counting</button></div>
            <div className="Clearbtn"><button onClick={clearTask}>Clear</button></div>
        </div>
        <div className="grid-layout">
            <div className="counter-1"> Character Count : {charCount}</div>
            <div className="counter-2">word Count : {wordcount}</div>
        </div>
    </section>
  )
}
