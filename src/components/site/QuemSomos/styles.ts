import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100vw',
    minHeight: 600,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: 1140,
    height: '100%',
  },
  divider: {
    display: 'flex',
    marginBottom: 16,
    '@media (max-width: 967px)': {
      flexDirection: 'column',
    },
  },
  texts: {
    flex: 2,
    '@media (max-width: 967px)': {
      flex: 1,
      margin: '0 5%',
    },
  },
  headings: {
    '& h1, & h2': {
      color: '#fafafa',
    },
    '& h1': {
      marginBottom: 0,
      fontSize: 48,
      fontWeight: 900,
    },
    '& h2': {
      marginTop: 0,
      fontSize: 28,
      fontWeight: 500,
    },
  },
  content: {
    '& p': {
      color: '#fafafa',
      textAlign: 'justify',
      fontSize: 15,
    },
  },
  video: {
    flex: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& iframe': {
      width: '100%',
      maxWidth: 560,
      height: 315,
    },
    '@media (max-width: 967px)': {
      flex: 1,
      justifyContent: 'center',
      margin: '0 5%',
    },
  },
}));

export default useStyles;
