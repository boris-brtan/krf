import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth_login } from '../actions'
import sha256 from 'sha256'

export default function FormDialog() {
    const [pass, setPass] = useState('')
    const dispatch = useDispatch()

    const handleInput = (e) => {
        setPass(e.target.value)
    }

    const user = useSelector((state) => state.authReducer.user)
    const pin = useSelector((state) => state.authReducer.pass)

    if (pin !== null) {
        dispatch(auth_login(user, pin))
    }

    const handleActivate = () => {
        dispatch(auth_login(user, sha256(pass)))
    }

    return (
        <div>
            <Dialog open aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Prihlásenie</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="pass"
                        label="Pin"
                        type="password"
                        fullWidth
                        onInput={handleInput}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleActivate} color="primary" disabled={pass.length !== 4}>
                        Prihlásiť sa
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
