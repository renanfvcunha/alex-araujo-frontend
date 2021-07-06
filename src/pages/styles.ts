import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  main: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  flex1: {
    flex: 1,
  },
}));

export default useStyles;
