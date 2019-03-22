import db from '../db/db'
var testpost = async (ctx, next) => {
	let list = await db.getInfoList()
	console.log(list)
	ctx.response.body = {
		code: '0000',
		data: list,
		message: 'ok'
	};
	console.log(2)
} 
module.exports = {
	'POST /testpost': testpost
};