import './App.css';
import React, {useState} from "react"
import Header from "./components/header"
import Gameui from './components/gameui';

function App() {
  // store user stats
  const [stats, setStats] = useState({
    health: 100,
    strength: 10,
    magic: 10,
    level: 1,
  })

  // store amoung of times user has clicked
  const [clicks, setClicks] = useState(0)

  // store how much each click adds to {clicks}
  const [clickIncrement, setClickIncrement] = useState(1)

  // update clicks data when user presses character
  const handleClicks = () => {
    setClicks(prevClicks => prevClicks + clickIncrement)
  }

  // change clickIncrement amount when user buys an upgrade
  const handleUpgrade = (props) => {
    setClickIncrement(prevIncrement => prevIncrement + 5)

    // apply cost
    // setClicks(prevClicks => prevClicks - props.cost)
  }

  return (
    <div className="App">
      <Header 
        health={stats.health} 
        strength={stats.strength} 
        magic={stats.magic}
        level={stats.level}
      />
      <Gameui clicks={clicks} onClick={handleClicks} passClickData={setClicks} passUpgradeData={setClickIncrement}/>
    </div>
  );
}

export default App;
