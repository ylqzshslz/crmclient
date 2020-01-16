import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import Repwd from '../views/Repwd.vue'
import SaleChanceList from '../views/sale/SaleChanceList.vue'
import AddSaleChance from '../views/sale/AddSaleChance.vue'
import EditSaleChance from '../views/sale/EditSaleChance.vue'
import DueSaleChance from '../views/sale/DueSaleChance.vue'
import SalePlanList from '../views/sale/SalePlanList.vue'
import DrawUpPlan from '../views/sale/DrawUpPlan.vue'

import ServerCreate from '../views/servermanagement/ServerCreate.vue'
import ServiceAssignment from '../views/servermanagement/ServiceAssignment.vue'
import ServerFeedback from '../views/servermanagement/ServerFeedback.vue'
import ServerFeedbackList from '../views/servermanagement/ServerFeedbackList.vue'
import ServerHandle from '../views/servermanagement/ServerHandle.vue'
import ServerHandleList from '../views/servermanagement/ServerHandleList.vue'
import ServerDetailed from '../views/servermanagement/ServerDetailed.vue'
import ServerDetailedList from '../views/servermanagement/ServerDetailedList.vue'
import KeHuGongXian from '../views/rept/KeHuGongXian.vue'
import KeHuGouCheng from '../views/rept/KeHuGouCheng.vue'
import KeHuFuWu from '../views/rept/KeHuFuWu.vue'
import KeHuLiuShi from '../views/rept/KeHuLiuShi.vue'

import DataAreaList from '../views/base/DataArea/DataAreaList.vue'
import AddDataArea from '../views/base/DataArea/AddDataArea.vue'
import UpdateDataArea from '../views/base/DataArea/UpdateDataArea.vue'
import DataClientlevelList from '../views/base/DataClientLevel/DataClientLevelList.vue'
import AddDataClientlevel from '../views/base/DataClientLevel/AddDataClientLevel.vue'
import UpdateDataClientlevel from '../views/base/DataClientLevel/UpdateDataClientLevel.vue'
import DataServerTypeList from '../views/base/DataServerType/DataServerTypeList.vue'
import AddDataServerType from '../views/base/DataServerType/AddDataServerType.vue'
import UpdateDataServerType from '../views/base/DataServerType/UpdateDataServerType.vue'
import SysUserList from '../views/base/SysUser/SysUserList.vue'
import AddSysUser from '../views/base/SysUser/AddSysUser.vue'
import UpdateSysUser from '../views/base/SysUser/UpdateSysUser.vue'

