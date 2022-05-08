import { getReq, postReq } from '@/api/axiosLib'

export const getAllListings = async () => {
	try {
		const res = await getReq('/listings')
		return res.data
	} catch (err) {
		console.log(err)
		return { error: true, err }
	}
}

export const getListingBySlug = async slug => {
	try {
		const res = await getReq('/listings/', slug)
		return res.data
	} catch (err) {
		console.log(err)
		return { error: true, err }
	}
}

export const searchListing = async data => {
	try {
		const res = await postReq('/listings/search', data)
		return res.data
	} catch (err) {
		console.log(err)
		return { error: true, err }
	}
}
