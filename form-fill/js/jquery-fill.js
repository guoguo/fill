
$(function(){
    var $form=$('#J-create');
    var $input=$form.find('input[type="text"],select');
    var $body=$('body');
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
            var url=$(ele).data('url');
            var activityId = $('input[name=activityId]').val();
            var html='<option value="">请选择</option>';
            $.getJSON(url, {activityId: activityId, id: '130000'}, function (json) {
                $.each(json['data'], function (inum, value) {
                    html += '<option value="' + value['id'] + '">' + value['name'] + '</option>';
                });
                $('select[name=userCityId]').html(html).val(130100);

            });
            return 130000;
        },
        email:function(){
            var num=parseInt(Math.random()*10000000000)+'@aaa.com';
            return num;
        }
    };

    function fill(){
        $input.each(function(index,ele){
            var name=$(ele).attr('name');
            var name=ele.getAttribute('name');
            var _val=fillDate[name]?fillDate[name](ele):111;
            ele.value=_val;
        });
        for (var i = 1; i < 100; i++) {
            var $obj=$body.find('input[name="question'+i+'"]');
            if($obj.length<=0){
                return false;
            }
            $obj.eq(0).prop('checked',true);
        };

    }
    fill();
})

