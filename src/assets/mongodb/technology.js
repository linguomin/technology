//轮播图片数据
db.carousel.drop();
var carousel = [
  { href : "img/index/banner1.jpg" },
  { href : "img/index/banner2.jpg" },
  { href : "img/index/banner3.jpg" },
  { href : "img/index/banner4.jpg" },
  { href : "img/index/banner5.jpg" }
];
db.carousel.insert(carousel);

//主页手机楼层数据
db.indexPhone.drop();
var indexPhone = [
  {
    title : "隐形眼镜通过WI-FI对话智能手机",
    detail : "隐形眼镜通过Wi-Fi对话智能手机 据每日邮报报道，美国华盛顿大学的研究人员利用名为“交互式散射通信”技术， 可让隐形眼镜与智能手机或智能手表实现无线连接，并传输健康信息。",
    href : "img/index/index_phone1.jpg"
  },
  {
    title : "PHILIPS FLUID",
    detail : "这款Philips Fluid的设计是我们最为期待的智能手机形态，它使用了柔性OLED屏幕， 手机形态也可以随意改变。",
    href : "img/index/index_phone2.jpg"
  },
  {
    title : "IPHONE NEXT G",
    detail : "iPhone Next G是一款采用全息投影技术的智能手机，你不再需要一个真正4英寸或是5英寸大小的实物手机，只需配带类似智能手表的机身，便可以在手掌中投射出屏幕和整个操作系统。这种技术看上去非常酷",
    href : "img/index/index_phone3.jpg"
  },
  {
    title : "LUMIA SPINNER",
    detail : "欧洲一个名为 phonedesigner 的网站上出现了一款 Spinner Phone，被称为全球第一款配备独一无二的旋转摄像头的 Windows Phone 智能手机。",
    href : "img/index/index_phone4.jpg"
  },
  {
    href : "img/index/index_phone5.jpg"
  }
];
db.indexPhone.insert(indexPhone);

//主页手机楼层推荐数据
db.indexPhoneRecommend.drop();
var indexPhoneRecommend = [
  {
    title : "诺基亚五边形Win10 Mobile",
    href : "img/index/index_phone6.jpg"
  },
  {
    title : "iPhone 你没见过这8款配件",
    href : "img/index/index_phone7.jpg"
  },
  {
    title : "Olloclip四合一镜头",
    href : "img/index/index_phone8.jpg"
  },
  {
    title : "夏普无边框设计",
    href : "img/index/index_phone9.jpg"
  },
  {
    title : "悬浮接听电话",
    href : "img/index/index_phone10.jpg"
  },
  {
    title : "眼球识别/虹膜识别技术",
    href : "img/index/index_phone11.jpg"
  },
  {
    title : "康宁大猩猩玻璃",
    href : "img/index/index_phone12.jpg"
  },
  {
    title : "305SH搭载了S-CG Silicon 液晶显示屏",
    href : "img/index/index_phone13.jpg"
  },
  {
    title : "让人真正身临其境虚拟现实显示技术",
    href : "img/index/index_phone14.jpg"
  }
];
db.indexPhoneRecommend.insert(indexPhoneRecommend);

//主页AI楼层数据
db.indexAI.drop();
var indexAI = [
  {
    title : "人工智能已来",
    detail : "9月26日消息，据美国媒体报道，或许有天我们将在全世界各地看到它们",
    href : "img/index/index_ai1.jpg"
  },
  {
    title : "谷歌黑科技 MOBILE",
    detail : "谷歌深度学习项目“谷歌大脑”创始人格雷格·克拉多认为在未来十年内，这一设想将会变成现实",
    href : "img/index/index_ai2.jpg"
  },
  {
    title : "人工智能与律师抢饭碗",
    detail : "9月26日消息，据美国媒体报道，或许有天我们将在法庭上看到机器人说：尊敬的法官，请允许我自我介绍，我是原告律师HAL 9000。",
    href : "img/index/index_ai3.jpg"
  },
  {
    title : "《钢铁侠》人工智能即将成真",
    detail : "要是你的机器人或者手机什么的可以理解你说的话并且跟你互动，那你肯定乐趣非凡。",
    href : "img/index/index_ai4.jpg"
  },
  {
    title : "谷歌黑科技 MOBILE",
    detail : "谷歌深度学习项目“谷歌大脑”创始人格雷格·克拉多认为在未来十年内，这一设想将会变成现实。",
    href : "img/index/index_ai5.jpg"
  }
];
db.indexAI.insert(indexAI);

