<template>
	<div>
		<h2>客户流失管理</h2>
		<table>
			<tr>
				<th>客户编号</th>
				<th>客户名称</th>
				<th>客户经理</th>
				<th>上次下单时间</th>
				<th>操作</th>
				<th></th>
				<th></th>
				<th></th>

			</tr>

			<tr v-for="(item,index) in lientReprieveLoseList">
				<td>{{item.clientReprieveLoseId}}</td>
				<td>{{item.reprieveStep}}</td>
				<td>{{item.clientCode}}</td>
				<td>
				<td>编辑</td>
				<td>联系人</td>
				<td>历史订单</td>
				<td>删除</td>
				
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'ClientReprieveLoseList',
		data() {
			return {
				lientReprieveLoseList:[]
			}
		},
		created(){
			this.init();
		},
		methods:{
			init(){
				this.$axios.post('selectClientReprieveLoseAll')
					.then((response) => {
						 this.lientReprieveLoseList = response.data;
					})
					.catch((error) => {
						console.log(error);
					});
			}
		}
	}
	
</script>

<style scoped>
	table{
		width: 800px;
	}
	td{
		text-align: center;
	}
	tr,td,th{
		border-bottom: 1px solid #ddd;
	}
</style>
