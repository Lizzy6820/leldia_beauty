import { makeStyles, fade} from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    
 },
  title: {
    //flexGrow: 2,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    width:"80%",
    
  },
  image: {
    marginRight: '5px',
    objectFit: 'contain',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },

 
}));