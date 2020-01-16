<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>基础数据</el-breadcrumb-item>
			<el-breadcrumb-item>地区管理</el-breadcrumb-item>
			<el-breadcrumb-item>编辑地区</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="dataClientLevel" :model="dataClientLevel" label-width="100px" style="margin-top: 15px;width: 500px;">
			<el-form-item label="客户等级编号*">
				<el-input v-model="dataClientLevel.dclId" disabled></el-input>
			</el-form-item>
			<el-form-item label="客户等级名称*">
				<el-input v-model="dataClientLevel.dclName"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="update()">保存</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dataClientLevel: {
					dclId: 0,
					dclName: ''
				}
			}
		},
		created() {
			this.$axios.post('selectDataClientLevelById',{
				dclId:this.$route.query.dclId
			})
				.then((response) => {
					this.dataClientLevel=response.data;

				})
				.catch((error) => {
					console.log(error);
				});
		},
		methods:{
			update(){
				this.$axios.post('updateDataClientLevel',this.dataClientLevel)
					.then((response) => {
						if(response.data==1){
							this.$router.push('/admin/dataClientLevelList');
						}else{
							alert('更新失败！');
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
