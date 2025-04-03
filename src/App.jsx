import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.scss'
import MyRoutes from './router/MyRoutes';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './redux/slices/userSlice';
import { useNavigate } from 'react-router';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        navigate('/')
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate('/login')
        // ...
      }
    });
  }, []);

  return (
    <MyRoutes />
  )
}

export default App