//主页vr楼层数据
db.indexVR.drop();
var indexVR = [
  {
    title : "VR神奇视觉效果，充满脑海",
    lookCount : "41548",
    href : "img/index/index_vr1.gif"
  },
  {
    title : "易瞳科技VR的大视角结合到MR设备中",
    lookCount : "15711",
    href : "img/index/index_vr2.jpg"
  },
  {
    title : "易瞳科技VR的大视角结合到MR设备中",
    lookCount : "25481",
    href : "img/index/index_vr3.jpg"
  },
  {
    title : "为了无拘无束的自由 VR用背包PC",
    lookCount : "49851",
    href : "img/index/index_vr4.jpg"
  },
  {
    title : "PrioVR全身体感改写VR交互历史",
    lookCount : "652",
    href : "img/index/index_vr5.jpg"
  },
  {
    title : "VR 来场非同寻常的乒乓游戏",
    lookCount : "178",
    href : "img/index/index_vr6.jpg"
  }
];
db.indexVR.insert(indexVR);

//主页VR recommend数据
db.indexVRRecommend.drop();
var indexVRRecommend = [
  {
    title : "育碧《狼人游戏VR》发售",
    href : "img/index/index_vr7.jpg"
  },
  {
    title : "学不会物理玩不好Grav|Lab",
    href : "img/index/index_vr8.jpg"
  },
  {
    title : "《蝙蝠侠:阿卡姆VR》居然并非“大作”",
    href : "img/index/index_vr9.jpg"
  },
  {
    title : "The Playroom VR即将上市",
    href : "img/index/index_vr10.jpg"
  },
  {
    title : "震撼VR科幻射击体验来袭",
    href : "img/index/index_vr11.jpg"
  },
  {
    title : "直播妹子头戴PS VR试玩的《远点》",
    href : "img/index/index_vr12.jpg"
  },
  {
    title : "《驾驶俱乐部》",
    href : "img/index/index_vr13.jpg"
  },
  {
    title : "体验VR过山车 简直不能更酷爽",
    href : "img/index/index_vr14.jpg"
  },
  {
    title : "《拾荒者的奥德赛》的科幻游戏画面",
    href : "img/index/index_vr15.jpg"
  }
];
db.indexVRRecommend.insert(indexVRRecommend);

//主页无人机楼层数据
db.indexW.drop();
var indexW = [
  {
    title : "易瞳科技MR",
    lookCount : "15511",
    href : "img/index/index_w1.jpg"
  },
  {
    title : "易瞳科技MR",
    lookCount : "85884",
    href : "img/index/index_w2.jpg"
  },
  {
    title : "军用无人机",
    lookCount : "561",
    href : "img/index/index_w3.jpg"
  },
  {
    title : "军用无人机",
    lookCount : "5151",
    href : "img/index/index_w4.jpg"
  },
  {
    title : "易瞳科技MR",
    lookCount : "12351",
    href : "img/index/index_w5.jpg"
  },
  {
    title : "易瞳科技MR",
    lookCount : "485311",
    href : "img/index/index_w6.jpg"
  },
  {
    title : "DJI Mavic Pro 沉浸式飞行体验",
    lookCount : "125441",
    href : "img/index/index_w7.jpg"
  },
  {
    title : "Aptonomy公司让无人机做保安",
    lookCount : "1255",
    href : "img/index/index_w8.jpg"
  },
  {
    title : "移动芯片厂商下一个目标：商用无人机",
    lookCount : "55658",
    href : "img/index/index_w9.jpg"
  }
];
db.indexW.insert(indexW);


