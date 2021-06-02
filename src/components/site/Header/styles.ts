import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  header: {
    width: '100vw',
    height: 130,
    backgroundColor: '#760403',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: 1140,
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    '@media (max-width: 768px)': {
      justifyContent: 'center',
    },
  },
  texts: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 16,

    '& h1, & h2': {
      margin: 0,
      color: '#fff',
      textTransform: 'uppercase',
      letterSpacing: 2,
    },
    '& h2': {
      fontSize: 14,
      fontWeight: 500,
    },
  },
}));

export default useStyles;
