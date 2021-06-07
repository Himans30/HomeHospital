import { AppBar, Avatar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import app_config from '../config';
import clsx from "clsx";
import { UserContext } from "../providers/userContext";

const Header = props => {

    const open = props.open;
    const drawerWidth = props.drawerWidth;
    const handleDrawerOpen = props.handleDrawerOpen;
    const userService = useContext(UserContext);
    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const history = useHistory();
    const url = app_config.api_url + '/';


    const useStyles = makeStyles((theme) => ({
        appBar: {
            position: 'relative',
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.shortest,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.shortest,
            }),
        },
        root: {
            flexGrow: 1,
            display: 'flex',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        link: {
            color: 'white',
            textDecoration: 'none'
        }

    }));


    const handleLogout = (e) => {
        sessionStorage.removeItem("user");
        userService.setLoggedin(false);
        userService.setCurrentUser(null);
        history.push("/app/login");
    };

    const classes = useStyles();

    const showMenuButton = () => {
        if (props.drawer & !open) {
            return (
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
            )
        }
    }


    const renderLoggedIn = () => {
        // let user = userService.currentUser;
        if (currentUser) {
            const dashLink = currentUser.isadmin ? 'admin' : 'user';
            return (
                <div className={classes.root}>
                    <Link to={`/${dashLink}/dashboard`} className={classes.link}>
                        <Avatar src={url + currentUser.avatar} />
                    </Link>
                    <Link to="/main/login" className={classes.link}>
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
            </Button>
                    </Link>


                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/app/login" className={classes.link}>
                        <Button color="inherit">Login</Button>
                    </Link>

                    <Link to="/app/register" className={classes.link}>
                        <Button color="inherit">Register</Button>
                    </Link>
                </div>
            )
        }

    }

    return (
        <AppBar
            position="sticky"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}>
            <Toolbar>
                {showMenuButton()}
                <Typography variant="h6" className={classes.title}>
                    {/* {app_config.projectTitle} */}
                    <Link to="/home" className={classes.link}>
                    <Button color="inherit">{app_config.projectTitle}</Button>
                </Link>
                </Typography>
                <Link to="/app/listequipments" className={classes.link}>
                    <Button color="inherit">Equipments</Button>
                </Link>

                <Link to="/app/liststaff" className={classes.link}>
                    <Button color="inherit">Services</Button>
                </Link>
                {renderLoggedIn()}

            </Toolbar>
        </AppBar>
    )
}


export default Header;