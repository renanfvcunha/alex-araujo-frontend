import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100vw',
    height: 130,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    maxWidth: 1140,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& h2': {
      fontSize: 14,
      fontWeight: 500,
      color: '#fff',
    },
    '@media (max-width: 768px)': {
      marginLeft: '5%',
    },
  },
}));

export default useStyles;
