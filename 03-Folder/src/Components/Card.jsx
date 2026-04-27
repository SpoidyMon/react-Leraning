

const Card = (props) => {

  return (
    <div >
      <div className="Card">
        <img src={props.img} alt="" />
        <h1>{props.user} <br /> My age is {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, debitis aliquam error totam </p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
