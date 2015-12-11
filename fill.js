    var fillDate={
        name:function(){
            return '你好';
        },
        mobile:function(){
            var num=parseInt('135'+Math.random()*100000000);
            return num;
        },
        birthday:function(){
            return '2000-03-04';
        },
        userProvinceId:function(ele){
            var url=ele.getAttribute('data-url');
            var idEle=hasAttr(formArr['create'].getElementsByTagName('input'),'name','activityId');

            var activityId = idEle[0].value;
            var html='<option value="">请选择</option>';
            loadXMLDoc(url+'?activityId='+activityId+'&&id=130000',function (json) {
                var jsonData=eval("(" + json + ")");console.info(jsonData['data']);
                for(inum in jsonData['data']){

                    html += '<option value="' + jsonData['data'][inum]['id'] + '">' + jsonData['data'][inum]['name'] + '</option>';
                }
                var selectEle=hasAttr(document.getElementsByTagName('select'),'name','userCityId');
                ele.value=130000;
                selectEle[0].innerHTML=html;
                console.info(html);

                selectEle[0].value=130100;

            });
            return 130000;
        },
        email:function(){
            var num=parseInt(Math.random()*10000000000)+'@aaa.com';
            return num;
        }
    };

    var $form=document.getElementsByTagName('form');

    var formArr=[];
    function init(){
        for (var i = 0; i < $form.length; i++) {
            if($form[i].getAttribute('action')=='/index/create'){
                formArr['create']=$form[i];
            }
            if($form[i].getAttribute('action')=='/index/update'){
                formArr['update']=$form[i];
            }
        };
        fill(formArr['create']);
        if(formArr['update'].getAttribute('data-fill')){
            fill(formArr['update']);
        }
    }
    init();


    function fill(parent){
        var $input=parent.getElementsByTagName('input');
        var selectList=parent.getElementsByTagName('select');
        var radioList=hasAttr($input,'type','radio');
        var inputList=hasAttr($input,'type','text');
        var telList=hasAttr($input,'type','tel');
        var emailList=hasAttr($input,'type','email');
        each(inputList);
        each(telList);
        each(emailList);

         for (var i = 0; i < selectList.length; i++) {
            var name=selectList[i].getAttribute('name');
            fillDate[name]?fillDate[name](selectList[i]):false;
        };

        for (var i = 1; i < 10; i++) {
            var qList=[];
            for (var j = 0; j < radioList.length; j++) {
                var cname=radioList[j].getAttribute('name');

                if(cname=='question'+i){
                    qList[qList.length]=radioList[j];
                    break;
                }
            };

            if(qList.length>0){
                qList[0].checked=true;

            }

        };
    }

    function each(ele){
        for (var i = 0; i < ele.length; i++) {
            var name=ele[i].getAttribute('name');
            var _val=fillDate[name]?fillDate[name](ele[i]):111;
            ele[i].value=_val;
        };
    }

    function loadXMLDoc(url,fn) {
         var xmlhttp;
         if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
             xmlhttp = new XMLHttpRequest();
         } else { // code for IE6, IE5
             xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
         }
         xmlhttp.onreadystatechange = function() {
             if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                fn(xmlhttp.responseText);
             }
         }
         xmlhttp.open("GET", url, true);
         xmlhttp.send();
     }

    function hasAttr(obj,type,name){
        var type=type;
        var name=name;
        var list=[];
        for (var i = 0; i < obj.length; i++) {
            var _name=obj[i].getAttribute(type);
            if(_name==name){
                list[list.length]=obj[i];
            }
        }
        return list;
    }

    function attr(obj,type){
        var type=type;
        var list=[];
        for (var i = 0; i < obj.length; i++) {
            if(obj[i].hasAttribute(type)){
                list[list.length]=obj[i];
            }
        }
        return list;
    }