import ClientInfoList from '../views/clie/clientInfo/ClientInfoList.vue'
import ClientReprieveLoseList from '../views/clie/clientReprieveLose/ClientReprieveLoseList.vue'
import UpdateClientInfo from '../views/clie/clientInfo/UpdateClientInfo.vue'
import ClientLinkmanList from '../views/clie/clientLinkman/ClientLinkmanList.vue'
import Orders from '../views/clie/orders/OrdersList.vue'
import AddClientLintman from '../views/clie/clientLinkman/AddClientLintman.vue'
import UpdateClientLinkman from '../views/clie/clientLinkman/UpdateClientLinkman.vue'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Welcome',
		component: Login
	},
	{
		path: '/login',
		name: 'Login',
		component: Login

	},
	{
		path: '/repwd',
		name: 'Repwd',
		component: Repwd
	},
	{
		path: '/admin',
		name: 'Admin',
		component: Admin,
		children: [{
				path: '/admin/saleChanceList',
				name: 'SaleChanceList',
				component: SaleChanceList
			},
			{
				path: '/admin/addSaleChance',
				name: 'AddSaleChance',
				component: AddSaleChance
			},
			{
				path: '/admin/editSaleChance',
				name: 'EditSaleChance',
				component: EditSaleChance
			},
			{
				path: '/admin/dueSaleChance',
				name: 'DueSaleChance',
				component: DueSaleChance
			},
			{
				path: '/admin/salePlanList',
				name: 'SalePlanList',
				component: SalePlanList
			},
			{
				path: '/admin/drawUpPlan',
				name: 'DrawUpPlan',
				component: DrawUpPlan
			},
			{
				path: '/admin/serverCreate',
				name: 'ServerCreate',
				component: ServerCreate
			}, {
				path: '/admin/keHuGongXian',
				name: 'KeHuGongXian',
				component: KeHuGongXian
			}, {
				path: '/admin/keHuGouCheng',
				name: 'KeHuGouCheng',
				component: KeHuGouCheng
			},
			{
				path: '/admin/keHuFuWu',
				name: 'KeHuFuWu',
				component: KeHuFuWu
			},
			{
				path: '/admin/keHuLiuShi',
				name: 'KeHuLiuShi',
				component: KeHuLiuShi
			},
			{
				path: '/admin/serviceAssignment',
				name: 'ServiceAssignment',
				component: ServiceAssignment
			},
			{
				path: '/admin/serverFeedback',
				name: 'ServerFeedback',
				component: ServerFeedback
			},
			{
				path: '/admin/serverFeedbackList',
				name: 'ServerFeedbackList',
				component: ServerFeedbackList
			},
			{
				path: '/admin/serverHandle',
				name: 'ServerHandle',
				component: ServerHandle
			},
			{
				path: '/admin/serverHandleList',
				name: 'ServerHandleList',
				component: ServerHandleList
			},
			{
				path: '/admin/serverDetailed',
				name: 'ServerDetailed',
				component: ServerDetailed
			},
			{
				path: '/admin/serverDetailedList',
				name: 'ServerDetailedList',
				component: ServerDetailedList
			},
			{

				path: '/admin/dataAreaList',
				name: 'DataAreaList',
				component: DataAreaList
			}, {
				path: '/admin/addDataArea',
				name: 'AddDataArea',
				component: AddDataArea
			}, {
				path: '/admin/updateDataArea',
				name: 'UpdateDataArea',
				component: UpdateDataArea
			}, {
				path: '/admin/dataClientlevelList',
				name: 'DataClientlevelList',
				component: DataClientlevelList
			}, {
				path: '/admin/addDataClientlevel',
				name: 'AddDataClientlevel',
				component: AddDataClientlevel
			}, {
				path: '/admin/updateDataClientlevel',
				name: 'UpdateDataClientlevel',
				component: UpdateDataClientlevel
			}, {
				path: '/admin/dataServerTypeList',
				name: 'DataServerTypeList',
				component: DataServerTypeList
			}, {
				path: '/admin/addDataServerType',
				name: 'AddDataServerType',
				component: AddDataServerType
			}, {
				path: '/admin/updateDataServerType',
				name: 'UpdateDataServerType',
				component: UpdateDataServerType
			}, {
				path: '/admin/sysUserList',
				name: 'SysUserList',
				component: SysUserList
			}, {
				path: '/admin/addSysUser',
				name: 'AddSysUser',
				component: AddSysUser
			}, {
				path: '/admin/updateSysUser',
				name: 'UpdateSysUser',
				component: UpdateSysUser
			}, {
				path: '/admin/clientInfoList',
				name: 'ClientInfoList',
				component: ClientInfoList,
			}, {
				path: '/admin/clientReprieveLoseList',
				name: 'ClientReprieveLoseList',
				component: ClientReprieveLoseList
			}, {
				path: '/admin/updateClientInfo',
				name: 'UpdateClientInfo',
				component: UpdateClientInfo
			}, {
				path: '/admin/clientLinkmanList',
				name: 'ClientLinkmanList',
				component: ClientLinkmanList
			}, {
				path: '/admin/orders',
				name: 'Orders',
				component: Orders
			}, {
				path: '/admin/addClientLintman',
				name: 'AddClientLintman',
				component: AddClientLintman
			}, {
				path: '/admin/updateClientLinkman',
				name: 'UpdateClientLinkman',
				component: UpdateClientLinkman
			},
			{
				path: '/admin/',
				name: 'Welcome',
				component: HelloWorld

			}
		]
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router