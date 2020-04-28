'use strict';
$(function () {
    $(document).on('click', '.appoinment-form', function () {
        $('.appointment-modal').show();

        $(window).on('click', function(event){
            if(event.target.id == 'myModal'){
                $('#myModal').css({display: "none"});
            }
        });
    })


})