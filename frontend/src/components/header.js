import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import app_config from '../config';
import clsx from "clsx";
import { UserContext } from "../providers/userContext";

const Header = props => {

    const open = props.open;
    const drawerWidth = props.drawerWidth;
    const handleDrawerOpen = props.handleDrawerOpen;
    const userService = useContext(UserContext);


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
        let user = userService.currentUser;
        console.log(user);
        if (user) {

            return (
                <div>
                    <Link to="/admin/dashboard" className={classes.link}>
                        <Button color="inherit">Dashboard</Button>
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
                    {app_config.projectTitle}
                </Typography>
                {renderLoggedIn()}

            </Toolbar>
        </AppBar>
    )
}


export default Header;