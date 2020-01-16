<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>基础数据</el-breadcrumb-item>
			<el-breadcrumb-item>客户等级管理</el-breadcrumb-item>
			<el-breadcrumb-item>新建客户等级</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="dataClientlevel" :model="dataClientlevel" label-width="100px" style="margin-top: 15px;width: 500px;">
			<el-form-item label="客户等级名称*">
				<el-input v-model="dataClientlevel.dclName"></el-input>
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
				dataClientlevel: {
					dclId: 0,
					dclName: ''
				}
			}
		},
		methods: {
			add() {
				this.$axios.post('insertDataClientLevel', this.dataClientlevel)
					.then((response) => {
						if (response.data == 1) {
							this.$router.push('/admin/dataClientlevelList');
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
