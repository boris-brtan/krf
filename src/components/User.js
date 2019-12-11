import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles, createStyles } from '@material-ui/styles'
import { CardHeader, Avatar, Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2)
        },
        card: {
            margin: 'auto',
            maxWidth: 700,
        },
        cardHeader: {
            paddingBottom: 0,
        },
        avatar: {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
        },
    })
)

export default function User() {
    const classes = useStyles()
    const user = useSelector((state) => state.userReducer)
    console.log(user)
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardHeader}
                    title={<Typography variant="body1">{user.Meno}</Typography>}
                    subheader={<>{user.KrvnaSkupina + ' ' + user.FenotypAsString}<br />{user.Poistovna}</>}
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            {user.Meno[0]}
                        </Avatar>
                    }>
                </CardHeader>
                <CardContent>
                    <Divider />
                    <List>
                        <ListItem >
                            <ListItemText
                                primary="Počet odberov"
                                secondary={user.PocetOdberov}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Nasledujúci odporúčaný odber"
                                secondary={new Date(user.TerminNasledOdberu).toLocaleDateString()}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Registrované pracovisko"
                                secondary={user.DomovskePracovisko}
                            />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </div>
    )
}
