import React , {useRef, useState} from 'react'
import o_design from "../Assets/o-design.jpg"
import x_design from "../Assets/x-design.jpg"
import './TicTacToe.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let data = ["","","","","","","","",""];


const TicTacToe = () => {

    let [count,setCount] =  useState(0);
    let [lock,setLock] =  useState(false);
    // const [isFlipped, setIsFlipped] = useState(false);
    // let [isFlip,setisFlip] = useState(false);
    let winner = useRef(null);
    const toggle = (e,num) =>{
        if(data[num] !== ""){
                toast("Already enter.", {"type":'warning',position:toast.POSITION.TOP_CENTER});
                return ;
        }
        if(lock){
            return 0;
        }
        if(count%2 === 0){
            e.target.innerHTML = `<img src='${o_design}'></>`;
            data[num]="o";
            setCount(++count);

        }
         else {
            e.target.innerHTML = `<img src='${x_design}'></>`;
            data[num]="x";
            setCount(++count);
         }
         console.log(num);
         checkWind()
    }

    const checkWind = ()=>{        
        if(data[0] ===  data[1]  && data[1] === data[2] && data[2] !==""){
            win(data[0])
        }

        if(data[3] ===  data[4]  && data[4] === data[5] && data[5] !== ""){
            win(data[3])
        }
        if(data[6] ===  data[7] && data[7] === data[8] && data[8] !== ""){
            win(data[6])
        }
        if(data[0] ===  data[3] && data[3] === data[6] && data[6] !== ""){
            win(data[0])
        }
        if(data[1] ===  data[4] && data[4] === data[7] && data[7] !== ""){
            win(data[1])
        }
        if(data[2] ===  data[5] && data[5] === data[8] && data[8] !== ""){
            win(data[2])
        }
        if(data[0] ===  data[4] && data[4] === data[8] && data[8] !== ""){
            win(data[0])
        }
        if(data[2] ===  data[4] && data[4] === data[6] && data[6] !== ""){
            win(data[2])
        }
    }

    const win = (won) =>{
        winner.current.innerHTML = `Game winner is ${won}`;
        setLock(true);
    }

    const reset = (e)=>{
        setLock(false);
        setCount(0);
        for(let i =0;i<9;i++){
            document.getElementById(i+'').innerHTML = "";
        }
        data = data.map(value =>"");
        winner.current.innerHTML = `TicTacToe Game In<span>React</span>`;
    }

    return <div className='container'>
         <ToastContainer />
        <h1 className='title' ref={winner}>TicTacToe Game In<span>React</span>
        </h1>
        <div className='board'>
       
            <div className="row1">
                {/* <ReactCardFlip isFlipped= {isFlip} flipDirection="horizontal" > */}
                    <div id='0' className="boxes" onClick={(e)=>{toggle(e,0)}}></div> 
                {/* </ReactCardFlip> */}
                <div id='3' className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
                <div id='6' className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
            </div>
            <div className="row1">
                <div id='1' className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
                <div id='4' className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
                <div id='7' className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
            </div>
            <div className="row1">
                <div id='2' className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
                <div id='5' className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
                <div id='8' className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <button className='reset' onClick={(e)=>{reset(e)}}> Reset</button>
    </div>
}

export default TicTacToe;