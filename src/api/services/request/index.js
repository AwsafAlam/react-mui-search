import { postReq } from '@/api/axiosLib'

export const addRequest = async data => {
	try {
		const res = await postReq('/v1/requests', data)
		return res.data
	} catch (err) {
		console.log(err)
		return { error: true, err }
	}
}
