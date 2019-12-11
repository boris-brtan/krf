import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { user_donations, user_donation } from '../actions'
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'

export default function Donations() {
    const dispatch = useDispatch()
    const donations = useSelector((state) => state.donationsReducer)
    const token = useSelector((state) => state.authReducer.token)

    const loadDonation = (id) => {
        dispatch(user_donation(token, id))
    }

    if (donations.length === 0) {
        dispatch(user_donations(token))
    }

    return (
        <List>
            {donations.map((item) => (
                <React.Fragment key={item.Id} >
                    <ListItem button onClick={() => loadDonation(item.Id)}>
                        <ListItemText>
                            {item.Pracovisko}
                        </ListItemText>
                        <ListItemText>
                            {new Date(item.DatumOdberu).toLocaleDateString()}
                        </ListItemText>
                        <ListItemText>
                            {item.TypOdberu}
                            <br />
                            {item.MnozstvoMl} ml
                        </ListItemText>
                    </ListItem>
                    <Divider variant="middle" component="li" />
                </React.Fragment>
            ))}
        </List>
    )
}
