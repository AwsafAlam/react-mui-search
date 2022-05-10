import * as React from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
// import IconButton from '@mui/material/IconButton'
// import CloseIcon from '@mui/icons-material/Close'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export default function CustomSnackbar({ open, setOpen, type, children }) {
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	const action = (
		<React.Fragment>
			<Button
				variant='contained'
				sx={{ background: 'white', color: '#4f4e62' }}
				size='small'
				onClick={handleClose}>
				Request
			</Button>
			{/* <IconButton size='small' aria-label='close' color='inherit' onClick={handleClose}>
				<CloseIcon fontSize='small' />
			</IconButton> */}
		</React.Fragment>
	)

	return (
		<Snackbar
			open={open}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			autoHideDuration={6000}
			onClose={handleClose}
			action={action}>
			<Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
				{children}
			</Alert>
		</Snackbar>
	)
}
