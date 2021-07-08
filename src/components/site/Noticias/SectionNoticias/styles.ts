import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
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
    textDecoration: 'none',
    '& :hover': {
      '& h1': {
        color: theme.palette.primary.main,
        transition: 'all ease 0.2s',
      },
      '& span': {
        color: '#000',
        transition: 'all ease 0.2s',
      },
    },
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
    '& span': {
      color: grey[800],
    },
    '& small': {
      color: '#000',
    },
    '@media (max-width: 768px)': {
      marginLeft: 0,
      marginTop: '0.5rem',
    },
  },
  pagination: {
    display: 'flex',
    listStyle: 'none',
    height: 40,
    border: '1px solid black',
    borderRadius: 5,
    width: 'fit-content',
    alignItems: 'center',
    padding: 0,
    marginTop: 40,
  },
  pageLink: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    padding: '0 10px',
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
  activeLink: {
    fontWeight: 'bold',
    pointerEvents: 'none',
  },
  previousLink: {
    marginLeft: '1rem',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
  nextLink: {
    marginRight: '1rem',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
}));

export default useStyles;
