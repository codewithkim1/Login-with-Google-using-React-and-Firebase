import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import './App.css';

function App() {
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // Fix the typo here
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      console.log("Logged in successfully");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  }

  return (
    <>
      <button onClick={handleGoogleLogin}>Login</button>
    </>
  )
}

export default App;
