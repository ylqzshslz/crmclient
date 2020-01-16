<template>
	<div>
		<h3>联系人信息管理</h3>
		<div>客户编号：123 客户名称：123 <router-link to="/admin/addClientLintman">新建</router-link>
			<router-link to="/admin/clientInfoList">返回</router-link>
		</div><br>

		<table>
			<tr>
				<th>姓名</th>
				<th>性别</th>
				<th>职位</th>
				<th>办公电话</th>
				<th>手机</th>
				<th>备注</th>
				<th>操作</th>
				<th></th>
			</tr>
			<tr v-for="(item,index) in clientLinkmanList">
				<td>{{item.clientLinkmanName}}</td>
				<td>{{item.clientLinkmanSex}}</td>
				<td>{{item.clientLinkmanJob}}</td>
				<td>{{item.clientLinkmanTel}}</td>
				<td>{{item.clientLinkmanMobile}}</td>
				<td>{{item.remark}}</td>
				<td><button @click="updateClientLinkman(item.clientCode)">编辑</button></td>
				<td><button @click="delClientLinkman(item.clientCode)">删除</button></td>
			</tr>

		</table>


	</div>
</template>

<script>
	export default {
		name: 'ClientLinkmanList',
		data() {
			return {
				clientLinkmanList: {
					clientLinkmanId: '',
					clientLinkmanName: '',
					clientLinkmanSex: '',
					clientLinkmanJob: '',
					clientLinkmanTel: '',
					clientLinkmanMobile: '',
					remark: '',
					clientCode: ''
				}
			}
		},
		created() {
			this.init();
		},
		methods: {
			init() {
				this.$axios.post('selectClientLinkman', {
						clientCode: this.$route.query.clientCode
					})
					.then((response) => {
						this.clientLinkmanList = response.data;

					})
					.catch((error) => {
						console.log(error);
					});
			},
			delClientLinkman(clientCode) {
				if (!confirm('确定要删除此客户信息么？')) {
					return;
				}
				this.$axios.post('deleteClientLinkman', {
						clientCode: clientCode
					})
					.then((response) => {
						if (response.data == 1) {
							this.init();
							alert('删除成功！');
						} else {
							alert('删除失败！');
						}
					})
					.catch((error) => {
						console.log(error);
					});
			},
			updateClientLinkman(clientCode){
				this.$router.push({path:'/admin/updateClientLinkman',query:{clientCode}});
				
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
