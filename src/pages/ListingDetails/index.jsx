import React from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
// import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

function ListingDetails() {
	const { slug } = useParams()

	return (
		<Card sx={{ display: 'flex' }}>
			<CardMedia
				component='img'
				sx={{ width: 151 }}
				image='/static/images/cards/live-from-space.jpg'
				alt='Live from space album cover'
			/>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography component='div' variant='h5'>
						Live From Space
					</Typography>
					<Typography variant='subtitle1' color='text.secondary' component='div'>
						Mac Miller
					</Typography>
				</CardContent>
				<Button>View Details</Button>
			</Box>
		</Card>
	)
}

export default ListingDetails
