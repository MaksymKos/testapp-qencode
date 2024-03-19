import { Typography } from '@mui/material'

type Props = {
  text: string,
}

const Title = ({ text }: Props) => {
  return (
    <Typography
      sx={{
        fontFamily: 'Basis Grotesque Pro',
        fontWeight: '700',
        fontSize: '30px',
        color: '#1a1919',
      }}
    >
      {text}
    </Typography>
  )
}

export default Title