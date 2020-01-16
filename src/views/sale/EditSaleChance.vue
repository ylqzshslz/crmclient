<template>
	<div>
		<el-breadcrumb separator="/" style="margin-bottom:40px;">>
			<el-breadcrumb-item>
				<i class="el-icon-s-home"></i>
			</el-breadcrumb-item>
			<el-breadcrumb-item>营销管理</el-breadcrumb-item>
			<el-breadcrumb-item>销售机会管理</el-breadcrumb-item>
			<el-breadcrumb-item>编辑销售机会</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="saleChance" :model="saleChance" :inline="true" label-position="right" label-width="140px">
			<el-form-item label="销售机会编号">
				<el-input v-model="saleChance.chanceId" disabled></el-input>
			</el-form-item>
			<el-form-item label="机会来源">
				<el-input v-model.trim="saleChance.chanceSource"></el-input>
			</el-form-item>
			<el-form-item label="客户名称" required hide-required-asterisk>
				<el-input v-model.trim="saleChance.chanceCustName"></el-input>
			</el-form-item>
			<el-form-item label="成功几率(%)" required hide-required-asterisk>
				<el-input v-model.trim="saleChance.chanceRate"></el-input>
			</el-form-item>
			<el-form-item label="概要" required hide-required-asterisk>
				<el-input v-model.trim="saleChance.chanceTitle"></el-input>
			</el-form-item>
			<el-form-item label="联系人电话">
				<el-input v-model.trim="saleChance.chanceTel"></el-input>
			</el-form-item>
			<el-form-item label="联系人">
				<el-input v-model.trim="saleChance.chanceLinkman"></el-input>
			</el-form-item>
			<el-form-item label="创建人">
				<el-input v-model="sysUser.userName" disabled></el-input>
			</el-form-item>
			<el-form-item label="机会描述">
				<el-input type="textarea" v-model.trim="saleChance.chanceDesc" style="width: 400px;"></el-input>
			</el-form-item>
			<el-form-item label="创建时间">
				<el-input v-model="saleChance.chanceCreateDate" disabled></el-input>
			</el-form-item>
			<div id="tijiao">
				<el-form-item>
					<el-button type="primary" @click="editSaleChanceEvent()">保存</el-button>
					<el-button type="primary" @click="backSaleChanceListBackEvent()">返回</el-button>
				</el-form-item>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default {
		created() {
			this.sysUser = this.$getSessionStorage('sysUser');
			this.saleChance = this.$route.query.SaleChance;
		},
		data() {
			return {
				sysUser: {
					userName: ''
				},
				saleChance: {
					chanceId: 0,
					chanceSource: '',
					chanceCustName: '',
					chanceTitle: '',
					chanceRate: '',
					chanceLinkman: '',
					chanceTel: '',
					chanceDesc: '',
					chanceCreateId: '',
					chanceCreateDate: '',
					chanceDueId: '',
					chanceDueDate: '',
					chanceStatus: 0,
				}
			}
		},
		methods: {
			editSaleChanceEvent() {
				this.saleChance.chanceCreateDate = this.$getCurDate();
				if(this.saleChance.chanceCustName == '') {
					alert('客户名称不能为空！');
					return;
				}
				if(this.saleChance.chanceRate == '') {
					alert('成功几率不能为空！');
					return;
				}else if(this.saleChance.chanceRate < 0 || this.saleChance.chanceRate > 100 || isNaN(this.saleChance.chanceRate)){
					alert('成功几率范围0~100！');
					return;
				}
				if(this.saleChance.chanceTitle == '') {
					alert('概要不能为空！');
					return;
				}
				this.$axios.post('updaeSaleChanceByChanceId', this.saleChance)
					.then((response) => {
						if(response.data == 1) {
							alert("更新成功");
							this.$router.push({
								path: "SaleChanceList"
							});
						} else {
							alert("更新失败");
						}
					})
					.catch((error) => {
						console.log(error);
					})
			},
			backSaleChanceListBackEvent() {
				this.$router.push({
					path: "SaleChanceList"
				});
			}
		}
	}
</script>

<style scoped>
	.el-input {
		width: 400px;
	}
	
	#tijiao {
		margin-left: 140px;
	}
</style>