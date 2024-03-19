import { Box, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { toast } from 'react-toastify';
import Google from '../assets/Google';
import GitHub from '../assets/GitHub';

const SocialButtonLink = styled(Link)(() => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#060e1e',
  gap: '10px',
  border: 'solid',
  borderColor: '#D3D8DC',
  borderRadius: '6px',
  padding: '14px 52px',
  textDecoration: 'none',
}))

const SocialsAuth = () => {
  return (
    <Box
      display='flex'
      gap={2}
      width='100%'
    >
      <SocialButtonLink onClick={() => toast.warning('Not developed yet')}>
        <Google /> Google
      </SocialButtonLink>
      <SocialButtonLink onClick={() => toast.warning('Not developed yet')}>
        <GitHub /> Github
      </SocialButtonLink>
    </Box>
  )
}

export default SocialsAuth