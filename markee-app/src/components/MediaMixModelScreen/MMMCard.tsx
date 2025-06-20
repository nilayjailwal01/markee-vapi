import React from 'react'

interface CardProps{
    title:string;
    content:string;
}

const MainCardMMM : React.FC<CardProps> = ({title,content})=>{
    return(
        <div className='card'>
            <div className='card-body'>
                <h2 className = "card-title">{title}</h2>
                <p className= "card-content">{content}</p>
            </div>
        </div>
    )
}

export default MainCardMMM;