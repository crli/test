// 订单查询
var getShopOrderPage = async (ctx, next) => {
		function createData(type){
			let arr = [];			
			switch(type) {
				case '':
				for(let i=0; i<5; i++){
					arr.push(
						{
						  ordersOrderNo: 210012236421,
						  ordersArriveTime: '2017-12-28',
						  ordersCreateTime: '2018-08-03',
						  orderDetailsShoppingNameStr: [
							"水果",
							"水果",
							"水果",
							"水果",
							"水果"
						  ],
						  orderDetailsNumStr: [11, 23, 123, 23, 123],
						  orderDetailsOriginalPriceStr: [123222, 22, 33, 23, 123],
						  ordersPassengerUserName: "李老二",
						  ordersTelPhone: 12323211412,
						  orderDetailsRemarkStr:
							"份2份",
						  ordersBillState: "否",
						  ordersPayment: 111,
							countNum: 10,
						  ordersOrderState: i+9
						}
					);
				}
				break;
				case '1':
				for(let i=0; i<2; i++){
					arr.push(
						{
						id: 12345,
						arriveTime: '2017-12-28',
						createTime: '2018-08-03',
						name: [
							"水果",
							"水果",
							"水果",
							"水果",
							"水果"
						],
						amount: [11, 23, 123, 23, 123],
						price: [123222, 22, 33, 23, 123],
						buyer: "李老二",
						phone: 12323211412,
						note:
							"份2份",
						invoice: "否",
						paid: 111,
						status: 0
						}
					);
				}
				break;
				case '2':
				for(let i=0; i<1; i++){
					arr.push(
						{
						id: 12345,
						arriveTime: '2017-12-28',
						createTime: '2018-08-03',
						name: [
							"水果",
							"水果",
							"水果",
							"水果",
							"水果"
						],
						amount: [11, 23, 123, 23, 123],
						price: [123222, 22, 33, 23, 123],
						buyer: "李老二",
						phone: 12323211412,
						note:
							"份2份",
						invoice: "否",
						paid: 111,
						status: 1
						}
					);
				}
				break;
				case '3':
				for(let i=1; i<2; i++){
					arr.push(
						{
						id: 12345,
						arriveTime: '2017-12-28',
						createTime: '2018-08-03',
						name: [
							"水果",
							"水果",
							"水果",
							"水果",
							"水果"
						],
						amount: [11, 23, 123, 23, 123],
						price: [123222, 22, 33, 23, 123],
						buyer: "李老二",
						phone: 12323211412,
						note:
							"份2份",
						invoice: "否",
						paid: 111,
						status: 2
						}
					);
				}
				break;
				case '4':
				for(let i=1; i<2; i++){
					arr.push(
						{
						id: 12345,
						arriveTime: '2017-12-28',
						createTime: '2018-08-03',
						name: [
							"水果",
							"水果",
							"水果",
							"水果",
							"水果"
						],
						amount: [11, 23, 123, 23, 123],
						price: [123222, 22, 33, 23, 123],
						buyer: "李老二",
						phone: 12323211412,
						note:
							"份2份",
						invoice: "否",
						paid: 111,
						status: 3
						}
					);
				}
				break;
			}
			return {
				code: '0000',
				data: {
					total: 15,
					rows: arr
				}
			};
		}
		ctx.response.body = createData('');
};

// 订单确认接单
var setConfirmOrderTake = async (ctx, next) => {
	console.log(ctx.request.body);
	 ctx.response.body = {
		 isSuccess: true,
		 msg: 'refunding'
	 };
}

// 订单取消订单
var setCancelOrder = async (ctx, next) => {
	console.log(ctx.request.body);
	 ctx.response.body = {
		 isSuccess: true
	 };
}

// 订单详情
var getDetailOrder = async (ctx, next) => {
	console.log(ctx.request.body);
	 ctx.response.body = {
		code: '0000',
		data: {
			ordersOrderNo: '666666',
			ordersCreateTime: '2018--8--8',
			ordersArriveTime: '2019-09-06',
			ordersPassengerUserName: 'xiaoming',
			ordersTelPhone: '13500009999',
			
			ordersOrderState: '9',
			
			orderDetailsShoppingNameStr: ['足疗养生套餐'], // 商品名
      orderDetailsNumStr: ['x2'], // 数量
      orderDetailsOriginalPriceStr: ['49'], // 原价
      ordersBagPay: '20', // 包装费
      ordersTotalAmount: '50', // 应付金额
      ordersPreferPrice: '10', // 优惠活动
      ordersPayment: '30', // 实付金额
      ordersComPay: '2', // 佣金
      ordersRemark: '无', // 备注
      ordersBillDetails: 'xxx公司', // 发票
			tcnr: ['足疗泡脚1','足疗泡脚2','足疗泡脚3'] // 套餐内容
		}
	 };
}

// 订单核销验证
var setVerificationOrder = async (ctx, next) => {
	console.log(ctx.request.body);
	 ctx.response.body = {
		 isSuccess: true
	 };
}

// 订单修改状态
var updateShopOrdersState = async (ctx, next) => {
	console.log(ctx.request.body);
	 ctx.response.body = {
		 code: '0000',
		 msg: 'refunding'
	 };
}

// 消息列表
var getByBasicMessage = async (ctx, next) => {
	let arr = [];
	for(let i=0; i<100; i++) {
		let num = Math.floor(Math.random()*10)+1;
		let obj = {
			id: i,
			type: num,
			messageContent: num + ':->意买家退款申请。退款单编号：135101180502093011',
			sendTime: '2018-09-25 12:13:17',
			messageState: Math.random()>0.5?'未读':'',
			orderNo: 12345
		}
		arr.push(obj);
	}
	 ctx.response.body = {
		 code: '0000',
		 data: {
		 	total: 100,
		 	rows: arr
		 }
	 };
}

// 登录
var login = async (ctx, next) => {
	console.log(ctx.request.body);
	 ctx.response.body = {
		 code: '0000',
		 data: {
		 	storeid: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasss',
		 	token: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbss'
		 }
	 };
}

module.exports = {
    'POST /orders/ShopOrderAll/getShopOrderPage': getShopOrderPage,
	'POST /setConfirmOrderTake': setConfirmOrderTake,
	'POST /setCancelOrder': setCancelOrder,
	'POST /getDetailOrder': getDetailOrder,	
	'POST /setVerificationOrder': setVerificationOrder,	
	'POST /orders/ShopOrderAll/updateShopOrdersState': updateShopOrdersState,
	'POST /message/getByBasicMessage': getByBasicMessage,
	'POST /ace-client-api/user/login': login
};