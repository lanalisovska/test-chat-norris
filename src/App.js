import './styles/App.css';
import React from "react";
import { BrowserRouter} from "react-router-dom"; 
import useLocalStorage from 'use-local-storage'
import AppRouter from './components/AppRouter';
import Navbar from './UI/Navbar/Navbar';

function App() {


  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
    }
  
  return (
    <BrowserRouter>
       <div className='App' data-theme={theme}>
         
           <Navbar switchTheme={switchTheme} theme={theme} />
           <div className='content'>
           <AppRouter />
           </div>
       </div>
       </BrowserRouter>
   
  );
}

export default App;
