import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: 1140,
    height: 50,
    display: 'flex',
    alignItems: 'center',
  },
  menu: {
    width: '75%',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
  },
  menuItem: {
    '& a': {
      color: '#000',
      textDecoration: 'none',
      fontSize: 18,
      fontWeight: 500,
      padding: 8,

      '&:hover': {
        color: '#fafafa',
        backgroundColor: '#a8a8a8',
        transition: 'all ease 0.2s',
        borderRadius: 4,
      },
    },
  },
  clientArea: {
    '& a': {
      backgroundColor: '#797979',
      color: '#fafafa',
      borderRadius: 4,
      padding: '18px 8px',

      '&:hover': {
        backgroundColor: '#a8a8a8',
      },
    },
  },
  menuDivider: {
    width: 2,
    backgroundColor: '#000',
    margin: '0 16px',
  },
}));

export default useStyles;
