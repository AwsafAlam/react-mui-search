import React from 'react'
import { useParams } from 'react-router-dom'

function ListingDetails(props) {
	const { slug } = useParams()

	return (
		<div style={{ padding: 20 }}>
			<h2>Details View {slug}</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adip.</p>
		</div>
	)
}

export default ListingDetails
