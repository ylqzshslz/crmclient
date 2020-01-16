<template>
	<div>
		<el-form ref="sysUser" :model="sysUser" label-width="100px" style="margin-top: 15px;width: 500px;">
			<el-form-item label="用户编号">
				<el-input v-model="sysUser.userId" disabled></el-input>
			</el-form-item>
			<el-form-item label="用户姓名">
				<el-input v-model="sysUser.userName"></el-input>
			</el-form-item>

			<el-form-item label="用户所属地">
				<el-select v-model="sysUser.daId">
					<el-option v-for="item in dataarealist" :label="item.daName" :value="item.daId">
					</el-option>
				</el-select>
			</el-form-item>

			<el-form-item label="用户职责">
				<el-select v-model="sysUser.userRoleId">
					<el-option v-for="(item,index) in num" :label="item.name" :value="item.number"></el-option>
				</el-select>
			</el-form-item>

			<el-button type="primary" @click="update()">保存</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				sysUser: {
					userId: 0,
					userName: '',
					daId: 0,
					userRoleId: 0
				},
				dataarealist: [],
				sysUserlist: [],
				num: [{
					number: 1,
					name: '高管'
				}, {
					number: 2,
					name: '系统用户'
				}, {
					number: 3,
					name: '客户经理'
				}, {
					number: 4,
					name: '销售主管'
				}]

			}
		},

		created() {
			this.$axios.post('selectDataAreaAll')
				.then((response) => {
					this.dataarealist = response.data;
					this.sysUser.daId = this.dataarealist[0].daId;

				})
				.catch((error) => {
					console.log(error);
				});

			this.$axios.post('selectSysUserById', {
					userId: this.$route.query.userId
				})
				.then((response) => {
					this.sysUser = response.data;
				})
				.catch((error) => {
					console.log(error);
				});

			this.$axios.post('selectSysUserAll')
				.then((response) => {
					this.sysUserlist = response.data;
					this.sysUser.userRoleId = this.sysUserlist[0].userRoleId;

				})
				.catch((error) => {
					console.log(error);
				});
		},

		methods: {
			update() {

				this.$axios.post('updateSysUser', this.sysUser)
					.then((response) => {
						if(response.data == 1) {
							this.$router.push('/admin/sysUserList');
						} else {
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