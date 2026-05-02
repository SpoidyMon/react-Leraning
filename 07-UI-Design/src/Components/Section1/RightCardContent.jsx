// import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between'>
            <h2 className='h-12 w-12 text-xl font-semibold rounded-full flex justify-center items-center bg-white'>{props.id+1}</h2>
            <div>
                <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere quo dolore nesciunt </p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className=' text-white rounded-full px-6 py-2'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className=' text-white rounded-full px-3 py-2'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
