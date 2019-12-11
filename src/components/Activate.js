import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth_activate, auth_activate_enable } from '../actions'

export default function FormDialog() {
    const dispatch = useDispatch()
    const [user, setUser] = useState('')

    const handleInput = (e) => {
        setUser(e.target.value)
    }

    const handleActivate = () => {
        dispatch(auth_activate(user))
    }

    const handleSetActivated = () => {
        dispatch(auth_activate_enable(user))
    }

    return (
        <div>
            <Dialog open aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Aktivácia</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="user_id"
                        label="Užívatelské číslo"
                        type="text"
                        fullWidth
                        onInput={handleInput}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSetActivated} color="primary" disabled={user.length<6}>
                        Preskočiť
                    </Button>
                    <Button onClick={handleActivate} color="primary" disabled={user.length<6}>
                        Aktivovať
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
