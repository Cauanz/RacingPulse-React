import './Header.css'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

function Header() {

   const [anchorElCalendario, setAnchorElCalendario] = useState(null);
   const [anchorElCategorias, setAnchorElCategorias] = useState(null);


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

   const styles = {
      avatarButton: {
        width: '43px',
        height: '42px',
        borderRadius: '50%',
        border: '2px solid #000',
      },
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
                  <Button>
                     Assinar
                  </Button>
               </div>

               <div className="AvatarButton">
{/*                   <button>
                     <Avatar alt="Remy Sharp" src="./1.png" />
                  </button> */}

                  <Button style={styles.avatarButton}>
                     <Avatar alt="Remy Sharp" src="./1.png" />
                  </Button>
               </div>
            </div>
        </div>
    )
}
export default Header