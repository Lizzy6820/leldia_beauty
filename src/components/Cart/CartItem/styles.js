import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
    fontWeight: '2000',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '1000',
  },
}));