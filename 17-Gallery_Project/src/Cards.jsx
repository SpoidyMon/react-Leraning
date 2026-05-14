import React from 'react'

const Cards = (props) => {
    return (
        <div>
            <a href={props.elem.url}>
                <div className='h-40 w-44 overflow-hidden rounded-xl'>
                    <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
                </div>
                <h2 className='text-lg font-bold'>{props.elem.author}</h2>
            </a>

        </div>
    )
}

export default Cards
