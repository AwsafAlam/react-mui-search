import * as React from 'react'
// import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'

export default function FormDialog({ open, setOpen }) {
	const [image, setImage] = React.useState()
	const handleClose = () => {
		setOpen(false)
	}
	return (
		<div>
			<Dialog open={open} handleClose={() => setOpen(false)}>
				<DialogTitle>Upload Images</DialogTitle>
				<DialogContent>
					<DialogContentText>Uploaded images will be shown in the website</DialogContentText>
					{/* <TextField
						autoFocus
						margin='dense'
						id='name'
						label='Email Address'
						type='email'
						fullWidth
						variant='standard'
					/> */}
					<Input
						sx={{ py: 2 }}
						name='thumbUpload'
						disableUnderline
						inputProps={{ accept: 'image/*', multiple: true }}
						label='Upload File'
						type='file'
						onChange={e => {
							setImage(e.target.files[0])
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleClose}>Subscribe</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
