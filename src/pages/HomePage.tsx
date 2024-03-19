import { Button, Container, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home Page
          </Typography>
          <Link to="/">
            <Button
              onClick={() => localStorage.removeItem('token')}
              sx={{
                color: '#fff'
              }}
            >Log out</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Container>
        Some content here
      </Container>
    </>
  );
};

export default HomePage;