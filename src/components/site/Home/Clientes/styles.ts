import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100vw',
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
  clientLogo: {
    width: '100%',
    maxWidth: 200,
    height: 'auto',
    marginTop: '1rem',
  },
  clientLogoText: {
    fontSize: 18,
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
