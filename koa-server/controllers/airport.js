// 机场运营平台首页
var testlist = async (ctx, next) => {
	console.log(ctx.request.body);
	let sum = 120, 
		pagenum = ctx.request.body.pageSize,
		arr = [], 
		arrCode = 'abcdefghijklmnopqrstuvwxyz'.split('');
	for(let i=0; i<pagenum; i++) {
		let obj = {};
		for(let i=0; i<arrCode.length; i++) {
			obj[arrCode[i]] = Math.random().toString().substring(3);
		}
		arr.push(obj);
	}
	 ctx.response.body = {
		 code: '0000',
		 data: {
		 	resultList: arr,
		 	total: sum
		 }
	 };
}

var testpost = async (ctx, next) => {
	console.log(ctx.request.body);
	 ctx.response.body = {
		 code: '0000',
		 data: {},
		 message: 'ok'
	 };
} 

var layout = async (ctx, next) => {
	console.log(ctx.request.body);
	 ctx.response.body = {
			"code": "0000",
			"msg": "成功",
			"data": {
					"ptSpeed": "861公里/小时",
					"planeAge": "8",
					"ptRange": "6336MILES(10,197KM)",
					"planeRegNum": "B6706",
					"planeMaxPsr": "246人",
					"ptEngine": "双吊翼涡轮",
					"deviceList": "1,2,3,6",
					"seatList": [
							{
									"Type": "C",
									"Column": [
											{
													"Position": "1",
													"Code": "A"
											},
											{
													"Position": "2",
													"Code": "C"
											},
											{
													"Position": "3"
											},
											{
													"Position": "4"
											},
											{
													"Position": "5",
													"Code": "D"
											},
											{
													"Position": "6",
													"Code": "E"
											},
											{
													"Position": "7",
													"Code": "F"
											},
											{
													"Position": "8",
													"Code": "G"
											},
											{
													"Position": "9"
											},
											{
													"Position": "10"
											},
											{
													"Position": "11",
													"Code": "H"
											},
											{
													"Position": "12",
													"Code": "K"
											}
									],
									"Row": [
											{
													"Number": "11",
													"Block": [
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Type": "Aisle"
															}
													]
											},
											{
													"Number": "12",
													"Block": [
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "15",
													"Block": [
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Type": "Aisle"
															}
													]
											},
											{
													"Number": "16",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "17",
													"Block": [
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Type": "Aisle"
															}
													]
											},
											{
													"Number": "18",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "19",
													"Block": [
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Type": "Aisle"
															}
													]
											},
											{
													"Number": "20",
													"Block": [
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											}
									]
							},
							{
									"Type": "Y",
									"Column": [
											{
													"Position": "1",
													"Code": "A"
											},
											{
													"Position": "2",
													"Code": "C"
											},
											{
													"Position": "3"
											},
											{
													"Position": "4"
											},
											{
													"Position": "5",
													"Code": "D"
											},
											{
													"Position": "6",
													"Code": "E"
											},
											{
													"Position": "7",
													"Code": "F"
											},
											{
													"Position": "8",
													"Code": "G"
											},
											{
													"Position": "9"
											},
											{
													"Position": "10"
											},
											{
													"Position": "11",
													"Code": "H"
											},
											{
													"Position": "12",
													"Code": "K"
											}
									],
									"Row": [
											{
													"Number": "31",
													"Block": [
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "32",
													"Block": [
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "33",
													"Block": [
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "34",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "35",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "36",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "37",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "38",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "39",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "40",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "41",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "42",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "43",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "44",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "45",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "46",
													"Block": [
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "47",
													"Block": [
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "48",
													"Block": [
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "49",
													"Block": [
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "50",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "51",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "52",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "53",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "54",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "55",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "56",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "57",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "58",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "59",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "60",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "F"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "61",
													"Block": [
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "62",
													"Block": [
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "A"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "C"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "1",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "H"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "K"
															}
													]
											},
											{
													"Number": "63",
													"Block": [
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															}
													]
											},
											{
													"Number": "64",
													"Block": [
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "D"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "E"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Availability": "2",
																	"Type": "Seat",
																	"Number": "G"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															},
															{
																	"Type": "Aisle"
															}
													]
											}
									]
							}
					],
					"planeType": "A320"
			}
	
	 };
} 

var select = async (ctx, next) => {
	console.log(ctx.request.body);
	 ctx.response.body = {
		 code: '0000',
		 data: {
			"seatMap": [
				{
						"Type":"UY",
						"Column":[
								{
										"Position":"1",
										"Code":"A"
								},
								{
										"Position":"2"
								},
								{
										"Position":"3"
								},
								{
										"Position":"4",
										"Code":"D"
								},
								{
										"Position":"5",
										"Code":"H"
								},
								{
										"Position":"6"
								},
								{
										"Position":"7"
								},
								{
										"Position":"8",
										"Code":"L"
								}
						],
						"Row":[
								{
										"Number":"1",
										"Block":[
												{
														"Availability":"2",
														"Type":"Seat",
														"Number":"A"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"2",
														"Type":"Seat",
														"Number":"D"
												},
												{
														"Availability":"2",
														"Type":"Seat",
														"Number":"H"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"2",
														"Type":"Seat",
														"Number":"L"
												}
										]
								},
								{
										"Number":"2",
										"Block":[
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"A"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"D"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"H"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"L"
												}
										]
								}
						]
				},
				{
						"Type":"Y",
						"Column":[
								{
										"Position":"1",
										"Code":"A"
								},
								{
										"Position":"2",
										"Code":"C"
								},
								{
										"Position":"3"
								},
								{
										"Position":"4"
								},
								{
										"Position":"5",
										"Code":"D"
								},
								{
										"Position":"6",
										"Code":"H"
								},
								{
										"Position":"7"
								},
								{
										"Position":"8"
								},
								{
										"Position":"9",
										"Code":"J"
								},
								{
										"Position":"10",
										"Code":"L"
								}
						],
						"Row":[
								{
										"Number":"11",
										"Block":[
												{
														"Availability":"2",
														"Type":"Seat",
														"Number":"A"
												},
												{
														"Availability":"2",
														"Type":"Seat",
														"Number":"C"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"2",
														"Type":"Seat",
														"Number":"D"
												},
												{
														"Availability":"2",
														"Type":"Seat",
														"Number":"H"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"2",
														"Type":"Seat",
														"Number":"J"
												},
												{
														"Availability":"2",
														"Type":"Seat",
														"Number":"L"
												}
										]
								},
								{
										"Number":"12",
										"Block":[
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"A"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"C"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"2",
														"Type":"Seat",
														"Number":"D"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"H"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"J"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"L"
												}
										]
								},
								{
										"Number":"13",
										"Block":[
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"A"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"C"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"D"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"H"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"J"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"L"
												}
										]
								},
								{
										"Number":"14",
										"Block":[
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"A"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"C"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"D"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"H"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"J"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"L"
												}
										]
								},
								{
										"Number":"15",
										"Block":[
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"A"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"C"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"D"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"H"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"J"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"L"
												}
										]
								},
								{
										"Number":"16",
										"Block":[
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"A"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"C"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"D"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"H"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"J"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"L"
												}
										]
								},
								{
										"Number":"17",
										"Block":[
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"A"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"C"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"D"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"H"
												},
												{
														"Type":"Aisle"
												},
												{
														"Type":"Aisle"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"J"
												},
												{
														"Availability":"1",
														"Type":"Seat",
														"Number":"L"
												}
										]
								}
						]
				}
		]
		 },
		 message: 'ok'
	 };
} 

module.exports = {
	'POST /testlist': testlist,
	'POST /testpost': testpost,
	'POST /flight/planeRegInfo/getPlanePositionInfo': layout,
	'POST /travel/trip/getCheckInSeats': select,
};