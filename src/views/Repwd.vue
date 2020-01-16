<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<span>重置密码</span>
			</div>
			<div class="text item">
				<el-form ref="loginSysUser" :model="loginSysUser" label-width="100px">
					<el-form-item label="旧密码" required hide-required-asterisk>
						<el-input v-model="loginSysUser.userPassword"></el-input>
					</el-form-item>
					<el-form-item label="新密码" required hide-required-asterisk>
						<el-input v-model="newPwd" show-password></el-input>
					</el-form-item>
					<el-form-item label="确认密码" required hide-required-asterisk>
						<el-input v-model="again" show-password></el-input>
					</el-form-item>
					<el-button class="deng" type="primary" @click="repwdEvent()">保存</el-button>
					</el-form-item>
				</el-form>
			</div>
		</el-card>
	</div>
</template>

<script scoped>
	export default {
		created() {
			this.loginSysUser = this.$getSessionStorage('sysUser');
		},
		data() {
			return {
				loginSysUser: {
					userName: '',
					userPassword: ''
				},
				newPwd: '',
				again: ''
			}
		},
		methods: {
			repwdEvent() {
				if(this.newPwd == '') {
					alert('密码不能为空！');
					return;
				}
				if(this.again == '') {
					alert('确认密码不能为空！');
					return;
				}
				if(this.newPwd == this.again) {
					this.loginSysUser.userPassword = this.newPwd;
					this.$axios.post('updateSysUserByUserName', this.loginSysUser)
						.then((response) => {
							if(response.data == 1) {
								alert('密码重置成功');
								this.$removeSessionStorage('sysUser');
							} else {
								alert('密码重置失败');
							}
						})
						.catch((error) => {
							console.log(error);
						});
				}
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