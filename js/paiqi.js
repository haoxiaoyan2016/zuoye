
$(function(){
    //开关按钮部分
    var schedule=$("#schedule");
    $(".switch").click(function(){
        if($("#schedule").is(':visible')){
            schedule.hide()
        }else{
            schedule.show()
        }
    });
    //日期
    var value=$("#vali_length_time").val();
    $(".triangle").click(function(){
        if(value>=2016){

        }
        $("#vali_length_time").attr("value",++value);

    });


    function bind(){
        //后台数据
        var req = {
            "one":{
                "employ":[7,10,11],
                "disabled":[1,2,4,6,25]
            },
            "two":{
                "employ":[8,11,12],
                "disabled":[1,18,14,16,17]
            },
            "three":{
                "employ":[28,21,19],
                "disabled":[5,18,14,26,27]
            }
        };

        //获取body下面的每一行tr
        var trs = $("table tbody tr");
        // 遍历后端返回值，活的月份进行区分，month：月份，req:返回参数
        for (var month in req){
            //每个月份进行筛选
            if(month=="one"){
                //employ:选取已占用日期返回值，disabled：选取不可用日期返回值
                var employ = req["one"]["employ"];
                var dis = req["one"]["disabled"];
                //分别遍历已占用和不可用日期，做页面处理
                for (var day in employ){
                    //找到第一行下面的所用td，，将遍历的日期当作索引选取到页面的td
                    trs.eq(0).find("td").eq(employ[day]).addClass("disabled cur")
                }
                for (var day in dis){
                    trs.eq(0).find("td").eq(dis[day]).addClass("already cur")
                }
            }else if(month=="two"){
                var employ = req["two"]["employ"];
                var dis = req["two"]["disabled"];
                for (var day in employ){
                    trs.eq(1).find("td").eq(employ[day]).addClass("disabled cur")
                }
                for (var day in dis){
                    trs.eq(1).find("td").eq(dis[day]).addClass("already cur")
                }
            }else if(month=="three"){
                var employ = req["three"]["employ"];
                var dis = req["three"]["disabled"];
                for (var day in employ){
                    trs.eq(2).find("td").eq(employ[day]).addClass("disabled cur")
                }
                for (var day in dis){
                    trs.eq(2).find("td").eq(dis[day]).addClass("already cur")
                }
            }
        }
//点击变色
        $("tbody td:not('.first_column,.disabled')").click(function(){
            if(! $(this).hasClass("cur")) {
                $(this).toggleClass("my_disabled")
            }
        });

    }



});


