import { useState } from "react"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({num,winningsum}){
    let [ticket,setTicket]=useState(genTicket(num));
    let isWinning = sum(ticket) === winningsum;
    let newTicket=()=>{
        setTicket(genTicket(num))
    }
    return(<div>
        <h2>I am Lottery Guy </h2>
        <h3>Come To Suck</h3>
        <div>
        <Ticket ticket={ticket}/>
        </div>
        <button onClick={newTicket}>Buy new Ticket</button>
        <h4>{isWinning && "You Won The Lottery Abb Biwi Ki Lena Isi Baat Pe"}</h4>
    </div>)
}