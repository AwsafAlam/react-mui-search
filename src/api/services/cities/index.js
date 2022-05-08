import axios from 'axios'

export const getCitiesByState = async state => {
	try {
		const res = await axios.post('https://countriesnow.space/api/v0.1/countries/state/cities', {
			country: 'United States',
			state
		})
		return res.data
	} catch (err) {
		console.log(err)
		return { error: true, err }
	}
}
