import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import BaseLayout from '@/layouts/BaseLayout'
import Listing from '@/pages/Listing'
import ListingDetails from '@/pages/ListingDetails'

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

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<BaseLayout />}>
					<Route path='/' element={<Listing />} />
					<Route path=':slug' element={<ListingDetails />} />
				</Route>
				<Route path='*' element={<Navigate to='/listing' replace />} />
			</Routes>
		</div>
	)
}

export default App
