import { useState } from "react";
import "./Lottery.css";
import { generate, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n, winCondition}) {
    let [ticket, setTicket] = useState(generate(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(generate(n))
    }
    return (
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <Ticket ticket={ticket} />
                <br />
                <button onClick={buyTicket}>Buy New Ticket</button>
                <h3>{isWinning && "Congrass.!"}</h3>
            </div>
        </div>
    );
}