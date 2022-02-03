import React, { useState } from "react"
import "./styles.css"

export default function Upgrages(props) {
    const [upData, setUpData] = useState({
        text: "Upgrade",
        clicksRequired: 10,
        cost: 5,
        increase: 10
    })

    const handleUpgradePurchase = () => {
        if (props.clicks < upData.cost) {
            console.log("Can't afford")
        } else {
            props.passClickData(prevClickData => prevClickData - upData.cost)
            props.passUpgradeData(upData.increase)
            setUpData(prevUpData => {
                return {
                    ...prevUpData,
                    cost: prevUpData.cost + 100,
                    increase: prevUpData.increase + 5
                }
            })
        }
    }

    return (
        <div className="upgrade-container">
            <p className="title">Upgrades</p>

            <button className="upgrade-button" onClick={() => handleUpgradePurchase()}>
                <div className="upgrade-button-container">
                    <p className="upgrade-button-text">Cost: {upData.cost}</p>
                    <p className="upgrade-button-text">Click Power: {upData.increase}</p>
                </div>
                
            </button>



        </div>
    )
}