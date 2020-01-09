import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles, createStyles } from '@material-ui/styles'
import { CardHeader, Avatar, Card, CardContent, Typography, List, ListItem, ListItemText, Divider, IconButton, Dialog } from '@material-ui/core'
import CreditCard from '@material-ui/icons/CreditCard'
import jsbarcode from 'jsbarcode'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: theme.spacing(2),
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
        barcode: {
            marginTop: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
    })
)

export default function User() {
    const classes = useStyles()
    const user = useSelector((state) => state.userReducer)
    const userID = useSelector((state) => state.authReducer.user)

    const [barcodeOpen, setBarcodeOpen] = useState(false)

    useEffect(() => {
        setTimeout(() => {

        }, 1000)
    }, [userID])

    const handleToggleBarcode = () => {
        setBarcodeOpen(!barcodeOpen)
        if (!barcodeOpen) setTimeout(() => jsbarcode('.barcode', userID, { width: 3, format: 'code128' }), 200) //TODO: find better implementation https://lindell.me/JsBarcode/
    }

    return (
        <div className={classes.root}>
            <Dialog open={barcodeOpen} onClose={handleToggleBarcode}>
                <svg className="barcode" />
            </Dialog>
            <Card className={classes.card}>
                <CardHeader
                    className={classes.cardHeader}
                    title={<Typography variant="body1">{user.Meno}</Typography>}
                    subheader={<>{user.KrvnaSkupina + ' ' + user.FenotypAsString}<br />{user.Poistovna}</>}
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            {user.Meno[0]}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="barcode" className={classes.barcode} onClick={handleToggleBarcode}>
                            <CreditCard fontSize="large" />
                        </IconButton>
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
