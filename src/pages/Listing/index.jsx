import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { searchListing } from '@/api/services/listing'
import useDebounce from '@/hooks/useDebounce'
import ListingItem from '@/components/ListingItem'
import Hero from '@/components/Hero'
import classes from './index.module.css'
import states from '@/api/data/states'
import { Box, FormControl, InputLabel, LinearProgress, Select } from '@mui/material'
import { getCitiesByState } from '@/api/services/cities'
import CustomSnackbar from '@/components/CustomSnackbar'
import { addRequest } from '@/api/services/request'

const initialState = { name: '', state_code: '' }

function Listing() {
	const [searchItem, setSearchItem] = useState(undefined)
	const [results, setResults] = useState([])
	const [isSearching, setIsSearching] = useState(false)
	const [open, setOpen] = useState(false)
	const [loadingCity, setloadingCity] = useState(false)
	const debouncedSearchItem = useDebounce(searchItem, 700)
	const [state, setState] = useState(initialState)
	const [city, setCity] = useState('')
	const [cities, setCities] = useState([])

	const handleChange = event => {
		if (event.target.name === 'state') {
			setState(event.target.value)
			setCities([])
			setCity('')
		} else if (event.target.name === 'city') {
			setCity(event.target.value)
		}
	}

	useEffect(() => {
		async function fetchData() {
			if (
				(debouncedSearchItem && searchItem.length > 2) ||
				city !== '' ||
				state.state_code !== ''
			) {
				setIsSearching(true)
				const res = await searchListing({ name: searchItem, city, state: state.state_code })
				if (!res.error) {
					// console.log(res)
					if (res.length === 0) setOpen(true)

					setResults(res)
					setIsSearching(false)
				}
			} else {
				setResults([])
				setIsSearching(false)
			}
		}
		fetchData()
	}, [debouncedSearchItem, city, state])

	useEffect(() => {
		async function fetchCities() {
			if (state.name !== '') {
				setloadingCity(true)
				const res = await getCitiesByState(state.name)
				if (!res.error) {
					// console.log(res.data)
					setCities(res.data)
				}
			}
			setloadingCity(false)
		}
		fetchCities()
	}, [state])

	const handleRequest = async () => {
		const req = await addRequest({
			name: searchItem,
			state: state.state_code,
			city: city.toUpperCase()
		})
		if (!req.error) {
			console.log(req)
		}
		setOpen(false)
	}
	const isRequestValid =
		state.state_code !== '' &&
		(city || searchItem) &&
		(city !== '' || searchItem || searchItem !== '')

	return (
		<div>
			<CustomSnackbar open={open} setOpen={setOpen} type='error'>
				Could not find any valid listings.
				{isRequestValid && (
					<>
						Leave a request and we will search for it soon.
						<br />
						<br />
						<Button
							variant='contained'
							sx={{ background: 'white', color: '#4f4e62' }}
							size='small'
							onClick={handleRequest}>
							Request
						</Button>
					</>
				)}
			</CustomSnackbar>
			<Hero imgSrc='/static/images/hero.jpeg'>
				<section className={classes.mainContent}>
					{isSearching || loadingCity ? (
						<Box sx={{ width: '80%', marginLeft: '10%' }}>
							<LinearProgress />
						</Box>
					) : null}
					<TextField
						fullWidth
						id='search'
						label='Search'
						disabled={loadingCity || isSearching}
						value={searchItem}
						onChange={e => {
							setSearchItem(e.target.value)
						}}
						style={{
							margin: '20px auto',
							maxWidth: '90%'
						}}
					/>
					<div>
						<FormControl sx={{ m: 1, maxWidth: 360, width: '44%' }}>
							<InputLabel id='simple-select-label'>State</InputLabel>
							<Select
								fullWidth
								labelId='simple-select'
								id='state'
								name='state'
								value={state}
								label='State'
								onChange={handleChange}>
								<MenuItem value={initialState}>
									<em>All</em>
								</MenuItem>
								{states.map(option => (
									<MenuItem key={option.state_code} value={option}>
										{option.name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<FormControl sx={{ m: 1, maxWidth: 360, width: '44%' }}>
							<InputLabel id='simple-select-label'>City</InputLabel>
							<Select
								fullWidth
								labelId='simple-select'
								id='city'
								name='city'
								disabled={loadingCity || isSearching || state.state_code === ''}
								value={city}
								label='City'
								onChange={handleChange}>
								<MenuItem value=''>
									<em>None</em>
								</MenuItem>
								{cities.map((option, i) => (
									<MenuItem key={i} value={option}>
										{option}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
				</section>
			</Hero>
			{isSearching && <div>Searching ...</div>}
			{results.map(result => (
				<ListingItem
					key={result.id}
					name={result.name}
					address={result.address}
					slug={result.slug}
				/>
			))}
		</div>
	)
}

export default Listing
