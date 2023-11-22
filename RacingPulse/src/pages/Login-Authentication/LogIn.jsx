import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Para customizar o tema do Material UI


import { NavLink, useNavigate } from 'react-router-dom' // Para navegar entre as páginas com React Router Dom
import './LogIn.css'
import { useState } from 'react';


      const theme = createTheme({
      palette: {
      secondary: {
         main: '#F91111', // Substitua 'cor-desejada' pela cor que você deseja para o ícone
      },
      },
   });

   export default function LogIn() {

   const navigate = useNavigate();
/*    const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [remember, setRemember] = useState(false);

   const [wrongPassword, setWrongPassword] = useState(false); // Para mostrar o erro de senha incorreto
   const [wrongEmail, setWrongEmail] = useState(false); // Para mostrar o erro de email incorreto
   const [emptyPassword, setemptyPassword] = useState(false); // Para mostrar o erro de senha incorreto
   const [emptyEmail, setemptyEmail] = useState(false); // Para mostrar o erro de email incorreto

   const handleSubmit = async (e) => {
      e.preventDefault();

      if(remember) {
         console.log('Lembrar-me ativado');
         localStorage.setItem('rememberedEmail', email);
         localStorage.setItem('rememberedPassword', password);
      }

      if (email === '' || password === '') {
         console.log('Campos obrigatórios estão vazios');
         email === '' ? setemptyEmail(true) : setemptyEmail(false);
         password === '' ? setemptyPassword(true) : setemptyPassword(false);
         return; // Sai da função para evitar a submissão do formulário
      }

      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
         // Logado com sucesso / coloque aqui o que você quiser fazer após o login 
         const user = userCredential.user; // Usuário logado

         console.log(user, user.displayName);
         navigate('/');
      })
      .catch((error) => {
         console.log(error.code);
         console.log(error.message);
         error.code === 'auth/wrong-password' ? setWrongPassword(true) : error.code === 'auth/invalid-password' ?  setWrongPassword(true) : setWrongPassword(false);

         error.code === 'auth/user-not-found' ? setWrongEmail(true) : error.code === 'auth/invalid-email' ? setWrongEmail(true) : setWrongEmail(false);
      });
   }; */

   return (
   <>
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
            <img className='logo-login' src="./new-logo.png" alt="F1-CUSTOM-LOGO" />
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
               <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
               Sign in
            </Typography>

            <Box component="form" /* onSubmit={handleSubmit} */ noValidate sx={{ mt: 1 }}>
               <TextField
               margin="normal"
               required
/*                error={wrongEmail || emptyEmail}
               helperText={wrongEmail ? 'Email incorreto' : emptyEmail ? 'Campo obrigatório' : ''} */
               fullWidth
               id="email"
               label="Endereço de Email"
               name="email"
               autoComplete="email"
               autoFocus
/*                onChange={(e) => setEmail(e.target.value)} */
               />

               <TextField
               margin="normal"
               required
/*                error={wrongPassword || emptyPassword}
               helperText={wrongPassword ? 'Senha incorreta' : emptyPassword ? 'Campo obrigatório' : ''} */
               fullWidth
               name="password"
               label="Senha"
               type="password"
               id="password"
               autoComplete="current-password"
/*                onChange={(e) => setPassword(e.target.value)} */
               />

               <FormControlLabel
               control={<Checkbox value="remember" /* checked={remember} onChange={() => setRemember(!remember)} */ color="primary" />}
               label="Lembre-me"
               />

               <Button
               type="button"
               fullWidth
               disableRipple
               variant="contained"
               sx={{ mt: 3, mb: 2, height: '50px' }}
/*                onClick={handleSubmit} */
               on
               >
               Entrar
               </Button>


               <Grid container>
               <Grid item xs>
                  <Link href="#" variant="body2">
                     Esqueceu a senha?
                  </Link>
               </Grid>
               <Grid item>
                  <NavLink to={"/SignUp"} variant="body2">
                     {"Não tem uma conta? Cadastre-se"}
                  </NavLink>
               </Grid>
               </Grid>

            </Box>
         </Box>
         </Container>
      </ThemeProvider>
   </>
   );
}