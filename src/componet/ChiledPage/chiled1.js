import React, { useContext } from "react";
import { CountContext } from "./ParentsTochailed";



const Chiled1 = () => {
    const countcontext = useContext(CountContext);
    return (
        <div>
            count : {countcontext.countState}
            <button className ="mx-3" onClick={() => countcontext.countDispatch({ type: 'increment', value: 10 })}>increment</button>
            <button  className ="mr-3" onClick={() => countcontext.countDispatch({ type: 'decrement', value: 10 })}>Decrement</button>
            <button onClick={() => countcontext.countDispatch({ type: 'revert' })}>Reset</button>
        </div>
    )

}

export default Chiled1 