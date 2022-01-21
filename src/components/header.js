import React, { useState } from "react"
import "./styles.css"
import Popover from '@mui/material/Popover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faDumbbell, faMagic } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
    // const [anchorEl, setAnchorEl] = useState(null)

    // const handlePopoverOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    //   };
    
    // const handlePopoverClose = () => {
    //     setAnchorEl(null);
    //   };

    // const open = Boolean(anchorEl);


    return (
        <div className="header-container">
            <p className="header-title">Stats</p>
            
            <div className="header-icons">
                <FontAwesomeIcon icon={faHeart} />
                <p className="header-text"> 
                    {props.health} 
                </p>
            </div>
                
            
            <div className="header-icons">
                <FontAwesomeIcon icon={faDumbbell} />
                <p className="header-text"> 
                    {props.strength} 
                </p>
            </div>

            <div className="header-icons">
                <FontAwesomeIcon icon={faMagic} />
                <p className="header-text">
                    {props.magic} 
                </p>
            </div>
            
            <div>
                <p className="header-text">
                    LVL: {props.level} 
                </p>
            </div>
            

        </div>
    )
}