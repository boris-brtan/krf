import React from 'react'

import { Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import Menu from './Menu'

function App() {
    const theme = useTheme()

    const styles = {
        primaryText: {
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(1, 2),
            color: theme.palette.text.primary,
        },
        primaryColor: {
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(1, 2),
            color: theme.palette.common.white,
        },
    }

    return (
        <Menu>
            <Typography style={styles.primaryColor}>{`Primary color ${styles.primaryColor.backgroundColor}`}</Typography>
            <Typography style={styles.primaryText}>{`Primary text ${styles.primaryText.color}`}</Typography>
        </Menu>
    )
}

export default App
