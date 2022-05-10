import { getReq, postReq } from '@/api/axiosLib'

export const getUserDetails = async () => {
	try {
		const res = await getReq('/v1/users/me')
		return res.data
	} catch (err) {
		console.log(err)
		return { error: true, err }
	}
}

export const login = async data => {
	try {
		const res = await postReq('/v1/users/login', data)
		return res.data
	} catch (err) {
		console.log(err)
		return { error: true, err }
	}
}

export const register = async data => {
	try {
		const res = await postReq('/v1/users/register', data)
		return res.data
	} catch (err) {
		console.log(err)
		return { error: true, err }
	}
}
