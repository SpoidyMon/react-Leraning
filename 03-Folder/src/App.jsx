// import Card from "./Components/Card

import Card from "./Components/Card"


const App = () => {
  return (
    <div className="Parent">
      <Card user="Mrunal Jagtap" age={20} img="https://images.unsplash.com/photo-1691443297137-68818fe7bce9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Rupesh Jagtap" age={21} img="https://images.unsplash.com/photo-1773301885514-a1ef2fd93f43?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card user="Ranveer Ghodke" age={22} img="https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App
