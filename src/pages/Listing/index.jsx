import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem, Select, Typography, TextField } from '@mui/material'

const BlogPosts = {
	1: {
		title: 'First Blog Post',
		description: 'Lorem ipsum dolor sit amet, consectetur adip.'
	},
	2: {
		title: 'Second Blog Post',
		description: 'Hello React Router v6'
	}
}

function Listing(props) {
	const [criteria, setCriteria] = useState('1')
	const [searchItem, setSearchItem] = useState('')

	return (
		<div style={{ padding: 20 }}>
			{/* Hero section */}
			<div className='main-content'>
				<Select displayEmpty onChange={e => setCriteria(e.target.value)} defaultValue={criteria}>
					<MenuItem disabled value=''>
						<em>Search By</em>
					</MenuItem>
					<MenuItem value={1}>First Name</MenuItem>
					<MenuItem value={2}>Last Name</MenuItem>
					<MenuItem value={3}>Phone Number</MenuItem>
					<MenuItem value={4}>Email</MenuItem>
				</Select>
				<br />
				<br />
				<TextField
					id='search'
					label='Search'
					value={searchItem}
					onChange={value => {
						setSearchItem(value)
					}}
					style={{
						margin: '0 auto',
						maxWidth: 800
					}}
				/>
			</div>
			<Typography>Lorem ipsum dolor sit amet, consectetur adip.</Typography>
			<ul>
				{Object.entries(BlogPosts).map(([slug, { title }]) => (
					<li key={slug}>
						<Link to={`/${slug}`}>
							<h3>{title}</h3>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Listing
