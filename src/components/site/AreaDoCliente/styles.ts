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
    '@media (max-width: 1140px)': {
      margin: '0 5%',
    },
    height: '100%',
  },
  sectionTitle: {
    color: '#fff',
    marginBottom: 0,
    fontSize: 48,
    fontWeight: 900,
  },
  divider: {
    display: 'flex',
    marginTop: '1rem',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
  },
  services: {
    flex: 2,
    backgroundColor: '#fff',
    borderRadius: 24,
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 967px)': {
      flex: 3,
    },
    '@media (max-width: 768px)': {
      flex: 1,
      justifyContent: 'center',
      marginBottom: '1rem',
    },
  },
  servicesList: {
    listStyle: 'none',
    '& li > span': {
      color: 'rgba(0, 0, 0, 0.7)',
      fontSize: 18,
    },
  },
  hr: {
    width: '50%',
    marginLeft: 0,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  auth: {
    flex: 5,
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width: 967px)': {
      flex: 6,
    },
    '@media (max-width: 768px)': {
      flex: 1,
    },
  },
  authBox: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      width: '100%',
      minHeight: 300,
      marginBottom: '1rem',
    },
  },
  authArea: {
    backgroundColor: '#f0f0f0',
    borderRadius: 24,
    width: '75%',
    height: '75%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 768px)': {
      width: '100%',
      height: '100%',
    },
  },
  authForm: {
    display: 'flex',
    flexDirection: 'column',
    height: '50%',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
