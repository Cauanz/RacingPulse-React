/* eslint-disable no-unused-vars */
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from 'react-router-dom'

import './SignUp.css'
import { useState } from 'react';


   const theme = createTheme({
      palette: {
      secondary: {
         main: '#F91111', // Substitua 'cor-desejada' pela cor que você deseja para o ícone
      },
      },
   });

   export default function SignUp() {
   
   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

/*    const handleSubmit = async (event) => {
      event.preventDefault();

         const auth = getAuth();
         createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               const user = userCredential.user;
               navigate('/');
            })
            .catch((error) => {
               console.log(error.code);
               console.log(error.message);
            });
            
      /* console.log(firstName, lastName, email, password );
      // Para testar se os dados estão sendo enviados corretamente
   }; */


   return (
      <ThemeProvider theme={theme}>
         <Container component="main" maxWidth="xs">
         <CssBaseline />
         <Box
            sx={{
               marginTop: 8,
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
            }}
         >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
               <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
               Sign up
            </Typography>

            <Box component="form" noValidate /* onSubmit={handleSubmit} */ sx={{ mt: 3 }}>
               <Grid container spacing={2}>
               <Grid item xs={12}>
                  <TextField
                     required
                     fullWidth
                     id="email"
                     label="Endereço de Email"
                     name="email"
                     autoComplete="email"
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </Grid>
               <Grid item xs={12}>
                  <TextField
                     required
                     fullWidth
                     name="password"
                     label="Senha"
                     type="password"
                     id="password"
                     autoComplete="new-password"
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </Grid>
               </Grid>
               <Button
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 3, mb: 2 }}
               >
               Cadastre-se
               </Button>
               <Grid container justifyContent="flex-end">
               <Grid item>
                  <NavLink to="/SignIn" variant="body2">
                     Já tem uma conta? Entrar
                  </NavLink>
               </Grid>
               </Grid>
            </Box>
         </Box>
         </Container>
      </ThemeProvider>
   );
}