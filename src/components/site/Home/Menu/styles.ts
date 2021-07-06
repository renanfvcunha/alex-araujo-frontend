import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    '@media (min-width: 769px)': {
      display: 'none',
    },
  },
  menuItemMb: {
    color: '#000',
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 500,
  },
  container: {
    width: '100%',
    maxWidth: 1140,
    height: 50,
    display: 'flex',
    alignItems: 'center',
  },
  menu: {
    width: '100%',
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 768px)': {
      display: 'none',
    },
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
  posRelative: {
    position: 'relative',
  },
  imgButtons: {
    position: 'absolute',
    bottom: -20,
    right: '22.5%',
    display: 'flex',
    textDecoration: 'none',
  },
  btnWApp: {
    width: 70,
    height: 40,
    background: 'linear-gradient(to right, #32ba46, #5ddf6e)',
    borderRadius: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnGetPrice: {
    width: 175,
    height: 40,
    backgroundColor: '#fdfdfd',
    borderRadius: 24,
    marginLeft: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& span': {
      color: '#949494',
      fontSize: 18,
      fontWeight: 900,
    },
  },
}));

export default useStyles;
