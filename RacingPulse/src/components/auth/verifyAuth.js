import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const isAuthenticated = () => {
   const auth = getAuth();

   return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
      if (user) {
         resolve(true); // O usuário está autenticado
      } else {
         resolve(false); // O usuário não está autenticado
      }
   }, (error) => {
      console.error('Erro ao verificar autenticação:', error);
      reject(error);
      });
   });
};