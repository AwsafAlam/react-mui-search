import axios from 'axios'
import config from '@/util/config'

const handleError = (err, cb) => {
	if (err.response && err.response.status) {
		if (err.response.status === 500) return cb({ msg: 'Server Error' }, null)
		if (err.response.status === 404) return cb({ msg: 'Data Not found' }, null)
		return cb(err.response.data, null)
	} else {
		cb({ msg: 'Unknown Error' }, null)
	}
}

export const postReqAuth = async (route, data, param, cb) => {
	const token = localStorage.getItem('jwtToken')
	if (token) {
		axios.defaults.headers.common['Authorization'] = token
		axios
			.post(config.BASE_API_URL + route + param, data)
			.then(res => {
				cb(null, res.data)
			})
			.catch(err => {
				handleError(err, cb)
			})
	} else {
		cb('Not authenticated', null)
	}
}

export const postReq = (route, data, param = '') =>
	axios.post(config.BASE_API_URL + route + param, data)

export const getReqAuth = (route, data, param, cb) => {
	const token = localStorage.getItem('jwtToken')
	if (token) {
		axios.defaults.headers.common['Authorization'] = token
		axios
			.get(config.BASE_API_URL + route + param, data)
			.then(res => {
				cb(null, res.data)
			})
			.catch(err => {
				handleError(err, cb)
			})
	} else {
		cb('Not authenticated', null)
	}
}

export const getReq = (route, param = '') => axios.get(config.BASE_API_URL + route + param)

export default handleError