//AI产品页展示数据
// db.createCollection("ai");
var news = [
    {
        "title": "松下研发可弯曲锂离子电池",
        "content": "日本松下公司将在下周 CEATEC 大会上展示可弯曲和扭曲的锂离子电池。这种电池可用于移动设备、穿戴式设备，甚至是形状不固定的智能衣服，在弯曲和扭曲的情况下也不会失去电量。 松下表示，借助自己的层压外体专利技术，这种灵...",
        "link": "立即探索松下研发可弯曲锂离子电池",
        "img": "../img/ai/ai1.jpg"
    },
    {
        "title": "人工智能机器人",
        "content": "人工智能机器人的发展，给人类及各行各业带来很多便捷，在技术上已是行业先锋，公司现任CTO带领某电商企业技术团队研发智能客服机器人，为该电商平台省下人工客服达10,000人数之多。",
        "link": "立即探索人工智能机器人",
        "img": "../img/ai/ai2.jpg"
    },
    {
        "title": "NASA开发壁虎机器人 可在太空中任意攀爬",
        "content": "9 月 30 日消息，据连线杂志报道，美国宇航局（NASA）下属喷气推进实验室（特别是行星机器人实验室）的科学家们正在研发一种类似壁虎的机器人，它几乎可以攀爬任何东西，包括宇航员最难以攀附的外星地表。在太空中，粘附性代...",
        "link": "立即探索第五代智能处理器",
        "img": "../img/ai/ai3.jpg"
    },
    {
        "img":"../img/ai/ai4.png",
        "titles":[
            "谷歌：指定开发者才能发行Daydream应用",
            "物联网产生海量数据 人工智能将成数据转化",
            "斯坦福人工智能百年研究：人工智能如何在医"
        ]
    },
    {
        "img":"../img/ai/ai5.png",
        "titles":[
            "5项黑科技改变未来生活，你最期待哪个？",
            "Wink发布Wink Hub2家庭物联网控制中心",
            "IAB报告：虚拟现实广告进入高需求阶段",
            "聊天机器人是＂真正革命＂? 未来将成为私人"
        ]
    },
    {
        "img":"../img/ai/ai6.png",
        "titles":[
            "布局人工智能 腾讯发展重心不再是微信",
            "李开复：我做人工智能时“生不逢时”",
            "美运营商:暂时别升级iOS10 可能有网络连接",
            "神舟十一号载人飞船将于10月中旬发射"
        ]
    }
];

var hotrecommand=[
    {
        "title":"最彻底的无人驾驶：这款卡车连驾驶室都没有",
        "coll":"车联网/无人驾驶",
        "time":"2017-09-30",
        "visited":2020,
        "content":"在本周举行的拉斯维加斯国际矿业及工程机械展上，小松最新发布的一款无人驾驶矿用卡车，将无人驾驶的概念执行得十分彻底，车上直接取消了司机驾驶室，重新对车身载荷分布进行优化，彻底实现了无人驾驶。 小松早在2008年就开始与矿业公司力拓（Rio Tinto）合作，在智利...",
        "keywords":["驾驶室","卡车","无人驾驶"],
        "img":"../img/ai/ai8.jpg"
    },
    {
        "title":"谷歌发布神经机器翻译 翻译质量接近笔译人员",
        "coll":"人工智能动态",
        "time":"2016-09-29",
        "visited":2101,
        "content":"据外媒报道，谷歌于昨日发布了网页版和移动版的谷歌翻译。在汉译英的过程中，会采用全新的神经机器翻译，而这个App每天要进行一千八百万次这样的翻译。此外，谷歌针对这个翻译系统的运作原理，发表了一篇学术论文。 早前，谷歌就曾表示它们在谷歌翻译中运用了神经网络...",
        "keywords":["谷歌","机器翻译","神经"],
        "img":"../img/ai/ai9.jpg"
    },
    {
        "title":"全球抗癌研究：人工智能，基因测序齐上阵",
        "coll":"人工智能动态",
        "time":"2017-09-29",
        "visited":1371,
        "content":"今年年初，美国总统奥巴马宣布发起抗癌登月计划，要求在现有基础上，两年内再为抗癌研究注入10亿美元的资金，目标是让癌症研究的相关进展速度翻一番，在5年内取得原本10年才能取得的成果。 本月早些时候，由癌症专家组成的美国蓝丝带顾问咨询委员会建议，抗癌登月计划....",
        "keywords":["基因检测","抗癌","研究"],
        "img":"../img/ai/ai10.jpg"
    }
];
var bjtj=[
    {
        "title":"瑞典科学家编辑人类胚胎基因为何惹大麻烦？",
        "class":"科技新闻",
        "img":"../img/ai/ai11.jpg"
    },
    {
        "title":"万里挑一的选址：FAST为何选择这个＂窝＂里建",
        "class":"VR/虚拟现实",
        "img":"../img/ai/ai12.jpg"
    },
    {
        "title":"微软HoloLens团队招兵买马 首席研究员强势加入",
        "class":"VR/虚拟现实",
        "img":"../img/ai/ai13.jpg"
    },
    {
        "title":"想进入VR行业却没技能？ Udacity VR项目开课",
        "class":"VR/虚拟现实",
        "img":"../img/ai/ai14.jpg"
    },
    {
        "title":"Oculus：VR交互为核心 会是下一步的重中之重",
        "class":"VR/虚拟现实",
        "img":"../img/ai/ai15.jpg"
    }


]
db.ai.drop();
db.ai.insert(news);
db.ai.insert(hotrecommand);
db.ai.insert(bjtj);

