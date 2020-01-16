<template>
	<div>
		<h3>联系人信息管理</h3>
		<div>客户编号：123 客户名称：123 <router-link to="/admin/ClientInfoList">返回</router-link>
		</div>
		<table>
			<tr>
				<th>订单编号</th>
				<th>订单日期 </th>
				<th>订单金额(万元)</th>
				<th>备注</th>
			</tr>
			<tr v-for="(item,index) in ordersList">
				<td>{{item.ordersId}}</td>
				<td>{{item.ordersDate}}</td>
				<td>{{item.ordersTotal}}</td>
				<td>{{item.remark}}</td>

			</tr>
			<tr>
				<td colspan="4">共计：{{sum}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	
	export default {
		name: 'OrdersList',
		data() {
			return {
				ordersList: {
					ordersId: '',
					ordersDate: '',
					address: '',
					ordersState: '',
					clientCode: '',
					ordersTotal: '',
					remark: ''
				},
				sum:0
			}
		},
		created() {
			this.$axios.post('selectOrdersByClientCode', {
					clientCode: this.$route.query.clientCode
				})
				.then((response) => {
					this.ordersList = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		methods: {
			calctotalmoney(){//-------------------------------------总数计算 没出来
				let total = 0;
				this.ordersList.forEach(v=>{
					total += v.ordersTotal;
				})
				sum = total;
			}
		}
	}
</script>

<style scoped>
	table {
		margin-top: 20px;
		width: 800px;
	}

	td {
		text-align: center;
	}

	tr,
	td,
	th {
		border-bottom: 1px solid #ddd;
	}
</style>
