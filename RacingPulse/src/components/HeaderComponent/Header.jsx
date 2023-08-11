import './Header.css'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

function Header() {

   const [anchorElCalendario, setAnchorElCalendario] = useState(null);
   const [anchorElCategorias, setAnchorElCategorias] = useState(null);
   const [anchorElAvatar, setAnchorElAvatar] = useState(null);



   const handleClickCategorias = (event) => {
      setAnchorElCategorias(event.currentTarget);
   };
   
   const handleCloseCategorias = () => {
      setAnchorElCategorias(null);
   };

   const handleClickCalendario = (event) => {
      setAnchorElCalendario(event.currentTarget);
   };
   
   const handleCloseCalendario = () => {
      setAnchorElCalendario(null);
   };

   const handleClickAvatar = (event) => {
      setAnchorElAvatar(event.currentTarget);
   };
   
   const handleCloseAvatar = () => {
      setAnchorElAvatar(null);
   };

    return (
        <div className="header">
            <div className="titleLogo">
               <div className="logo">
                   <img src="./LOGO-SEMESCRITA.png" alt="logo" />
               </div>
               <div className="title">
                   <h1>Racing Pulse</h1>
            </div>
            </div>

            <div className="NavMenu">

               <Button className='HomeButton'>
                  Home
               </Button>

               {/* Categorias */}

               <Button
                  id="CategoriasButton"
                  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  aria-controls={open ? 'categoriasMenu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClickCategorias}
                  >
                     Categorias
               </Button>

               <Menu
                  id="categoriasMenu"
                  anchorEl={anchorElCategorias}
                  open={Boolean(anchorElCategorias)}
                  onClose={handleCloseCategorias}
                  MenuListProps={{'aria-labelledby': 'CategoriasButton',}}
               >
               <MenuItem onClick={handleCloseCategorias}>F1</MenuItem>
               <MenuItem onClick={handleCloseCategorias}>NASCAR</MenuItem>
               <MenuItem onClick={handleCloseCategorias}>LMP2</MenuItem>
               </Menu>

               {/* Categorias */}

               {/* Calendario */}

               <Button
                  id="CalendarioButton"
                  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  aria-controls={open ? 'CalendarioMenu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClickCalendario}
                  >
                     Calendários
               </Button>
               <Menu
                  id="CalendarioMenu"
                  anchorEl={anchorElCalendario}
                  open={Boolean(anchorElCalendario)}
                  onClose={handleCloseCalendario}
                  MenuListProps={{'aria-labelledby': 'CalendarioButton',}}
               >
               <MenuItem onClick={handleCloseCalendario}>F1</MenuItem>
               <MenuItem onClick={handleCloseCalendario}>NASCAR</MenuItem>
               <MenuItem onClick={handleCloseCalendario}>GT3</MenuItem>
               </Menu>

               <div className='signatureButton'>
                  <Button disableRipple disableFocusRipple>
                     Assinar
                  </Button>
               </div>

               <div className="AvatarContainer">
               <Button
               variant="outlined" 
               sx={{ minWidth: "42px" }}
               aria-controls={open ? 'AvatarMenu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               onClick={handleClickAvatar}
               >
                  <Avatar />
               </Button>

               <Menu
                  id="AvatarMenu"
                  anchorEl={anchorElAvatar}
                  open={Boolean(anchorElAvatar)}
                  onClose={handleCloseAvatar}
                  MenuListProps={{'aria-labelledby': 'AvatarButton',}}
               >
               <MenuItem onClick={handleCloseAvatar}>F1</MenuItem>
               <MenuItem onClick={handleCloseAvatar}>NASCAR</MenuItem>
               <MenuItem onClick={handleCloseAvatar}>GT3</MenuItem>
               </Menu>
               </div>
            </div>
        </div>
    )
}
export default Header