<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>基础数据</el-breadcrumb-item>
			<el-breadcrumb-item>地区管理</el-breadcrumb-item>
			<el-breadcrumb-item>新建地区</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="dataServerType" :model="dataServerType" label-width="100px" style="margin-top: 15px;width: 500px;">
			<el-form-item label="地区名称">
				<el-input v-model="dataServerType.dstName"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="add()">保存</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dataServerType: {
					dstId: 0,
					dstName: ''
				}
			}
		},
		methods: {
			add() {
				this.$axios.post('insertDataServerType', this.dataServerType)
					.then((response) => {
						if (response.data == 1) {
							this.$router.push('/admin/dataServerTypeList');
						} else {
							alert('添加失败！');
						}
					})
					.catch((error) => {
						console.log(error);
					});
			}
		}
	}
</script>

<style>
</style>
