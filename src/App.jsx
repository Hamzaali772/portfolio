import { useEffect } from 'react';
import './App.css'
import Main from './component/main'
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css'
function App() {
  useEffect(() => {
    AOS.init({
      
    });
  }, []);
  return (
    <>
      <Main/>
    </>
  )
}

export default App
