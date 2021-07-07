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
  },
  justifyCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sectionTitle: {
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    padding: '20px 40px',
    borderRadius: '1.5rem',
    fontSize: 48,
    fontWeight: 900,

    '@media (max-width: 768px)': {
      marginLeft: '5%',
      padding: '20px 20px',
    },
  },
  contactText: {
    fontSize: 32,
    fontWeight: 500,
    color: '#949494',
    marginBottom: '0.5rem',

    '@media (max-width: 768px)': {
      fontSize: 20,
      marginLeft: '5%',
    },
  },
  email: {
    fontSize: 32,
    fontWeight: 500,
    color: theme.palette.secondary.main,
    textDecoration: 'none',

    '@media (max-width: 768px)': {
      fontSize: 20,
      marginLeft: '5%',
    },
  },
}));

export default useStyles;
