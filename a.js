success: function(data) {
              console.log(data);
              if(data.ret_code == "1"){
                  var str1 = "",str2 = "";
                  if(data.data[0].picture_list.length == 0){
                      $(".swiper-container").hide();
                      $(".mr_img").show();
                  }else{
                      $(".swiper-container").show();
                      $(".mr_img").hide();
                      setTimeout(function(){
                            var mySwiper = new Swiper('.swiper-container', {
                                autoplay: 2000,//可选选项，自动滑动
                                mode : 'horizontal',
                                pagination: {
                                    el: '.swiper-pagination',
                                },
                                speed:1000,
                                autoplay:true,
                                loop : true,
                            })
                         }, 100);
                        let array =data.data[0].picture_list;
                        console.log(sw_url)
                        // window.location.href = sw_url + "fireyu/qrscan/page/czw/news.html?id="+ id;
                        for(var i = 0 ; i<array.length ; i++){
                            $('.swiper-wrapper').append('<div class="swiper-slide">'+array[i].ftitle+'</div>')
                        }
                      // for(var i=0;i<data.data[0].picture_list.length;i++){                
                      //     if(data.data[0].picture_list[i].fimg_url == ""){
                      //         str1 = "fireyu/qrscan/images/loading_bg.png";
                      //         str2 = "";
                      //     }else{
                      //         str1 = data.data[0].picture_list[i].fimg_url;
                      //         str2 = data.data[0].picture_list[i].ftitle;
                      //     }
                      //     arr1.push(str1);
                      //     arr2.push(str2);
                      //     arr3.push(data.data[0].picture_list[i].finfo_uuid);
                      // }
                      // $.each($('.swiper-slide'),function(i,val){
                      //       var i = $(this).attr("data-swiper-slide-index");
                      //       $(this).css("background","url(" + arr1[i] + ")");
                      //       $(this).css("background-size","100% 100%");
                      //       $(this).find("p").html(arr2[i]);
                      //       $(this).attr("id",arr3[i]);
                      //   })
                  }
                  $(".fdic_name").html(data.data[0].fdic_name);
                  $(".fsocial_name").html(data.data[0].fsocial_name);
                  $(".faddress").html(data.data[0].faddress);
                  if(host_url == "http://z.fireyu.com"){
                      var man_str = data.data[0].flink_man;
                      $(".flink_man").html(formatName(man_str));
                      var tel_str = data.data[0].ftel_no;
                      var phnumAfter = "";
                      if(tel_str.length == 11){
                            phnumAfter = tel_str.substr(0,3) + "****" + tel_str.substr(7);
                      }
                      $(".ftel_no").html(phnumAfter);
                  }else{
                      $(".flink_man").html(data.data[0].flink_man);
                      $(".ftel_no").html(data.data[0].ftel_no);
                  }
                  $(".grid_name").html(data.data[0].grid_name);
                  $(".grid_tel").html(data.data[0].grid_tel);
                  $(".cadre_name").html(data.data[0].cadre_name);
                  $(".cadre_tel").html(data.data[0].cadre_tel);
                  $(".police_name").html(data.data[0].police_name);
                  $(".police_tel").html(data.data[0].police_tel);
                  $(".brother_name").html(data.data[0].brother_name);
                  $(".brother_tel").html(data.data[0].brother_tel);
                  $(".leadership_name").html(data.data[0].leadership_name);
                  $(".leadership_tel").html(data.data[0].leadership_tel);
                  $(".fcurrent_score").html(data.data[0].fcurrent_score);
                  document.title = data.data[0].farea_code + "综合监管";
                  soid = data.data[0].fsocial_uuid;
                  if(data.data[0].stipulate_list.length == 0){
                      htm1 = "";
                  }else{
                  for(var i=0;i<data.data[0].stipulate_list.length;i++){
                      var htm1 = '<div class="list_item" id="'+ data.data[0].stipulate_list[i].finfo_uuid +'"><i class="item_fl"></i><div class="item_fr">' + data.data[0].stipulate_list[i].ftitle + '<span class="fr">' + formatFilter2(data.data[0].stipulate_list[i].fpublish_time) + '</span></div></div>';      
                      $(".com_box").append(htm1);
                      if(data.data[0].stipulate_list[i].ftitle == ""){
                          $(".com_box .list_item").eq(i).hide();
                      }
                  }
                  }
              }else{
                  $(".swiper-container").hide();
                  $(".mr_img").show();
                  $.alert(data.ret_msg);
              }
          },