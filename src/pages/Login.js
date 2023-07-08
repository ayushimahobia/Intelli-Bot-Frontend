import React ,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios'
import {Box,
    Typography,
    useTheme,
    useMediaQuery,
    TextField,
    Button,
    Alert,
    Collapse} from '@mui/material'
const Login = () => {
  const theme = useTheme()
  const navigate = useNavigate();
  //media
  const isNotMobile = useMediaQuery("(min-width: 1000px)")
  // State
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [error,setError] = useState("");
  //register ctrl
  const handleSubmit = async (e)=>{
      e.preventDefault();
      try {
        await axios.post("https://intelli-bot-backend.onrender.com/api/v1/auth/login", { email, password });
        toast.success("Login Successfully");
        localStorage.setItem("authToken", true);
        navigate("/");
      } catch (err) {
         console.log(err)
         if( err.response && err.response.data.error){
          setError(err.response.data.error);
         }
         else if(err.message){
          setError(err.message)
         }
         setTimeout(()=>{
           setError("");
         }, 5000);
      }
  }
  return(
  <Box width = {isNotMobile ? '40%' : '80%'} p ={'2rem'} 
  m = {'2rem auto'}
  borderRadius ={5}
  sx ={{boxShadow:5}}
  backgroundColor = {theme.palette.background.alt}>
      <Collapse in={error !== ""}> 
      <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
      </Collapse>
      <form onSubmit = {handleSubmit}>
        <Typography color = {'#2D0378'} varient = "h3" fontWeight={'bold'}>Sign In</Typography>
         <TextField 
        label ="email" 
        type = "email"
        required 
        margin ="normal" 
        fullWidth 
        value ={email} 
        onChange={(e)=>{
        setemail(e.target.value);
        }}
        /> 
        <TextField 
        
        label ="password"
        type = "password" 
        required
        margin ="normal" 
        fullWidth 
        value ={password} 
        onChange={(e)=>{
        setpassword(e.target.value);
        }}
        /> 
        <Button 
        type = "submit" 
        fullWidth 
        varient ="contained" 
        size ="large"
        sx ={{color:'#2D0378' ,mt:2}}
        > 
        Sign In
      </Button>
      <Typography 
      color = {'#2D0378'}
      mt ={2}>Don't have an account ? <Link to ="/register">Please Register</Link>
      </Typography>
  </form>
</Box>
);
}

export default Login
