import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
// import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function ListingDetails({ name, slug, address, image }) {
	return (
		<Link to={`/${slug}`}>
			<Card sx={{ display: 'flex', margin: 5, padding: 1 }}>
				<CardMedia
					component='img'
					sx={{ width: 151 }}
					image={image || 'https://dsycmkw0fbubc.cloudfront.net/default/home_second.svg'}
					alt='Live from space album cover'
				/>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography component='div' variant='h5'>
							{name}
						</Typography>
						<Typography variant='subtitle1' color='text.secondary' component='div'>
							{address}
						</Typography>
					</CardContent>
					<Button sx={{ ml: 2, width: 140, color: 'white' }} variant='contained' color='secondary'>
						View Details
					</Button>
				</Box>
			</Card>
		</Link>
	)
}

export default ListingDetails
