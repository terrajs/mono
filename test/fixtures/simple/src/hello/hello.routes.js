const { HttpError, imperium } = require('../../../../../')

module.exports = [
	{
		method: 'GET',
		path: '/hello',
		can: { action: 'seeUser', user: ':userId' },
		handler(req, res) {
			console.log(imperium.roles)
			Object.keys(imperium.roles).forEach((roleName) => {
				const actions = imperium.roles[roleName].actions
				console.log(roleName, actions)
			})
			res.json(imperium.roles)
			// res.json({ foo: 'bar' })
		}
	},
	{
		method: 'get',
		path: '/hello-error',
		handler() {
			throw new HttpError('hello-error')
		}
	}
]