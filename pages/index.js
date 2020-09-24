import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const NavBar = styled(AppBar)`
  && {
    background-color: ${({ theme }) => theme.colors.primary};
    box-shadow: none;
    height: 5rem;
  }
`;

const MenuIconBtn = styled(IconButton)`
  && {
    margin-right: 1rem;
  }
`;

const NavBarWrapper = styled(Toolbar)`
  && {
    display: flex;
    align-items: center;
    min-height: 100%;
  }
`;

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar position="static">
        <NavBarWrapper>
          <MenuIconBtn edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </MenuIconBtn>
          <Typography style={{ flex: 1 }} variant="h6">
            Home
          </Typography>
          <Button color="inherit">Login</Button>
        </NavBarWrapper>
      </NavBar>
    </div>
  );
}
