import { makeStyles } from '@material-ui/core/styles';

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
    display: 'flex',
    flexDirection: 'column',
  },
  welcome: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  welcomeTxt: {
    color: theme.palette.primary.main,
    fontSize: 32,
    '@media (max-width: 768px)': {
      fontSize: 24,
    },
  },
  exitBtn: {
    width: 48,
    height: 48,
    marginLeft: '1rem',
  },
  logo: {
    width: '100%',
    maxWidth: 200,
    height: 'auto',
    alignSelf: 'center',
  },
  files: {
    '& > h2': {
      fontSize: 28,
      marginBottom: '1rem',
      '@media (max-width: 768px)': {
        fontSize: 22,
      },
    },
    '& > ul': {
      marginTop: 0,
      '@media (max-width: 768px)': {
        padding: 0,
      },
    },
    '& > ul > li': {
      '@media (max-width: 768px)': {
        display: 'flex',
        flexDirection: 'column',
        '& span': {
          fontSize: 20,
        },
        '& a': {
          fontSize: 20,
          marginBottom: '1rem',
        },
      },
    },
  },
  fileType: {
    fontSize: 24,
    fontWeight: 500,
    color: theme.palette.secondary.main,
    marginRight: '1rem',
  },
  file: {
    fontSize: 24,
  },
}));

export default useStyles;
