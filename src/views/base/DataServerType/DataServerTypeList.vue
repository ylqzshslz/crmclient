<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>基础数据</el-breadcrumb-item>
			<el-breadcrumb-item>服务类型管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-table :data="dataServerTypeList" style="width: 80%; margin-top: 20px;" @selection-change="handleSelectionChange">
			<el-table-column prop="dstId" type="selection" width="55">
			</el-table-column>
			<el-table-column prop="dstId" label="编号" width="300">
			</el-table-column>
			<el-table-column prop="dstName" label="服务类型" width="300">
			</el-table-column>
			<el-table-column label="操作" width="300">
				<template slot-scope="scope">
					<el-button @click="update(scope.row)" type="text" size="small">更新</el-button>
					<el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-button @click="add()" size="small" type="primary" style="margin-top: 15px;margin-bottom: 15px;">新建</el-button>
		<el-button @click="delBatch()" size="small" type="primary" style="margin-top: 15px;margin-bottom: 15px;">批量删除</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dataServerTypeList: [],
				multipleSelection:[]
			}
		},
		created() {
			this.init();
		},
		methods: {
			init() {
				this.$axios.post('selectDataServerTypeAll')
					.then((response) => {
						this.dataServerTypeList = response.data;
						console.log(this.dataServerTypeList);
					})
					.catch((error) => {
						console.log(error);
					});
			},
			del(row) {
				if(!confirm('确定要删除此数据吗？')) {
					return;
				}
				this.$axios.post('deleteDataServerType', {
						dstId: row.dstId
					})
					.then((response) => {
						if(response.data == 1) {
							this.init();
						} else {
							alert('删除失败！');
						}
					})
					.catch((error) => {
						console.log(error);
					});
			},
			update(row) {
				this.$router.push({
					path: '/admin/updatedataServerType',
					query: {
						dstId: row.dstId
					}
				});
			},
			delBatch() {
				if (this.multipleSelection.length <= 0) {
					alert('请选择要删除的数据！');
					return;
				}
				if (!confirm('确认要删除这些数据吗？')) {
					return;
				}
				//由于服务器端需要int数组参数来批量删除，所以这里将对象数组中的id抽取出来成为一个新数组
				let paramArr = [];
				for(let i=0;i<this.multipleSelection.length;i++){
					paramArr[i]=this.multipleSelection[i].dstId;
					console.log(paramArr[i]);
				}
				this.$axios.post('deleteDataServerBatch', paramArr)
					.then((response) => {
						if (response.data > 0) {
							this.init();
						} else {
							alert('删除失败！');
						}
					})
					.catch((error) => {
						console.log(error);
					});
			},
			handleSelectionChange(val){
				this.multipleSelection = val;
			},
			add() {
				this.$router.push('/admin/adddataServerType');
			}
		}
	}
</script>

<style>

</style>