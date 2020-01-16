<template>
	<div>
		姓名：<input type="text" v-model="clientLintman.clientLinkmanName">
		性别：<input type="radio" value="0" v-model="clientLintman.clientLinkmanSex">男
			  <input type="radio" value="1" v-model="clientLintman.clientLinkmanSex">女<br>
		职位：<input type="text" v-model="clientLintman.clientLinkmanJob">
		办公电话：<input type="text" v-model="clientLintman.clientLinkmanTel"><br>
		手机：<input type="text" v-model="clientLintman.clientLinkmanMobile"><br>
		备注：<input type="text" v-model="clientLintman.remark"><br>
		<button @click="addClientLintman()">保存</button>
		<router-link to="/admin/">返回</router-link>
	</div>

</template>

<script>
	export default {
		name: 'AddClientLintman',
		data() {
			return {
				clientLintman: {
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
		methods: {
			addClientLintman() {
				this.$axios.post('insertClientLinkman', {
						clientCode: this.$route.query.clientCode
					})
					.then((response) => {
						if (response.data == 1) {
							this.$router.push('/admin/addClientLintman');
							alert('数据添加成功');
						} else {
							alert('添加失败');
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
</style>
