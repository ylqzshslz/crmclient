<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item>
				<i class="el-icon-s-home"></i>
			</el-breadcrumb-item>
			<el-breadcrumb-item>服务管理</el-breadcrumb-item>
			<el-breadcrumb-item>服务创建</el-breadcrumb-item>
		</el-breadcrumb>
		<div style="margin: 20px;"></div>
		<el-form ref="clientServer" :model="clientServer" label-width="120px">
			<el-form-item label="概要" :rules="{ required: true}">
				<el-input v-model="clientServer.serverTitle"></el-input>
			</el-form-item>
			<el-form-item label="服务类型" :rules="{ required: true}">
				<el-select v-model="clientServer.serverTypeId">
					<el-option v-for="(item,index) in dataServerTypeList" :label="item.dstName" :value="item.dstId"></el-option>
				</el-select>
			</el-form-item>	
			<el-form-item label="服务请求内容" :rules="{ required: true}">
				<el-input type="textarea" v-model="clientServer.serverContent"></el-input>
			</el-form-item>
			<el-form-item size="large">
				<el-button type="primary" @click="add()">保存</el-button>
			</el-form-item>
		</el-form>
		<div style="margin: 20px;"></div>
		<el-form ref="clientServer" :model="clientServer" label-width="120px">
			<el-form-item label="客户名称"  :rules="{ required: true}">
				<el-select v-model="clientServer.clientCode">
					<el-option v-for="(item,index) in clientInfoList" :label="item.clientName" :value="item.clientCode"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="创建人">
				<el-input v-model="sysUser.userName" :disabled="true">
				</el-input>
			</el-form-item>
			<el-form-item label="创建日期">
				<el-input v-model="clientServer.serverCreateDate" :disabled="true">
				</el-input>
			</el-form-item>
		</el-form>
	</div>


</template>

<script>
	export default {
		data() {
			return {
				clientServer: {
					serverTypeId: '',
					serverTitle: '',
					clientCode: '',
					serverContent: '',
					serverCreateId: '1',
					serverCreateDate: this.$getCurDate()
				},
				dataServerTypeList: [],
				clientInfoList: [],
				sysUser:{
					userName:''
				} //此处后期改为session对象中的登录用户姓名
			}
		},
		methods: {
			add() {
				this.$axios.post('insertClientServer', this.clientServer)
					.then((response) => {
						if (response.data == 1) {
							console.log(this.clientServer)
							alert('添加成功！')
							this.$router.push('/admin/serverCreate');
						} else {
							alert('添加失败！');
						}
					})
					.catch((error) => {
						console.log(error);
					});
			}
		},
		created() {
			this.sysUser = this.$getSessionStorage('sysUser');
			this.$axios.post('selectDataServerTypeAll')
				.then((response) => {
					this.dataServerTypeList = response.data;

				})
				.catch((error) => {
					console.log(error);
				});
			this.$axios.post('selectClientInfoAll')
				.then((response) => {
					this.clientInfoList = response.data;

				})
				.catch((error) => {
					console.log(error);
				});
		}
	}
</script>

<style scoped>
	.el-form {
		width: 450px;
		float: left;
		margin-left: 50px;
	}
	.el-breadcrumb {
		background-color: #D9EDF7;
		border-radius: 5px;
		height: 36px;
		line-height: 36px;
		padding-left: 15px;
		font-weight: 00;
	}
	
	.el-icon-s-home {
		font-size: 18px;
	}
	
	.demo-form-inline {
		margin: 20px;
	}
	
	.el-form-item {
		margin-bottom: 10px;
	}
	
	.el-button {
		margin-top: 20px;
	}
	
	.el-button--primary {
		margin-left: 100px;
		background-color: #5BC0DE;
	}
	
	.el-button--success {
		background-color: #337AB7;
		border-color: #2E6DA4;
	}
	.el-select {
		width: 330px;
	}
</style>
