<template>
	<div>
		姓名：<input type="text" v-model="clientLinkmanList.clientLinkmanName">
		性别：<input type="radio" value="0" v-model="clientLinkmanList.clientLinkmanSex"><label for="0">男</label>
		<input type="radio" value="1" v-model="clientLinkmanList.clientLinkmanSex"><label for="1">女</label><br>
		职位：<input type="text" v-model="clientLinkmanList.clientLinkmanJob">
		办公电话：<input type="text" v-model="clientLinkmanList.clientLinkmanTel"><br>
		手机：<input type="text" v-model="clientLinkmanList.clientLinkmanMobile"><br>
		备注：<input type="text" v-model="clientLinkmanList.remark"><br>
		<button @click="updateClientLinkman(clientLinkmanList.clientCode)">确定</button>
		<router-link to="/admin/ClientInfoList">返回</router-link>


	</div>
</template>

<script>
	export default {
		name: 'ClientLinkmanList',
		data() {
			return {
				clientLinkmanList: {
					clientLinkmanId: '',
					clientLinkmanName: '',
					clientLinkmanSex: '',
					clientLinkmanJob: '',
					clientLinkmanTel: '',
					clientLinkmanMobile: '',
					remark: '',
					clientCode: ''
				}
			}
		},
		created() {

			this.$axios.post('selectClientLinkman', {
					clientCode: this.$route.query.clientCode
					
				})
				.then((response) => {
					this.clientLinkmanList = response.data;

				})
				.catch((error) => {
					console.log(error);
				});


		},
		method: {

			updateClientLinkman() {
				this.$axios.post('updateClientLinkman', this.clientLinkmanList)
					.then((response) => {
						if (response.data == 1) {
							alert('修改成功');
							this.$router.push('/admin/updateClientLinkman');
						} else {
							alert('修改失败！');
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
