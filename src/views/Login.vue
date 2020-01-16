<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>登陆</span>
			</div>
			<div class="text item">
				<el-form ref="sysUser" :model="sysUser" label-width="60px">
					<el-form-item label="用户名">
						<el-input v-model.trim="sysUser.userName"></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input v-model.trim="sysUser.userPassword" show-password></el-input>
					</el-form-item>
					<el-button class="deng" type="primary" @click="login()">登陆</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-card>
	</div>
</template>

<script scoped>
	export default {
		data() {
			return {
				sysUser: {
					userName: '',
					userPassword: ''
				}
			}
		},
		methods: {
			login() {
				if(this.sysUser.userName == '') {
					alert('用户名不能为空！');
					return;
				}
				if(this.sysUser.userPassword == '') {
					alert('密码不能为空！');
					return;
				}

				this.$axios.post('selectSysUserByUserName', this.sysUser)
					.then((response) => {
						if(response.data == '') {
							alert('用户名输入错误！');
						} else {
							if(response.data.userPassword != this.sysUser.userPassword) {
								alert('密码输入错误！');
							} else {
								this.$setSessionStorage('sysUser', response.data);
								this.$router.push('/admin');
							}
						}
					})
					.catch((error) => {
						console.log(error);
					});
			}
		}
	}
</script>

<style scoped>
	.text {
		font-size: 14px;
	}
	
	.item {
		margin-bottom: 18px;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
	
	.box-card {
		width: 350px;
		margin: 0 auto;
		margin-top: 200px;
	}
	
	.deng {
		margin-left: 120px;
	}
</style>