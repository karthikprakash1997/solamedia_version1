import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Link as RoterLink } from "react-router-dom";

export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <a onClick={handleClick} className="nav-link" style={{
                cursor: "pointer", marginRight: 20, fontSize: '40px',
                fontWeight: 700,
                color: '#ff69b4'
            }} >
                PHOTOSHOOT
            </a>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MenuItem >                <RoterLink to="/celebrity-photoshoot" className="nav-link"
                    activeClass="nav-link" onClick={handleClose}>CELEBRITY PHOTOSHOOT</RoterLink></MenuItem>
                <MenuItem >                <RoterLink to="/modelling-photoshoot" className="nav-link"
                    activeClass="nav-link" onClick={handleClose}>MODELLING PHOTOSHOOT</RoterLink></MenuItem>
            </Menu>
        </div >
    );
}