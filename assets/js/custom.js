

$(document).ready(function () {

  $('.sat-act-tab li a').click(function () {
    $('.sat-act-tab li a').removeClass('active');
    $(this).addClass('active');
    var tagid = $(this).data('tag');
    $('.sat-act-form .content').removeClass('active').addClass('hide');
    $('#' + tagid).addClass('active').removeClass('hide');
  });

    // $(".unfill-image").click(function(){
    //     $(".unfill-image").css("display", "none");
    //     $(".fill-image").css("display", "block");
    // });  
    // $(".fill-image").click(function(){
  
    //     $(".unfill-image").css("display", "block");
    //     $(".fill-image").css("display", "none");
    // }); 

});
