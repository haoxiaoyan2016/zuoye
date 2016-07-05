
$(function(){
    //���ذ�ť����
    var schedule=$("#schedule");
    $(".switch").click(function(){
        if($("#schedule").is(':visible')){
            schedule.hide()
        }else{
            schedule.show()
        }
    });
    //����
    var value=$("#vali_length_time").val();
    $(".triangle").click(function(){
        if(value>=2016){

        }
        $("#vali_length_time").attr("value",++value);

    });


    function bind(){
        //��̨����
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

        //��ȡbody�����ÿһ��tr
        var trs = $("table tbody tr");
        // ������˷���ֵ������·ݽ������֣�month���·ݣ�req:���ز���
        for (var month in req){
            //ÿ���·ݽ���ɸѡ
            if(month=="one"){
                //employ:ѡȡ��ռ�����ڷ���ֵ��disabled��ѡȡ���������ڷ���ֵ
                var employ = req["one"]["employ"];
                var dis = req["one"]["disabled"];
                //�ֱ������ռ�úͲ��������ڣ���ҳ�洦��
                for (var day in employ){
                    //�ҵ���һ�����������td���������������ڵ�������ѡȡ��ҳ���td
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
//�����ɫ
        $("tbody td:not('.first_column,.disabled')").click(function(){
            if(! $(this).hasClass("cur")) {
                $(this).toggleClass("my_disabled")
            }
        });

    }



});


