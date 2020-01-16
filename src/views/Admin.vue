<template>
	<div>
		<el-container>
			<el-header>CRM客户关系管理系统 Ver.1.0.0
				<div class="anniu">
                    <el-row>
					    <el-button type="primary" @click="repwdView()">重置密码</el-button>
					    <el-button type="primary" @click="exitEvent()">安全退出</el-button>
				    </el-row>
                </div>
				<div class="quanxian">
					欢迎:{{this.$getSessionStorage('sysUser').userName}}
                </div>
            </el-header>
			<el-container>
				<el-aside width="200px">
					<span style="background-color: #D9EDF7; display: block;">客户关系管理系统</span>
					<el-menu unique-opened default-active="2" router class="el-menu-vertical-demo" background-color="#F5F5F5" text-color="#2B3142" active-text-color="#ffd04b">
						<el-submenu index="1">
							<template slot="title">
								<span>营销管理</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="/admin/saleChanceList">销售机会管理 </el-menu-item>
								<el-menu-item index="/admin/salePlanList">客户开发计划</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="2">
							<template slot="title">
								<span>客户管理</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="">客户信息管理 </el-menu-item>
								<el-menu-item index="1-2">客户流失管理</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="3">
							<template slot="title">
								<span>服务管理</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="/admin/servercreate">服务创建 </el-menu-item>
								<el-menu-item index="/admin/serviceAssignment">服务分配</el-menu-item>
								<el-menu-item index="/admin/serverHandleList">服务处理</el-menu-item>
								<el-menu-item index="/admin/serverFeedbackList">服务反馈</el-menu-item>
								<el-menu-item index="/admin/ServerDetailedList">服务归档</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="4">
							<template slot="title">
								<span>统计报表</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="/admin/keHuGongXian">客户贡献分析</el-menu-item>
								<el-menu-item index="/admin/keHuGouCheng">客户构成分析</el-menu-item>
								<el-menu-item index="/admin/keHuFuWu">客户服务分析</el-menu-item>
								<el-menu-item index="/admin/keHuLiuShi">客户流失分析</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="5">
							<template slot="title">
								<span>基础数据</span>
							</template>
							<el-menu-item-group>
								<el-menu-item index="/admin/dataClientlevelList">数据字典-客户等级 </el-menu-item>
								<el-menu-item index="/admin/dataServerTypeList">数据字典-服务类别</el-menu-item>
								<el-menu-item index="/admin/dataAreaList">数据字典-地区</el-menu-item>
								<el-menu-item index="/admin/sysUserList">数据字典-用户</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
					</el-menu>
				</el-aside>
				<el-main id="main">
					<router-view></router-view>
				</el-main>
			</el-container>
			<el-footer>&copy; 胡建龙组版权所有 www.neusoft.com</el-footer>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'Admin',
		data() {
			return {
				bodyHeight: 0
			}
		},
		mounted() {
			document.getElementById('main').style.height = document.body.clientHeight - 120 + 'px';
			this.bodyHeight = document.body.clientHeight;
			//监听浏览器窗口尺寸改变事件
			window.onresize = () => {
				//获取body高度，赋值给this.bodyHeight
				this.bodyHeight = document.body.clientHeight;
			}
		},
		watch: {
			bodyHeight: function() {
				document.getElementById('main').style.height = this.bodyHeight - 120 + 'px';
			}
		},
		methods:{
			exitEvent(){
				this.$removeSessionStorage('sysUser');
			},
			repwdView(){
				this.$router.push({path:'Repwd'});
			}
		}

	}
</script>

<style>
	html,
	body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
	
	.el-header,
	.el-footer {
		background-color: #438EB9;
		color: white;
		text-align: center;
		line-height: 60px;
		font-family: "bodoni mt";
	}
	
	.el-header {
		text-align: left;
		font-size: 22px;
	}
	
	.el-aside {
		background-color: #FFFFFF;
		color: #333;
		text-align: center;
		line-height: 50px;
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
	}
	
	body>.el-container {
		margin-bottom: 40px;
	}
	
	.quanxian {
		float: right;
		margin-right: 20px;
		font-size: 18px;
	}
	.anniu{
		float: right;
		margin-right: 30px;
	}
</style>