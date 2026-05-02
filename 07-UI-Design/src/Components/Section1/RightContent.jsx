import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    return (
        <div id='right' className=' w-2/3 h-full rounded-4xl flex flex-nowrap overflow-x-auto gap-8 p-6'>
            {props.users.map(function(elem,idx){

                return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />  
            })}
        </div>
    )
}

export default RightContent
