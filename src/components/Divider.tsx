import { Box } from '@mui/material'

const Divider = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        padding: '8px'
      }}
    >
      <div style={{

        width: '100%',
        border: '1px solid #E3E6E9',
      }}/>
      <span style={{
        top: 1,
        position: 'absolute',
        backgroundColor: '#fff',
        width: '40px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#BEC5CC',
      }}>
        OR
      </span>
    </Box>
  )
}

export default Divider