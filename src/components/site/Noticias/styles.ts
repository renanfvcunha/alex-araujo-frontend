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
  sectionTitle: {
    color: theme.palette.primary.main,
    marginBottom: 0,
    fontSize: 48,
    fontWeight: 900,
    '@media (max-width: 768px)': {
      marginLeft: '5%',
    },
  },
  noticesContainer: {
    marginTop: '3rem',
    display: 'flex',
    overflowY: 'auto',
    listStyle: 'none',
    paddingLeft: 0,
    '@media (max-width: 768px)': {
      marginLeft: '5%',
    },
  },
  notice: {
    minWidth: 500,
    minHeight: 200,
    display: 'flex',
    marginBottom: '1rem',
  },
  noticePicture: {
    width: 200,
    height: 200,
    borderRadius: 32,
  },
  noticeTitle: {
    marginLeft: '1.5rem',
    '& h1': {
      color: '#434343',
      fontSize: 24,
      display: '-webkit-box',
      lineClamp: 2,
      boxOrient: 'vertical',
      overflow: 'hidden',
    },
    '& h2': {
      color: '#5e5e5e',
      fontSize: 20,
      fontWeight: '500',
      display: '-webkit-box',
      lineClamp: 3,
      boxOrient: 'vertical',
      overflow: 'hidden',
    },
  },
}));

export default useStyles;
