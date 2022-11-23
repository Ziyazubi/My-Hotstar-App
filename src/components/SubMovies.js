import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { changeUserName } from './redux/reducer';
import MovieCard from './MovieCard';
import MovieCarousel from './MovieCarousel';
import MainCarousel from './MainCarousel';

import './SubMovies.css'
import { useState } from 'react';
import WatchHistory from './WatchHistory';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://google.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
}

const SubMovies = (props) => {

  const [open, setOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('username'))

  const handleOpen = () => {
    // handle modal open
    setOpen(true)
  };
  
  const handleClose = () => {
    //handle modal close
    setOpen(false)
  };
  
  const setData = () => {
    // set data after login
    const userName = document.getElementById('username')
    const uname = userName.value
    localStorage.setItem('username', uname)
    handleClose()
    setLoggedIn(true)    
  }

  const removeData = () => {
    // remove data from local storage after logout
    localStorage.removeItem("username")
    setLoggedIn(null)
    handleClose()
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalMoviesIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Zubi's Hotstar Clone
          </Typography>
            <Button className='login-btn' onClick={handleOpen}>
            { isLoggedIn ? localStorage.getItem('username') : "Login" }
            </Button>

              <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby = "modal-modal-title"
                aria-describedby = "modal-modal-description"
              >
                <Box sx={style}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    { isLoggedIn ? "Logout" : "Login" } 
                  </Typography>
                  
                    { isLoggedIn === null &&    
                    <Typography id="modal-modal-description" sx={{ mt:2 }}>
                      <TextField id="username" label="Enter Username" className='username-login' variant="filled" />
                    
                      <TextField
                        sx={{ mt:2 }}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        className='user-password'
                      />

                  </Typography>
                  }
                  <Button onClick={handleClose}>Close</Button>
                  <Button onClick={isLoggedIn ? removeData : setData}>
                  { isLoggedIn ? "Logout" : "Login" } 
                  </Button>
                </Box>
              </Modal>

        </Toolbar>
      </AppBar>

      {/* main carousel */}
      <MainCarousel />

      {/* Watch History */}
      {isLoggedIn ? <WatchHistory /> : null}
      {/* <WatchHistory /> */}

      {/* for trending shows */}
      <MovieCarousel />

      <main>
        {/* for popular shows */}
        <MovieCard props/>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Contents of the footer! Contents of the footer! Contents of the footer! 
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default SubMovies;