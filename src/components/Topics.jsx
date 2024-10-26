import React from 'react'

function Topics({name}) {
    const id = name.toLowerCase();
    return (
        <li>
            <button onClick={() =>{ 
                document.getElementById(`${id}`).scrollIntoView({ behavior: 'smooth' })
        }} className="text-green-500 text-[17px] hover:text-green-700 font-quicksand font-semibold">{name}</button>
        </li>
    )
}

export default Topics
