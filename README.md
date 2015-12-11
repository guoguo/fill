#让测试变的更简单
##主要功能：
1.实现匹配路径下的表单自动填充
2.可自行改变自己要匹配的条件

主要的匹配的表单有：
```
name＝'name'
name='mobile'
name='email'
type='radio'&&name='question'+i
type=select&&name='userProvinceId'
name='birthday'
```

默认匹配新增form下的表单，如果需要匹配修改表单，则在update form上添加属性'data-fill'=true;

本扩展分为两个版本，一个是jquery,一个是原生js的，原生的比较精简，代码量少。

扩展icon是随便找的，如有雷同，纯属巧合。
