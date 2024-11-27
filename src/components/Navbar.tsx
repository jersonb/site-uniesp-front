import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
import { Link } from 'react-router'
import MenuIcon from '@mui/icons-material/Menu'
import{ useState } from 'react'

export function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleMenuOpen = (event:any) => {
      setAnchorEl(event.currentTarget)
    }
  
    const handleMenuClose = () => {
      setAnchorEl(null)
    }
  
    return (
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5', boxShadow: 0, zIndex: 1 }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', position: 'relative' }}>
            <IconButton edge="start" color="inherit"  />
              <img src="uniesp.jpg" alt="Uniesp Logo" width={80} height={80} />
            
            {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 15 }}>
              <Button color="inherit" component={Link} to="/a-faculdade">
                A Faculdade
              </Button>
              <Button color="inherit" component={Link} to="/dpo-lgpd">
                DPO LGPD
              </Button>
              <Button color="inherit" component={Link} to="/noticias">
                Notícias
              </Button>
              <Button color="inherit" component={Link} to="/admin-noticias">
                Admin
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton color="inherit" edge="end" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                <MenuItem onClick={handleMenuClose} component={Link} to="/a-faculdade">
                  A Faculdade
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/dpo-lgpd">
                  DPO LGPD
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/noticias">
                  Notícias
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component={Link} to="/admin-noticias">
                  Admin
                </MenuItem>
              </Menu>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    )
}
