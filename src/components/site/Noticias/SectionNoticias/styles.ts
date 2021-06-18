import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100vw',
    minHeight: 500,
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: 1140,
    height: '100%',
    '@media (max-width: 1140px)': {
      margin: '0 5%',
    },
  },
  sectionTitle: {
    color: theme.palette.primary.main,
    marginBottom: '1rem',
    fontSize: 48,
    fontWeight: 900,
  },
  notice: {
    display: 'flex',
    marginBottom: '2rem',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  thumb: {
    width: 170,
    height: 100,
    borderRadius: 8,
  },
  texts: {
    marginLeft: '1rem',
    display: 'flex',
    flexDirection: 'column',
    '& h1': {
      margin: 0,
      color: theme.palette.secondary.main,
    },
    '& h1, span': {
      marginBottom: '0.5rem',
    },
    '@media (max-width: 768px)': {
      marginLeft: 0,
      marginTop: '0.5rem',
    },
  },
}));

export default useStyles;
