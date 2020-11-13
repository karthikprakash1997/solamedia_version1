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
            <a onClick={handleClick} className="nav-link" style={{ cursor: "pointer" }}>
                Tabs
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
                <MenuItem >                <RoterLink to="/gallery" className="nav-link"
                    activeClass="nav-link">Gallery</RoterLink></MenuItem>
                <MenuItem >                <RoterLink to="/gallery" className="nav-link"
                    activeClass="nav-link">Gallery</RoterLink></MenuItem>
                <MenuItem >                <RoterLink to="/gallery" className="nav-link"
                    activeClass="nav-link">Gallery</RoterLink></MenuItem>
            </Menu>
        </div >
    );
}