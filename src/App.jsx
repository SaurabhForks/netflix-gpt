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
import { setLoading } from './redux/slices/loaderSlice';

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(setLoading(true))
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        dispatch(setLoading(false))
        navigate('/')
        // ...
      } else {
        // User is signed out
        dispatch(setLoading(true))
        dispatch(removeUser())
        navigate('/login')
        dispatch(setLoading(false))
        // ...
      }
    });

    return () => unsubscribe();

  }, []);

  return (
    <MyRoutes />
  )
}

export default App
