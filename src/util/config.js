const config = {
	BASE_API_URL:
		process.env.DEPLOYMENT == 'prod'
			? process.env.REACT_APP_API_URL || 'https://search.awsafdev.info'
			: process.env.REACT_APP_API_URL || 'http://localhost:1111',
	ENV: process.env.NODE_ENV,
	APP_URL: process.env.REACT_APP_HOME
}

export default config
