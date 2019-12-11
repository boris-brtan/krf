import React, { useState } from 'react'
import clsx from 'clsx'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import {
    AppBar, Divider, Drawer, IconButton, List, ListItem,
    ListItemIcon, ListItemText, Toolbar, Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import DarkThemeIcon from '@material-ui/icons/Brightness4'
import LightThemeIcon from '@material-ui/icons/Brightness7'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { push } from 'react-router-redux'
import { useTheme } from '@material-ui/styles'
import { auth_clear } from './actions'

const drawerWidth = 240
const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            paddingTop: theme.spacing(1),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: 0,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: drawerWidth,
        },
        paletteMode: {
            position: 'absolute',
            left: 0,
        }
    }),
)

export default function Menu(props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const theme = useTheme()

    const [open, setOpen] = useState(false)

    const { togglePalleteMode } = props
    const toggleDrawer = () => {
        setOpen(!open)
    }
    const handleMenuItem = (idx) => dispatch(push(['/user', '/'][idx]))
    const handleDrawerTransition = () => {
        window.dispatchEvent(new Event('resize'))
    }
    const handleAuthClear = () => dispatch(auth_clear())

    return (<>
        <AppBar position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" edge="start"
                    onClick={toggleDrawer} className={clsx(classes.menuButton, open && classes.hide)}
                ><MenuIcon /></IconButton>
                <Typography variant="h6" noWrap>Slovenské darovanie krvi</Typography>
            </Toolbar>
        </AppBar>
        <Drawer variant="persistent" anchor="left" open={open}
            classes={{
                paper: classes.drawerPaper,
            }}
            onTransitionEnd={handleDrawerTransition}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={togglePalleteMode} className={classes.paletteMode}>
                    {theme.palette.type === 'dark' ? <LightThemeIcon /> : <DarkThemeIcon />}
                </IconButton>
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {['Darca', 'Výsledky'].map((text, idx) => (
                    <ListItem button key={text} onClick={() => handleMenuItem(idx)}>
                        <ListItemIcon><MenuIcon /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {[{ text: 'Odhlásiť sa', handler: handleAuthClear }].map(({ text, handler }) => (
                    <ListItem button key={text} onClick={handler}>
                        <ListItemIcon><MenuIcon /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            {props.children}
        </main>
    </>)
}

Menu.propTypes = {
    children: PropTypes.any,
    togglePalleteMode: PropTypes.func,
}
