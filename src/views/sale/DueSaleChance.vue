<template>
	<div>
		<el-breadcrumb separator="/" style="margin-bottom:40px;">>
			<el-breadcrumb-item>
				<i class="el-icon-s-home"></i>
			</el-breadcrumb-item>
			<el-breadcrumb-item>营销管理</el-breadcrumb-item>
			<el-breadcrumb-item>销售机会管理</el-breadcrumb-item>
			<el-breadcrumb-item>指派销售机会</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="saleChance" :model="saleChance" :inline="true" label-position="right" label-width="140px">
			<el-form-item label="销售机会编号">
				<el-input v-model="saleChance.chanceId" disabled></el-input>
			</el-form-item>
			<el-form-item label="机会来源">
				<el-input v-model="saleChance.chanceSource" disabled></el-input>
			</el-form-item>
			<el-form-item label="客户名称" required hide-required-asterisk>
				<el-input v-model="saleChance.chanceCustName" disabled></el-input>
			</el-form-item>
			<el-form-item label="成功几率(%)" required hide-required-asterisk>
				<el-input v-model="saleChance.chanceRate" disabled></el-input>
			</el-form-item>
			<el-form-item label="概要" required hide-required-asterisk>
				<el-input v-model="saleChance.chanceTitle" disabled></el-input>
			</el-form-item>
			<el-form-item label="联系人电话">
				<el-input v-model="saleChance.chanceTel" disabled></el-input>
			</el-form-item>
			<el-form-item label="联系人">
				<el-input v-model="saleChance.chanceLinkman" disabled></el-input>
			</el-form-item>
			<el-form-item label="创建人">
				<el-input v-model="sysUser.userName" disabled></el-input>
			</el-form-item>
			<el-form-item label="创建时间">
				<el-input v-model="saleChance.chanceCreateDate" disabled></el-input>
			</el-form-item>
			<el-form-item label="机会描述">
				<el-input type="textarea" v-model="saleChance.chanceDesc" style="width: 400px;" disabled></el-input>
			</el-form-item>
			<div style="border: 1px solid #DDD; margin-bottom: 10px;"></div>
			<el-form-item label="指派给">
				<el-select v-model="sysUserByUserRoleIdList.userId" style="width: 400px;" placeholder="请选择只派人">
					<el-option v-for="item in sysUserByUserRoleIdList" :label="item.userName" :value="item.userId"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="指派时间">
				<el-input v-model="saleChance.chanceDueDate" disabled></el-input>
			</el-form-item>
			<div id="tijiao">
				<el-form-item>
					<el-button type="primary" @click="dueSaleChanceEvent()">保存</el-button>
					<el-button type="primary" @click="backSaleChanceListBackEvent()">返回</el-button>
				</el-form-item>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default {
		created() {
			this.saleChance = this.$route.query.SaleChance;     //接收SaleChanceList传过来的参数
			this.$axios.post('selectSysUserByUserId', this.sysUser)
				.then((response) => {
					this.sysUser = response.data;
				})
				.catch((error) => {
					console.log(error);
				})
			this.$axios.post('selectSysUserByUserRoleId', this.$store.state.saleChance)
				.then((response) => {
					this.sysUserByUserRoleIdList = response.data;
				})
				.catch((error) => {
					console.log(error);
				})
		},
		data() {
			return {
				sysUser:{
					userId:this.$route.query.SaleChance.chanceCreateId
				},
				sysUserByUserRoleIdList: [],
				saleChance: {         //定义一个Json对象接收SaleChanceList传过来的参数
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
					chanceStatus: 0
				}
			}
		},
		methods: {
			dueSaleChanceEvent() {
				this.saleChance.chanceDueId = this.sysUser.userId;
				this.saleChance.chanceStatus = 1;
				this.saleChance.chanceDueDate = this.$getCurDate();
				this.$axios.post('updaeSaleChanceByChanceId', this.saleChance)
					.then((response) => {
						if(response.data == 1) {
							alert("指派成功");
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