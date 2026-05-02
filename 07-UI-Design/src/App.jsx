// import React from 'react'
import Section1 from "./Components/Section1/Section1"
import Section2 from "./Components/Section2/Section2"

const App = () => {
  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'royalblue',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'orange',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1752170080627-0324ede1ddf2?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'indigo',
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1727268533600-eb783879ae86?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'black',
      tag:'Underhooked'
    },
    {
      img:'https://images.unsplash.com/photo-1723538428285-7a41d25d470a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',   
      color:'red',
      tag:'Underwork'
    },
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2/>
    </div>
  )
}

export default App
