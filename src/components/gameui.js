import React, {useState} from "react"
import "./styles.css"
import Char from './char';
import Upgrages from './upgrades';
import Quests from "./quests";

export default function Gameui(props) {

    return (
        <div className="gameui-container">
            <Quests />
            <Char onClick={props.onClick} clicks={props.clicks}/>
            <Upgrages clicks={props.clicks} passUpgradeData={props.passUpgradeData}/>
        </div>
    )
}