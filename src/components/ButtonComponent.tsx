import { Button } from '@mui/material';

type Props = {
  handler: () => void,
  text: string,
  contained?: boolean,
}

const ButtonComponent = ({ handler, contained, text }: Props) => { // todo
  const variantType = contained ? 'contained' : 'outlined'

  return (
    <Button
      sx={{
        width: '100%',
        height: '48px',
        marginBottom: '20px',
        fontFamily: 'Basis Grotesque Pro',
        textTransform: 'capitalize',
        fontSize: '16px',
        fontWeight: 500,
      }}
      variant={variantType}
      onClick={() => handler()}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;