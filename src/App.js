import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { user_card, user_home, settings_params } from './actions'
import Activate from './components/Activate'
import Donation from './components/Donation'
import Donations from './components/Donations'
import Login from './components/Login'
import User from './components/User'
import Menu from './Menu'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'

export default function App() {
    const dispatch = useDispatch()
    const [paletteMode, setPaletteMode] = useState(0)

    const theme = responsiveFontSizes(
        createMuiTheme({
            palette: {
                type: ['dark', 'light'][paletteMode],
                primary: {
                    main: '#c62828',
                },
                secondary: {
                    main: '#1976d2',
                },
            },
        })
    )

    const togglePalleteMode = () => {
        setPaletteMode((paletteMode + 1) % 2)
    }

    const openAuthActivate = useSelector((state) => state.authReducer.user === null || !state.authReducer.activated)
    const openAuthLogin = useSelector((state) => state.authReducer.token === null)

    const user = useSelector((state) => state.userReducer)
    const settingsParams = useSelector((state) => state.settingsReducer.params)
    const token = useSelector((state) => state.authReducer.token)

    if (openAuthActivate) {
        return <Activate />
    } else if (openAuthLogin) {
        return <Login />
    }

    if (user.Meno === null) {
        dispatch(user_home(token))
        dispatch(user_card(token))
    }

    if (settingsParams.length === 0) {
        dispatch(settings_params(token))
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Menu togglePalleteMode={togglePalleteMode}>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Donations} />
                <Route exact path={process.env.PUBLIC_URL + '/user'} component={User} />
                <Route path={process.env.PUBLIC_URL + '/donation/:id'} component={Donation} />
            </Menu>
        </ThemeProvider>
    )
}
