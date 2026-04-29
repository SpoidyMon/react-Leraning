// import React from 'react'
import { Bookmark } from "lucide-react"


const Card = (props) => {
    return (
        <div>
            <div className="Card">
                <div>
                    <div className="top">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnYPXIDmRTKpj1drsmIRD_0NJJLVIVnMJNA&s" alt="" />
                        {/* <img src={props.brandlogo} alt="" /> */}
                        <button>Save <Bookmark size={15} /></button>
                    </div>
                    <div className="center">
                        <h3>{props.company} <span>{props.datePosted}</span></h3>
                        <h4>{props.post}</h4>
                        <div className='tag'>
                            <h4>{props.tag1}</h4>
                            <h4>{props.tag2}</h4>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <h3>{props.pay}</h3>
                        <p>{props.location}</p>
                    </div>
                    <button>Apply Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card
