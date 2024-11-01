import React from 'react'

function Topics({ name, icon }) {
    const id = name.toLowerCase().replace(" ", "");
    return (
        <li>
            <button onClick={() => { 
                document.getElementById(`${id}`).scrollIntoView({ behavior: 'smooth' })
            }} className="flex items-center text-orange-500 text-[17px] hover:text-green-700 font-quicksand font-semibold">
                {icon && <span className="mr-2">{icon}</span>}
                {name}
            </button>
        </li>
    )
}

export default Topics
