import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  article: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    width: '100%',
    maxWidth: 768,
    height: '100%',
    margin: '0 5%',
  },
  title: {
    fontSize: 28,
    color: '#424242',
    marginBottom: '0.5rem',
  },
  cover: {
    width: '100%',
    maxWidth: 768,
    height: 'auto',
    marginTop: '1rem',
  },
  mt05: {
    marginTop: '0.5rem',
  },
  ml1: {
    marginLeft: '1rem',
  },
  content: {
    '& p': {
      fontSize: 15,
      color: '#424242',
    },
  },
}));

export default useStyles;
