<?php
require_once ("./init.php");
$output = [
  'carousel' => [],
  'indexPhone' => [],
  'indexPhoneRecommend' => [],
  'indexAI' => [],
  'indexVR' => [],
  'indexVRRecommend' => [],
  'indexW' => [],
];
//获取轮播数据
$carousel = $db -> carousel;
$cursor1 = $carousel -> find();
//迭代显示文本标题
foreach($cursor1 as $carousel){
  $output['carousel'][] = $carousel['href'];
}

//获取楼层手机的数据
$indexPhone = $db -> indexPhone;
$cursor2 = $indexPhone -> find();
foreach ($cursor2 as $indexPhone){
  $output['indexPhone'][] = $indexPhone;
}

//获取楼层手机推荐的数据
$indexPhoneRecommend = $db -> indexPhoneRecommend;
$cursor7 = $indexPhoneRecommend -> find();
foreach ($cursor7 as $indexPhoneRecommend){
  $output['indexPhoneRecommend'][] = $indexPhoneRecommend;
}

//获取楼层AI的数据
$indexAI = $db -> indexAI;
$cursor3 = $indexAI -> find();
foreach ($cursor3 as $indexAI){
	$output['indexAI'][] = $indexAI;
}

//获取楼层VR的数据
$indexVR = $db -> indexVR;
$cursor4 = $indexVR -> find();
foreach ($cursor4 as $indexVR){
	$output['indexVR'][] = $indexVR;
}

//获取楼层VR的数据
$indexVRRecommend = $db -> indexVRRecommend;
$cursor5 = $indexVRRecommend -> find();
foreach ($cursor5 as $indexVRRecommend){
	$output['indexVRRecommend'][] = $indexVRRecommend;
}

//获取楼层无人机的数据
$indexW = $db -> indexW;
$cursor6 = $indexW -> find();
foreach ($cursor6 as $indexW){
	$output['indexW'][] = $indexW;
}

//输出json数据格式
echo json_encode($output);