import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
	}
}

export default function StackedImageList() {
	return (
		<ImageList
			sx={{
				m: 0,
				gridAutoFlow: 'column',
				gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr)) !important',
				gridAutoColumns: 'minmax(160px, 1fr)'
			}}>
			{itemData.map(item => (
				<ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
					<img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading='lazy' />
				</ImageListItem>
			))}
		</ImageList>
	)
}

const itemData = [
	{
		img: 'https://dsycmkw0fbubc.cloudfront.net/default/home_second.svg',
		title: 'Home second',
		rows: 2,
		cols: 4
	},
	{
		img: 'https://dsycmkw0fbubc.cloudfront.net/default/home_third.svg',
		title: 'Home third'
	},
	{
		img: 'https://dsycmkw0fbubc.cloudfront.net/default/home_first.svg',
		title: 'Home first',
		rows: 2,
		cols: 2
	},
	{
		img: 'https://dsycmkw0fbubc.cloudfront.net/default/home_fourth.svg',
		title: 'Home Forth'
	},
	{
		img: 'https://dsycmkw0fbubc.cloudfront.net/default/home_fourth.svg',
		title: 'Home Forth'
	}
]
