import Typography from '@mui/material/Typography'
import React from 'react'
import classes from './index.module.css'

function Hero({ children }) {
	return (
		<header>
			<section className={classes.heroHeader}>
				<Typography variant='h3' component='div' gutterBottom>
					Find the Best and most affordable
				</Typography>
				<Typography variant='h4' component='div' gutterBottom>
					Living Facilities
				</Typography>
				{children}
			</section>
		</header>
	)
}

export default Hero
