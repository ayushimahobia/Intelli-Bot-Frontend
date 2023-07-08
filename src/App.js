import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import Summary from './pages/summary';
import Paragraph from './pages/paragraph'
import { useMemo } from 'react';
import {Toaster} from 'react-hot-toast'
import { ThemeProvider, CssBaseline } from '@mui/material';
import {Box, Link,Typography,useTheme} from '@mui/material';
import { themeSettings } from './theme';
import {createTheme} from '@mui/material/styles';
import ChatBot from './pages/ChatBot';
import JsConverter from './pages/jsConvertor';
import ScifiImage from './pages/scifiimage';


function App() {
  const theme = useMemo(()=> createTheme(themeSettings(),[]));
  return (
    < >
    <ThemeProvider theme ={theme}>
     <CssBaseline/>
     <Navbar/>
     <Toaster/>
     <Routes>
      <Route  path ="/" element = {<Homepage/>}/>
      <Route path ="/login" element ={<Login/>}/>
      <Route path ="/register" element ={<Register/>}/>
      <Route path ="/summary" element={<Summary/>}/>
      <Route path ="/paragraph" element={<Paragraph/>}/>
      <Route path ="/chatbot" element={<ChatBot/>}/>
      <Route path ="/js-converter" element={<JsConverter/>}/>
      <Route path ="/scifi-image" element={<ScifiImage/>}/>
     </Routes>
     </ThemeProvider>
    </>
  );
}

export default App;
