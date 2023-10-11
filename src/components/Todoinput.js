import React, { useState } from 'react'

function Todoinput(props) {
    const [inputText, setInputText] = useState('');
    const [inputStatus, setInputStatus] = useState('');
  return (
    <div className='form-input'>
        <div>
        <input type='text' className='input-field' placeholder='Enter any Task' value={inputText} 
         onChange={e=>{
          setInputText(e.target.value)
        }} />
        <button className='submit-btn'
        onClick={()=> {
            props.addList(inputText,inputStatus)
            setInputText("")
            setInputStatus("")
        }}>Add</button>
        </div>
        <select value={inputStatus} onChange={e=>{
          setInputStatus(e.target.value)
        }}>
          <option value="">- Task Status -</option>
          <option value="true">Completed</option>
          <option value="false">Not Complted</option>
        </select>
        
        <span className='err-msg' id="err-msg"></span>
    </div>
  )
}

export default Todoinput