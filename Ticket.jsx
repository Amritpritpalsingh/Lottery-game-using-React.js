import TicketNum from "./TickitNumber"
export default function Ticket({ticket}){
    return(
        <div>
            {ticket.map((num,ind)=>(
                <TicketNum num={num} key={ind}/>
            ))}
        </div>
    )
}