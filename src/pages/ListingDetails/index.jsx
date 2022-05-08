import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
// import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
import { getListingBySlug } from '@/api/services/listing'
import StackedImageList from '@/components/ImageList'
import Map from '@/components/Map'
import FormDialog from '@/components/ImageUpload'
import { Chip, Divider, Button, Typography } from '@mui/material'
import Call from '@mui/icons-material/Call'
import MapOutlined from '@mui/icons-material/MapOutlined'

function ListingDetails() {
	const { slug } = useParams()
	const [listing, setListing] = useState()
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	useEffect(() => {
		async function fetchListingData() {
			if (slug && slug !== '') {
				const data = await getListingBySlug(slug)
				if (!data.error) {
					console.log(data)
					setListing(data)
				} else {
					console.log(data)
					//Navigate to home
				}
			}
		}
		fetchListingData()
	}, [])

	return (
		<div>
			<FormDialog open={open} setOpen={setOpen} />
			<StackedImageList />
			<Grid sx={{ padding: 10 }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={6}>
					{listing && (
						<div>
							<Typography variant='h6' mb={2}>
								{listing.name}
							</Typography>
							<div style={{ display: 'flex' }}>
								<Call />
								<Typography ml='10px'>{listing.phone}</Typography>
							</div>
							<div style={{ display: 'flex', marginTop: 10 }}>
								<MapOutlined />
								<Typography ml='10px'>{listing.address}</Typography>
							</div>
							<Typography ml='35px'>{`${listing.city}, ${listing.state}`}</Typography>
							<Chip sx={{ mt: 1.5 }} label={listing.type} />
							<Divider sx={{ m: 2 }} />
							<Typography ml='10px'>{`Zip Code:  ${listing.zipCode}`}</Typography>
							<Typography ml='10px'>{`Capacity:  ${listing.capacity}`}</Typography>
							<Button sx={{ m: 2 }} variant='contained' onClick={handleClickOpen}>
								Edit
							</Button>
						</div>
					)}
				</Grid>
				<Grid item xs={6}>
					<Map />
				</Grid>
			</Grid>
		</div>
	)
}

// <Card sx={{ display: 'flex' }}>
// 	<CardMedia
// 		component='img'
// 		sx={{ width: 151 }}
// 		image='/static/images/cards/live-from-space.jpg'
// 		alt='Live from space album cover'
// 	/>
// 	<Box sx={{ display: 'flex', flexDirection: 'column' }}>
// 		<CardContent sx={{ flex: '1 0 auto' }}>
// 			<Typography component='div' variant='h5'>
// 				Live From Space
// 			</Typography>
// 			<Typography variant='subtitle1' color='text.secondary' component='div'>
// 				Mac Miller
// 			</Typography>
// 		</CardContent>
// 		<Button>View Details</Button>
// 	</Box>
// </Card>
export default ListingDetails
