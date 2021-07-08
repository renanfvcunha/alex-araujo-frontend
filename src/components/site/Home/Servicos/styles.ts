import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100vw',
    minHeight: 500,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ececec',
  },
  container: {
    width: '100%',
    maxWidth: 1140,
    height: '100%',
  },
  sectionTitle: {
    color: theme.palette.primary.main,
    marginBottom: 0,
    fontSize: 48,
    fontWeight: 900,
    '@media (max-width: 768px)': {
      marginLeft: '5%',
      fontSize: 36,
    },
  },
  servicesContainer: {
    marginTop: '3rem',
    display: 'flex',
    overflowY: 'auto',
    listStyle: 'none',
    paddingLeft: 0,
    '@media (max-width: 768px)': {
      marginLeft: '5%',
    },
  },
  service: {
    minWidth: 200,
    minHeight: 200,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 32,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    marginRight: '2rem',
    padding: 8,

    '@media (max-width: 768px)': {
      minWidth: 'unset',
      minHeight: 'unset',
    },
  },
  icon: {
    width: 72,
    height: 72,
    color: '#fff',
    marginBottom: '1rem',

    '@media (max-width: 768px)': {
      width: 48,
      height: 48,
    },
  },
  text: {
    fontSize: 28,
    fontWeight: 500,
    color: '#fff',
    textAlign: 'center',
    lineHeight: '2rem',

    '@media (max-width: 768px)': {
      fontSize: 18,
    },
  },
}));

export default useStyles;
