// js

// 假数据
let List = [
	{
		"LeftId": 1,
		"LeftName": "小说",
		"RightList": [
		{
			"RightId": 11,
      "RightName": "1"
      
		},
		]
  },
	{
		"LeftId": 2,
		"LeftName": "期刊",
		"RightList": [
		{
			"RightId": 21,
			"RightName": "商品21"
		},
		]
  },
  {
		"LeftId": 3,
		"LeftName": "黄色小说",
		"RightList": [
		{
			"RightId": 31,
			"RightName": "商品31"
    },
    {
			"RightId": 32,
			"RightName": "商品32"
		},
		]
  },
  {
		"LeftId": 3,
		"LeftName": "故事",
		"RightList": [
		{
			"RightId": 31,
			"RightName": "商品31"
    },
    {
			"RightId": 32,
			"RightName": "商品32"
		},
		]
  },
  {
		"LeftId": 3,
		"LeftName": "论文",
		"RightList": [
		{
			"RightId": 31,
			"RightName": "商品31"
    },
    {
			"RightId": 32,
			"RightName": "商品32"
		},
		]
  },
  {
		"LeftId": 3,
		"LeftName": "名著",
		"RightList": [
		{
			"RightId": 31,
			"RightName": "商品31"
    },
    {
			"RightId": 32,
			"RightName": "商品32"
		},
		]
  },
  {
		"LeftId": 3,
		"LeftName": "故事",
		"RightList": [
		{
			"RightId": 31,
			"RightName": "商品31"
    },
    {
			"RightId": 32,
			"RightName": "商品32"
		},
		]
	},
]

Page({
	/**	
	 * 页面的初始数据
	 */
	data: {
		List : List,
		selectLeftId : null,
		selectRightId : null,
		currentIndex_L : null,
		currentIndex_R : null,
		scrollTop : 0
	},
	
	/**
	 * 左导航点击事件
	 */
	bindleLeftItemTap(e) {
		const {index} = e.currentTarget.dataset;
		this.setData({
			currentIndex_L:index,
			currentIndex_R : null,
			selectLeftId : this.data.List[index].LeftId,
			selectRightId : null,
			scrollTop : 0,
		}) 
	},

	/**
	 * 右导航点击事件
	 */
	bindleRightItemTap(e) {
		const {index} = e.currentTarget.dataset;
		let index_L = this.data.currentIndex_L;
		this.setData({
			currentIndex_R : index,
			selectRightId : this.data.List[index_L].RightList[index].RightId,
		}) 
	},

	/**
	 * 底部查看详情按钮点击事件
	 */
	toDetail(e) {
		var selectLeftId = this.data.selectLeftId;
		var selectRightId = this.data.selectRightId;

		if(selectLeftId === null){
			wx.showToast({
				title: '请选择一种分类或商品！',
				icon: 'none',
				duration: 1500,
				mask: true
			});
			return;
		}
		if(selectRightId != null) {
			wx.navigateTo({
				url: '/pages/Detail/Detail' + '?' +
				'selectLeftId=' + selectLeftId + 
				'&selectRightId=' + selectRightId,
				});
			}
			else {
				wx.navigateTo({
				url: '/pages/Detail/Detail' + '?' +
				'&selectLeftId=' + selectLeftId,
			});
		}	
	},
})
