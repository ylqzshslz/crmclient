<template>
	<div>
		<el-breadcrumb separator="/" style="margin-bottom:40px;">>
			<el-breadcrumb-item>
				<i class="el-icon-s-home"></i>
			</el-breadcrumb-item>
			<el-breadcrumb-item>营销管理</el-breadcrumb-item>
			<el-breadcrumb-item>销售机会管理</el-breadcrumb-item>
			<el-breadcrumb-item>客户开发计划</el-breadcrumb-item>
		</el-breadcrumb>
		<el-form ref="saleChance" :model="saleChance" :inline="true" label-position="right" label-width="140px">
			<el-form-item label="销售机会编号">
				<el-input v-model="saleChance.chanceId" disabled></el-input>
			</el-form-item>
			<el-form-item label="机会来源">
				<el-input v-model="saleChance.chanceSource"></el-input>
			</el-form-item>
			<el-form-item label="客户名称" required hide-required-asterisk>
				<el-input v-model="saleChance.chanceCustName"></el-input>
			</el-form-item>
			<el-form-item label="成功几率(%)" required hide-required-asterisk>
				<el-input v-model="saleChance.chanceRate"></el-input>
			</el-form-item>
			<el-form-item label="概要" required hide-required-asterisk>
				<el-input v-model="saleChance.chanceTitle"></el-input>
			</el-form-item>
			<el-form-item label="联系人电话">
				<el-input v-model="saleChance.chanceTel"></el-input>
			</el-form-item>
			<el-form-item label="联系人">
				<el-input v-model="saleChance.chanceLinkman"></el-input>
			</el-form-item>
			<el-form-item label="创建人">
				<el-input v-model="sysUser.userName" disabled></el-input>
			</el-form-item>
			<el-form-item label="创建时间">
				<el-input v-model="saleChance.chanceCreateDate" disabled></el-input>
			</el-form-item>
			<el-form-item label="机会描述">
				<el-input type="textarea" v-model="saleChance.chanceDesc" style="width: 400px;"></el-input>
			</el-form-item>
			<div id="tijiao">
				<el-form-item>
					<el-button type="primary" @click="addSaleChance()">保存</el-button>
				</el-form-item>
			</div>
		</el-form>
	</div>
</template>

<script>
	export default {
		created() {
			this.sysUser = this.$getSessionStorage('sysUser');
		},
		data() {
			return {
				sysUser: {
					userId: '',
					userName: ''
				},
				saleChance: {
					chanceId: null,
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
					chanceStatus: '0',
				}
			}
		},
		methods: {
			addSaleChanceEvent() {
				this.saleChance.chanceCreateId = this.sysUser.userId;
				this.saleChance.chanceCreateDate = this.$getCurDate();
				this.$axios.post('insertSaleChance', this.saleChance)
					.then((response) => {
						if(response.data == 1) {
							alert("新建成功");
							this.$router.push({path: "SaleChanceList"});
						} else {
							alert("新建失败");
						}
					})
					.catch((error) => {
						console.log(error);
					})
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