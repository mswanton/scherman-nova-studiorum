$(document).ready(function(){
    var bodyid = $('body').attr('id');
    var navid = '#nav-' + bodyid;
    $(navid).attr('id','you-are-here');
});