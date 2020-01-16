<template>
	<div>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item>
				<i class="el-icon-s-home"></i>
			</el-breadcrumb-item>
			<el-breadcrumb-item>营销管理</el-breadcrumb-item>
			<el-breadcrumb-item>客户开发计划</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form :inline="true" :model="SaleChance" class="demo-form-inline el-main1">
			<el-form-item label="客户名称">
				<el-input v-model="SaleChance.chanceCustName"></el-input>
			</el-form-item>
			<el-form-item label="概要">
				<el-input v-model="SaleChance.chanceTitle"></el-input>
			</el-form-item>
			<el-form-item label="联系人">
				<el-input v-model="SaleChance.chanceLinkman"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="danger" size="small" @click="clearEvent()">清空</el-button>
				<el-button type="primary" size="small" @click="selectSaleChanceByChanceStatusEvent()">查询</el-button>
			</el-form-item>
		</el-form>
		<el-table :data="results.data" style="width: 100%;margin-bottom: 20px;">
			<el-table-column prop="chanceId" label="编号" width="80" align="center">
			</el-table-column>
			<el-table-column prop="chanceCustName" label="客户名称" width="200" align="center">
			</el-table-column>
			<el-table-column prop="chanceTitle" label="概要" width="200" align="center">
			</el-table-column>
			<el-table-column prop="chanceLinkman" label="联系人" width="100" align="center">
			</el-table-column>
			<el-table-column prop="chanceTel" label="联系人电话" width="180" align="center">
			</el-table-column>
			<el-table-column prop="chanceCreateDate" label="创建时间" width="160" align="center">
			</el-table-column>
			<el-table-column label="操作" width="120" align="center">
				<template slot-scope="scope">
					<el-button @click="drawUpPlanView(scope.row)" type="text" size="small">
						<i class="el-icon-edit-outline"></i>
					</el-button>
					<el-button @click="editSaleChanceView(scope.row)" type="text" size="small">
						<i class="el-icon-bicycle"></i>
					</el-button>
					<el-button @click="delSaleChanceEvent(scope.row)" type="text" size="small">
						<i class="el-icon-success"></i>
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination background @current-change="handleCurrentChange" layout="total,prev,pager,next,jumper" :total="results.totalRow" :page-size="$store.state.maxNum">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pageNum: 1,
				results: {},                          //该属性用于分页返回的数据
				SaleChance: {                         //该属性用于分页模糊查询
					chanceStatus: 1,
					chanceCustName: '',
					chanceTitle: '',
					chanceLinkman: ''
				}
			}
		},
		created() {
			this.fenye(1);
		},
		methods: {
			selectSaleChanceByChanceStatusEvent() {
				this.fenye(1);
			},
			clearEvent(){
				this.SaleChance.chanceCustName = '';
				this.SaleChance.chanceTitle = '';
				this.SaleChance.chanceLinkman = '';
			},
			drawUpPlanView(row) {
				this.$router.push({path:'drawUpPlan'});
			},
			handleCurrentChange(val) {
				this.fenye(val);
			},
			editSaleChanceView(row) {
				this.$router.push({path:'editSaleChance',query:{SaleChance:row}});
			},
			delSaleChanceEvent(row) {
				if (!confirm('确认要删除此数据吗？')) {
					return;
				}
				this.$axios.post('delSaleChanceByChanceId', {
						chanceId: row.chanceId
					})
					.then((response) => {
						if (response.data == 1) {
							this.fenye(1);
						} else {
							alert('删除失败！');
						}
					})
					.catch((error) => {
						console.log(error);
					});
			},
			fenye(pageNum) {
				this.$fenye('selectSaleChanceCount', 'selectSaleChanceByChanceStatus', this.SaleChance, pageNum, this.$store.state.maxNum, (response) => {
					this.results = response;
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