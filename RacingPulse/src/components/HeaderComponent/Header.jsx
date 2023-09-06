import './Header.css'

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonGroup from '@mui/material/ButtonGroup';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Logout from '@mui/icons-material/Logout';

import { NavLink } from 'react-router-dom';
import { useState, useNavigate } from 'react';

function Header() {

/*    const navigate = useNavigate(); */

   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

/*    const logOut = async () => {
      const auth = getAuth();
      try {
      await signOut(auth)
         .then(() => {
            console.log('Sign-out successful.')
            navigate('/SignIn')
         })
      } catch (err){
         console.error(err);
      }
   }; */

   const handleLogout = () => {
      logOut();
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

               <NavLink to="/">
               <Button className='HomeButton'>
                  Home
               </Button>
               </NavLink>

               <div className='signatureButton'>
                  <Button disableRipple disableFocusRipple>
                     Assinar
                  </Button>
               </div>

               <div className='CreateButton'>
                  <NavLink to="/CreatePost">
                     <Button disableRipple>
                        Criar
                     </Button>
                  </NavLink>
               </div>


               <div className="AvatarContainer">

               <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        <Tooltip title="Account settings">
                           <IconButton
                              onClick={handleClick}
                              size="small"
                              sx={{ ml: 2 }}
                              aria-controls={open ? 'account-menu' : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? 'true' : undefined}
                           >
                              <Avatar><img src="./1.jpg" alt="" /></Avatar>
                           </IconButton>
                        </Tooltip>
                     </Box>

                     <Menu
                     anchorEl={anchorEl}
                     id="account-menu"
                     open={open}
                     onClose={handleClose}
                     onClick={handleClose}
                     PaperProps={{
                        elevation: 0,
                        sx: {
                           overflow: 'visible',
                           filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                           mt: 1.5,
                           '& .MuiAvatar-root': {
                           width: 32,
                           height: 32,
                           ml: -0.5,
                           mr: 1,
                           },
                           '&:before': {
                           content: '""',
                           display: 'block',
                           position: 'absolute',
                           top: 0,
                           right: 14,
                           width: 10,
                           height: 10,
                           bgcolor: 'background.paper',
                           transform: 'translateY(-50%) rotate(45deg)',
                           zIndex: 0,
                           },
                        },
                     }}
                     transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                     anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                     >
                        <MenuItem onClick={handleClose}>
                           <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                           <ListItemIcon>
                              <Settings fontSize="small" />
                           </ListItemIcon>
                           Settings
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                           <ListItemIcon>
                              <Logout fontSize="small" />
                           </ListItemIcon>
                           Logout
                        </MenuItem>
                     </Menu>
               </div>
            </div>
        </div>
    )
}
export default Header