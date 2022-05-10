import config from '@/util/config'
import axios from 'axios'

export const handleImageUpload = async (id, files) => {
	try {
		var formData = new FormData()
		formData.append('id', id)

		for (let i = 0; i < files.length; i++) {
			const file = files[i]
			formData.append('images', file, file.name)
		}
		// formData.append('file', file);
		// formData.append('fileName', data.fileName);
		// formData.append('fileType', data.fileType);

		const res = await axios.put(config.BASE_API_URL + '/v1/listings/images', formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})

		return res.data
	} catch (err) {
		console.log('error', err)
		return { error: true, err: err }
	}
}
