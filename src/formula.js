import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './routerr'
import cl from './Formula.module.css'

function Formula() {
    function otvet(){
        let x = input1 + input2 + input3;
        let a = eval(x)
        alert(a);
    }

    const [input1,setInput1] = useState('')
    const [input2,setInput2] = useState('')
    const [input3,setInput3] = useState('')

    return (
        <div className={cl.formulaContainer}>
            <input type="number" placeholder='Введите x' value={input1} onChange={(e)=>setInput1(e.target.value)}/>
            <input type="char" placeholder='Введите операнд' value={input2} onChange={(e)=>setInput2(e.target.value)}/>
            <input type="number" placeholder='Введите y' value={input3} onChange={(e)=>setInput3(e.target.value)}/>
            <div>
            <button onClick={otvet}>Ответ</button>
            <Link to={'/Tree'}><button>Древо</button></Link>
            <Link to={'/'}><button>Домой</button></Link>
            </div>
        </div>
    )
}

export default Formula;