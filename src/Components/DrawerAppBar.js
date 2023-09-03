import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:'#000000',height:'60px',boxShadow: '10px 70px 18px rgba(0, 0, 0, 0.2)'}} >
        <Toolbar>
      
          <Typography
            fontFamily={'EB Garamond'}
            variant="h6"
            component="div"
            fontSize={'30px'}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            FİNANSAL PORTFOLYO
          </Typography>
   
        </Toolbar>
      </AppBar>
      <nav>

      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {

  window: PropTypes.func,
};

export default DrawerAppBar;
