<template>
	<div>
		客户编号{{clientInfo.clientCode}}<br>
		客户名称*<input type="text" v-model="clientInfo.clientName"><br />
		客户所在地区*<input type="text" v-model="clientInfo.clientAreaId"><br />
		<!-- 1、北京  2、华北  3、中南  4、东北  5、西部 -->
		所属客户经理编号*<input type="text" v-model="clientInfo.clientCustId"><br />
		
		"客户等级*<input type="text" v-model="clientInfo.clientLevelId"><br />
		<!-- 1、普通客户 2、大客户 3、合作伙伴 4、战略合作伙伴" -->
		"客户满意度*<input type="text" v-model="clientInfo.clientContentment"><br />
		<!-- 1、☆ 2、☆☆ 3、☆☆☆ 4、☆☆☆☆ 5、☆☆☆☆☆" -->
		"客户信用度*<input type="text" v-model="clientInfo.clientCredit"><br />
		<!-- 1、☆ 2、☆☆ 3、☆☆☆ 4、☆☆☆☆ 5、☆☆☆☆☆" -->
		客户地址*<input type="text" v-model="clientInfo.clientAddress"><br />
		
		客户邮政编码*<input type="text" v-model="clientInfo.clientDakCode"><br />
		电话*<input type="text" v-model="clientInfo.clientTel"><br />
		传真*<input type="text" v-model="clientInfo.clientFax"><br />
		网址*<input type="text" v-model="clientInfo.clientNet"><br />
		营业执照注册号<input type="text" v-model="clientInfo.clientCharter"><br />
		
		法人*<input type="text" v-model="clientInfo.clientCorporation"><br />
		注册资金（万元）<input type="text" v-model="clientInfo.clientBankroll"><br />
		年营业额（万元）<input type="text" v-model="clientInfo.clientTurnoverYear"><br />
		开户银行*<input type="text" v-model="clientInfo.clientBank"><br />
		
		银行帐号*<input type="text" v-model="clientInfo.clientAccounts"><br />
		地税登记号<input type="text" v-model="clientInfo.clientNativeTax"><br />
		国税登记号<input type="text" v-model="clientInfo.clientCountryTax"><br />
		
		<button @click="updateClientInfo()">确认</button>
		<router-link to="/admin/ClientInfoList">返回</router-link>

	</div>
</template>

<script>
	export default{
		name:'UpdateClientInfo',
		data(){
			return{
				clientInfo:{
					clientCode:'',
					clientName:'',
					clientAreaId:'',
					clientCustId:'',
					clientLevelId:'',
					clientContentment:'',
					clientCredit:'',
					clientAddress:'',
					clientDakCode:'',
					clientTel:'',
					clientFax:'',
					clientNet:'',
					clientCharter:'',
					clientCorporation:'',
					clientBankroll:'',
					clientTurnoverYear:'',
					clientBank:'',
					clientAccounts:'',
					clientNativeTax:'',
					clientCountryTax:''
				
				}
			}
		},
		created(){
			this.$axios.post('selectClientInfoByClientCode',{
				clientCode:this.$route.query.clientCode
			})
				.then((response)=>{
					this.clientInfo = response.data;
				})
				.catch((error)=>{
					console.log(error);
				});
		},
		methods:{
			updateClientInfo(){
				this.$axios.post('updateClientInfo',this.clientInfo)
				.then((response)=>{
					if(response.data == 1){
						alert('修改成功');
						this.$router.push('/admin/ClientInfoList');
					}else{
						alert('修改失败！');
					}
				})
				.catch((error)=>{
					console.log(error);
				});
			}
		}
	}
</script>

<style>
</style>
