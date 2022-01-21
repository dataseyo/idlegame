import React from "react"
import "./styles.css"

const upgradeOptions = {
    upgrade50: {
        text: "Add 5",
        cost: 25,
        increase: 5,
        show: false,
        purchased: false,
    },

    upgrade100: {
        text: "add 10",
        cost: 50,
        increase: 10,
        // purchased: false,
    },

    upgrade500: {
        text: "add 10",
        cost: 50,
        increase: 10,
        // purchased: false,
    },

    upgrade1000: {
        text: "add 10",
        cost: 50,
        increase: 10,
        // purchased: false,
    },

    upgrade5000: {
        text: "add 10",
        cost: 50,
        increase: 100,
        // purchased: false,
    }
}

export default function Upgrages(props) {

     const upgradeButtons = Object.keys(upgradeOptions).map((item) => 
                 <button>
                     {upgradeOptions[item].text}
                 </button>
         )
    

    return (
        <div className="upgrade-container">
            <p className="title">Upgrades</p>

            {props.clicks > 10 &&
                <button 
                    className="upgrade-button"
                    onClick={props.passUpgradeData(upgradeOptions.upgrade50.increase)}
                >
                    Upgrade 1
                </button>
            }

            {upgradeButtons}



        </div>
    )
}