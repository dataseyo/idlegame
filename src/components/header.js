import React, { useState } from "react"
import "./styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faDumbbell, faMagic } from "@fortawesome/free-solid-svg-icons";
import { Popover, Typography, Button } from "@mui/material";
import CustomPopover from "./popover";


export default function Header(props) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div className="header-container">
            <p className="header-title">Stats</p>
            
            <div 
                className="header-icons" 
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <FontAwesomeIcon icon={faHeart} />
                <p className="header-text"> 
                    {props.health} 
                </p>
                <Popover
                    id="mouse-over-popover"
                    sx={{
                      pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography sx={{ p: 1 }}>Popover</Typography>
                </Popover>
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