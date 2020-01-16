<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>
				<i class="el-icon-s-home"></i>
			</el-breadcrumb-item>
			<el-breadcrumb-item>服务管理</el-breadcrumb-item>
			<el-breadcrumb-item>服务分配</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="selectClientServer" class="demo-form-inline el-main1">
			<el-form-item label="客户名称">
				<el-input v-model="selectClientServer.clientName"></el-input>
			</el-form-item>
			<el-form-item label="概要">
				<el-input v-model="selectClientServer.serverTitle"></el-input>
			</el-form-item>
			<el-form-item label="服务类型">
				<el-select v-model="dataServerTypeList.clientCode">
					<el-option v-for="(item,index) in dataServerTypeList" :label="item.dstName" :value="item.dstId"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="danger" size="small">清空</el-button>
				<el-button type="primary" size="small" @click="selectClientServerByTerm()">查询</el-button>
			</el-form-item>
		</el-form>

		<el-table :data="clientServerList" style="width: 100%;">
			<el-table-column fixed prop="serverId" label="服务编号" width="80" align="center">
			</el-table-column>
			<el-table-column prop="clientInfo.clientName" label="客户名称" width="100" align="center">
			</el-table-column>
			<el-table-column prop="serverTitle" label="概要" width="200" align="center">
			</el-table-column>
			<el-table-column prop="dataServerType.dstName" label="服务类型" width="100" align="center">
			</el-table-column>
			<el-table-column prop="sysUser.userName" label="创建人" width="150" align="center">
			</el-table-column>
			<el-table-column prop="serverCreateDate" label="创建时间" width="150" align="center">
			</el-table-column>
			<el-table-column prop="sysUserList" label="分配给" width="300" align="center">
				<template  slot-scope="scope">
					<el-select :inline="true" v-model="scope.row.value" size="mini">
						<el-option v-for="item in sysUserList" :label="item.userName" :value="item.userId"></el-option>
					</el-select>
					<el-button :inline="true" type="primary" size="mini" style="margin-left: 10px;" @click="updateByAllot(scope.row)" >分配</el-button>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="80" align="center">
				<template slot-scope="scope">
					<el-button class="buttonStyle" @click="deleteByAllot(scope.row)" type="text" size="small">
						<i class="el-icon-delete"></i>
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>
<script>
	export default {
		methods: {
			del(row) {
				console.log(row);
			}
		},

		data() {
			return {
				selectClientServer: {
					clientName: '',
					serverTitle: '',
					dstName:''	
				},
				clientServerList: [],
				dataServerTypeList: [],
				sysUserList: []
			}
		},
		created() {
			this.$axios.post('selectClientServerAll')
				.then((response) => {
					this.clientServerList = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
			this.$axios.post('selectDataServerTypeAll')
				.then((response) => {
					this.dataServerTypeList = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
			this.$axios.post('selectSysUserAll')
				.then((response) => {
					this.sysUserList = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		methods:{
			updateByAllot(row){
				this.$axios.post('updateClientServerByAllot',row)
					.then((response) => {
						if (response.data == 1) {
						    alert('分配成功！')
						} else {
							alert('分配失败！');
						}
					})
					.catch((error) => {
						console.log(error);
					});
			},
			deleteByAllot(row){
				if (!confirm('确定要删除此数据吗？')) {
					return;
				}
				this.$axios.post('deleteClientServer',row)
					.then((response) => {
						if (response.data == 1) {
						    alert('删除成功！')
						} else {
							alert('删除失败！');
						}
					})
					.catch((error) => {
						console.log(error);
					});
			}
		}
	}
</script>

<style scoped>
	.el-main1 {
		line-height: 0px;
		text-align: left;
		margin-top: 20px;
	}
</style>
