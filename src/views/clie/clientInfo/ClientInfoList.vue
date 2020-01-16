<template>
	<div>
		<h2>客户信息管理</h2>
		<table>
			<tr>
				<th>客户编号</th>
				<th>客户名称</th>
				<th>地区</th>
				<th>客户经理</th>
				<th>客户等级</th>
				<th>操作</th>
				<th></th>
				<th></th>
				<th></th>
				
			</tr>
			<tr v-for="(item,index) in clientInfoList">
				<td>{{item.clientCode}}</td>
				<td>{{item.clientName}}</td>
				<td>{{item.clientAreaId}}</td>
				<td>{{item.clientCustId}}</td>
				<td>{{item.clientLevelId}}</td>
				<td><button @click="updateClientInfo(item.clientCode)">编辑</button></td>
				<td><button @click="clientLinkmanList(item.clientCode)">联系人</button></td>
				<td><button @click="ordersList(item.clientCode)">历史订单</button></td>
				<td><button @click="delClientInfo(item.clientCode)">删除</button></td>
				
			</tr>
			 
		</table>
	</div>
</template>

<script>
	 export default {
	 	name: 'ClientInfoList',
	 	data() {
	 		return {
	 			clientInfoList:[]
	 		}
	 	},
	 	created(){
	 		this.init();
	 	},
		methods:{
			init(){
				this.$axios.post('selectClientInfoAll')
					.then((response) => {
						this.clientInfoList = response.data;						
					})
					.catch((error) => {
						console.log(error);
					});
			},
			delClientInfo(clientCode){
				if(!confirm('确定要删除此客户信息么？')){
					return;
			}
			this.$axios.post('deleteClientInfo',{
				clientCode:clientCode
			})
				.then((response) => {
					if(response.data == 1){
						this.init();
					}else{
						alert('删除失败！');
					}
				})
				.catch((error) => {
					console.log(error);
				});
		},
		updateClientInfo(clientCode){
			this.$router.push({path:'/admin/updateClientInfo',query:{clientCode}});
		},
		clientLinkmanList(clientCode){
			this.$router.push({path:'/admin/clientLinkmanList',query:{clientCode}});
		},
		ordersList(clientCode){
			this.$router.push({path:'/admin/orders',query:{clientCode}});
		}
	 }
	 }
	 
</script>

<style scoped>
table{
	margin-top: 20px;
	width: 800px;
}
td{
	text-align: center;
}
tr,td,th{
	border-bottom: 1px solid #ddd;
}
</style>
