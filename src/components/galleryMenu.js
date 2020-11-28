import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Link as RoterLink } from "react-router-dom";

export default function GalleryMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        console.log('hello');
        setAnchorEl(null);
    };

    return (
        <div>
            <a onClick={handleClick} className="nav-link" style={{ cursor: "pointer",marginLeft:20 }}>
                Gallery
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
                <MenuItem >                <RoterLink to="/gallery/actor" className="nav-link"
                    activeClass="nav-link" onClick={handleClose}>Actor</RoterLink></MenuItem>
                <MenuItem onClick={handleClose}>                <RoterLink to="/gallery/actress" className="nav-link"
                    activeClass="nav-link" onClick={handleClose}>Actress</RoterLink></MenuItem>
                <MenuItem onClick={handleClose}>                <RoterLink to="/gallery/movies" className="nav-link"
                    activeClass="nav-link" onClick={handleClose}>Movies</RoterLink></MenuItem>
            </Menu>
        </div >
    );
}