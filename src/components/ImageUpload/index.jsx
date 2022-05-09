import React, { useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'
import { useState } from 'react'
import { handleImageUpload } from '@/api/services/imageupload'
// import Input from '@mui/material/Input'
// import TextField from '@mui/material/TextField'

export default function FormDialog({ open, setOpen, listingId }) {
	const [images, setImages] = useState()
	const [uploading, setUploading] = useState(false)
	const [preview, setPreview] = useState()

	// create a preview as a side effect, whenever selected file is changed
	useEffect(() => {
		if (!images) {
			setPreview(undefined)
			return
		}
		const previews = []
		for (let i = 0; i < images.length; i++) {
			const element = images[i]
			const objectUrl = URL.createObjectURL(element)
			previews.push(objectUrl)
		}
		setPreview(previews)

		// free memory when ever this component is unmounted
		return () => previews.map(url => URL.revokeObjectURL(url))
	}, [images])

	const handleClose = () => {
		setOpen(false)
	}

	const handleSave = async () => {
		if (images && images.length > 0) {
			setUploading(true)
			const res = await handleImageUpload(listingId, images)
			console.log(res)
			if (!res.error) {
				setOpen(false)
				setImages(undefined)
				setPreview(undefined)
				window.location.reload()
			}
			setUploading(false)
		}
	}

	const handleChange = e => {
		if (!e.target.files || e.target.files.length === 0) {
			setImages(undefined)
			return
		}
		setImages(e.target.files)
	}

	console.log(images)
	return (
		<div>
			<Dialog open={open} handleClose={() => setOpen(false)}>
				{uploading ? <LinearProgress /> : null}
				<DialogTitle>Upload Images</DialogTitle>
				<DialogContent>
					<DialogContentText>Uploaded images will be shown in the website</DialogContentText>
					<Button sx={{ mt: 2.5 }} variant='outlined' component='label'>
						Upload File
						<input
							type='file'
							name='images'
							multiple
							id='input-images'
							hidden
							onChange={handleChange}
						/>
					</Button>
					<div style={{ display: 'flex' }}>
						{images && preview && images.length > 0 && preview.length > 0
							? preview.map((image, i) => (
									<img
										style={{ margin: 5 }}
										width={120}
										key={i}
										src={image}
										alt={`${image}-${i}`}
									/>
							  ))
							: null}
					</div>
				</DialogContent>
				<DialogActions>
					<Button disabled={uploading} onClick={handleClose}>
						Cancel
					</Button>
					<Button disabled={uploading || !images} onClick={handleSave}>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
