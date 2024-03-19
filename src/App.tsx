import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box maxWidth="400px">
        <Outlet />
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default App;
