export default [
	{
		method: 'GET',
		path: '/test',
		handler(req, res) {
			res.json({ test: true })
		}
	}
]
