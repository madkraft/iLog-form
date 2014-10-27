
var main = function function_name (argument) {
	


$(".Generate").click(function(){
        $(this).button('loading').queue(function() {
            $(this).prop('disabled', true);
            $('input').prop('disabled', true); 
            $('textarea').prop('disabled', true);
            $('select').prop('disabled', true); 
        });        
    });	




$(document).ready(function() {
    $('[id^=detail-]').hide();
    $('.toggle').click(function() {
        $input = $( this );
        $target = $('#'+$input.attr('data-toggle'));
        $target.slideToggle();
    });
});



}; // end of main function



$(document).ready(main)

