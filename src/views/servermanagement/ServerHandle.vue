<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>
				<i class="el-icon-s-home"></i>
			</el-breadcrumb-item>
			<el-breadcrumb-item>服务管理</el-breadcrumb-item>
			<el-breadcrumb-item>服务处理列表</el-breadcrumb-item>
			<el-breadcrumb-item>服务处理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-row>
			<el-col :span="12">
				<el-form :inline="true" ref="clientServer" :model="clientServer" label-width="150px" style="margin-top: 30px;">
					<el-form-item label="服务编号">
						<el-input :disabled="true" v-model="clientServer.serverId" size="small" style="width: 400px;"></el-input>
					</el-form-item>
					<el-form-item label="客户名称">
						<el-input :disabled="true" v-model="clientServer.clientInfo.clientName" size="small" style="width: 400px;"></el-input>
					</el-form-item>
					<el-form-item label="概要">
						<el-input :disabled="true" v-model="clientServer.serverTitle" size="small" style="width: 400px;"></el-input>
					</el-form-item>
					<el-form-item label="服务请求内容">
						<el-input :disabled="true" type="textarea" :rows="4" v-model="clientServer.serverContent" size="small" style="width: 400px;"></el-input>
					</el-form-item>
					<el-form-item label="服务处理内容">
						<el-input type="textarea" :rows="4" v-model="clientServer.serverProcessing" size="small" style="width: 400px;"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button style="margin-left: 150px;" type="primary" size="mini">保存</el-button>
					</el-form-item>
				</el-form>
			</el-col>

			<el-col :span="12">
				<el-form :inline="true" ref="clientServer" :model="clientServer" style="margin-top: 30px;" label-width="150px">
					<el-form-item label="服务类型">
						<el-input :disabled="true" v-model="clientServer.dataServerType.serverTypeId" size="small" style="width: 400px;"></el-input>
					</el-form-item>
					<el-form-item label="创建人">
						<el-input :disabled="true"  v-model="clientServer.serverCreateId" size="small" style="width: 400px;"></el-input>
					</el-form-item>
					<el-form-item label="创建时间">
						<el-input :disabled="true" v-model="clientServer.serverCreateDate" size="small" style="width: 400px;"></el-input>
					</el-form-item>
					<el-form-item label="分配给">
						<el-input :disabled="true" v-model="clientServer.serverDueId" size="small" style="width: 400px;"></el-input>
					</el-form-item>
					<el-form-item label="分配时间">
						<el-input :disabled="true" v-model="clientServer.serverDueDate" size="small" style="width: 400px;"></el-input>
					</el-form-item>
					<el-form-item label="处理人">
						<el-input :disabled="true" v-model="updateServerHandle.serverProcessing" size="small" style="width: 400px;"></el-input>
					</el-form-item>
					<el-form-item label="处理时间">
						<el-input :disabled="true" v-model="updateServerHandle.processingDate" size="small" style="width: 400px;"></el-input>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				clientServer: {},
				updateServerHandle:{
					serverProcessing:'aaa',
					processingDate:this.$getCurDate()
				}
			}
		},
		created(){
			this.$axios.post('selectClientServerAllInfo',{
				serverId:this.$route.query.serverId
			})
				.then((response) => {
					console.log(response.data);
					this.clientServer = response.data;
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}
</script>

<style scoped>
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
		margin-bottom: 0;
		
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

</style>