//uav无人机数据
db.col.drop();
var introduce=[
	{"src":"img/uav/logo_black.png"},
	{"title":"航拍飞行器"},
	{"title":"影像系统"},
	{"title":"行业应用"},
	{"title":"服务与支持"},
];
db.col.insert(introduce);
var nav=[
	{"title1":"个人航拍","title2":"MAVIC","title3":"PHANTOM 4","title4":"PHANTOM 3系列","title5":"PHANTOM 系列对比","title6":"专业航拍","title7":"ZENMUSE X","title8":"PHANTOM 4","title9":"CAMERAS","src":"img/uav/hangpai.jpg"},
	{"title1":"空中影响系统","title2":"X5R","title3":"X5","title4":"RONIN","title5":"DJ FOCUS","title6":"个人手持","title7":"OSMO MOBILE","title8":"OSMO+","title9":"OSMO PRO/RAW","src":"img/uav/yingxiang.jpg"},
	{"title1":"系统模块","title2":"飞行控制器","title3":"云台","title4":"图像传输","title5":"动力系统 系列对比","title6":"开发者平台","title7":"MIOO","title8":"GUIDANCE","title9":"CAMERAS","src":"img/hangye.jpg"},
	{"title1":"个人航拍","title2":"MAVIC","title":"PHANTOM 4","title":"PHANTOM 3系列"},
];
db.col.insert(nav);
var uPart2=[
	{"src":"img/uav/chan1.jpg","title1":"零距离","title2":"不管你在哪儿、服务无所不在","title3":"Join us"},
	{"src":"img/uav/chan2.jpg","title1":"精彩视频","title2":"分享视频、我有我的精彩","title3":"Join us"},
	{"src":"img/uav/chan3.jpg","title1":"精彩活动","title2":"满载精彩、发现非凡","title3":"Join us"},
];
db.col.insert(uPart2);
var uCarousel=[
{"src":"img/uav/lb1.png","caption":"机身设计——飞机折叠后尺寸为83*83*198mm、重量743g"},
{"src":"img/uav/lb2.png","caption":"FlightAutonomy——Mavic配备FlightAutonomy实现避障和精准悬停飞行"},
{"src":"img/uav/lb3.png","caption":"云台相机——相机配备三轴机械増稳云台、视频"},
{"src":"img/uav/lb4.png","caption":"飞行性能——充满电后最大飞行事件27分钟、最大速度可达18m/s"},
{"src":"img/uav/lb5.png","caption":"高清数字图传——最大图传距离7公里、实时监控画质1080P/720P"},
{"src":"img/uav/lb6.png","caption":"Dji Goggles——双1920x1080显示屏、高达1080p的全高清图传、OcuSync高带宽"},
];
db.col.insert(uCarousel);
var uPart4=
[
{"src":"img/uav/product1.jpg","title1":"Mavic","title2":"Mavic以小巧机身蕴藏卓越性能，巧妙的折叠设计，让你轻装上阵，尽情享受飞行乐趣。Mavic Pro汇集DJI核心技术，内置24个高性能计算内核、7公里*高清图传、视觉与超声波环境感知系统、4K高性能航拍相机和三轴一体化机械云台，配备的高性能电池能支持长达27分钟的续航。只需轻推摇杆或点击手机屏幕，就能触及更远的风景，探索不一样的世界。*FCC标准，在无干扰室外空旷环境测得"},
{"src":"img/uav/product3.jpg","title1":"PHANTOM 4","title2":"独具慧眼、智所未见"},
{"src":"img/uav/product4.jpg","title1":"经纬M600","title2":"集大成、达远见"},
];
db.col.insert(uPart4);
var uPart6One=[
	{"src":"img/uav/tab_1.jpg","title1":"捕捉更远的风景","title2":"无线图像传输质量是决定无人机飞行体验最核心的性能之一，Mavic并没有因机身体积小而选择Wi-Fi集成的芯片设计方案，而是开发了全新的DJI OcuSync高清图像传输技术，提供远达7公里*的传输距离与1080p/720p清晰度。OcuSync高清数字图像传输技术在传输距离、图像清晰度、实时传输和抗干扰性都比Wi-Fi传输技术更出色。"},
	{"src":"img/uav/tab_2.jpg","title1":"看见世界","title2":"远距离飞行时遇到障碍物遮挡，或者自动返航时高度设置不够，都会导致飞行器撞上障碍物。Mavic采用了DJI双目立体视觉技术，能够实时感知飞行前方30米的环境情况，可在15米范围内的障碍物前自动刹车悬停或者绕行，大幅提升了飞行的安全性。"},
	{"src":"img/uav/tab_3.jpg","title1":"精准悬停","title2":"基于GPS的定位技术只能在户外空旷环境下实现飞行器悬停定位功能，一旦飞行器靠近建筑或者其他遮挡GPS信号的环境时，便无法定位从而产生飞行漂移。Mavic采用了双目立体视觉系统实现室内或无GPS信号下的精准悬停。"}
];
db.col.insert(uPart6One);
var uPart6Two=
[
	{"src":"img/uav/tab_4.jpg","title1":"你的智能摄影师","title2":"不仅能智能识别拍摄对象并进行自动跟随飞行，还有更多智能跟随模式，能让你能轻轻松松拍出专业大片，Mavic是你的智能摄影师。"},
	{"src":"img/uav/tab_5.jpg","title1":"挥挥手，来张自拍","title2":"面朝Mavic相机，挥手示意就能轻松自拍。手势模式下，拍照就是如此简单。"},
	{"src":"img/uav/tab_6.jpg","title1":"精准微调","title2":"调整构图或在室内飞行时，响应过于灵敏会提升操控难度。三脚架模式降低了Mavic的飞行速度和灵敏度，操控更精准，航拍更轻松。"}
];
db.col.insert(uPart6Two);
var uPart6Three=[
	{"src":"img/uav/tab_7.jpg","title":"两套传感器 可靠性更高","title2":"传感器失效是无人机的重要安全威胁之一。Mavic配备了两套IMU和指南针传感器。在一组传感器出现异常时，备用传感器马上介入，保障飞行平稳可靠。"},
	{"src":"img/uav/tab_8.jpg","title1":"地形跟随","title2":"在自主飞行时，Mavic能自动保持与地面的相对高度。在起伏的山地或森林上方飞行也无需担忧，Mavic将自动调整高度，让飞行更安全。"},
	{"src":"img/uav/tab_9.jpg","title1":"更智能的电池","title2":"DJI智能电池技术让无人机电池更安全易用，便于维护，在长期放置时，能自动进入储存模式，让使用寿命更长久。"}

];
db.col.insert(uPart6Three);
var uPart7=[
  {"src":"img/uav/last.jpg","title":"生活不止眼前的坐井观天，还要去探索远方的地平线"}
];
db.col.insert(uPart7);