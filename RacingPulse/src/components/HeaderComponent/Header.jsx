import './Header.css'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

function Header() {

   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

    return (
        <div className="header">
            <div className="titleLogo">
               <div className="logo">
                   <img src="./LOGO.png" alt="logo" />
               </div>
               <div className="title">
                   <h1>Racing Pulse</h1>
            </div>
            </div>

            <div className="NavMenu">
               <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  >
                     Dashboard
               </Button>
               <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{'aria-labelledby': 'basic-button',}}
               >
               <MenuItem onClick={handleClose}>Profile</MenuItem>
               <MenuItem onClick={handleClose}>My account</MenuItem>
               <MenuItem onClick={handleClose}>Logout</MenuItem>
               </Menu>

               <Button
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  >
                     Dashboard
               </Button>
               <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{'aria-labelledby': 'basic-button',}}
               >
               <MenuItem onClick={handleClose}>Profile</MenuItem>
               <MenuItem onClick={handleClose}>My account</MenuItem>
               <MenuItem onClick={handleClose}>Logout</MenuItem>
               </Menu>
            </div>
        </div>
    )
}
export default Header