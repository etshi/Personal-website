/**
 * Created by Elaskalani1 on 9/11/2014.
 */
var main= function(){

    $('.carousel').each(function(){
        $(this).carousel({
            interval: false
        });
    });

    $(document).keydown(function(event){
        if(event.which===39){
            $('#firstcarousel').carousel('next');
        }else if(event.which===37){$('#firstcarousel').carousel('prev');}

    });

    $('#worklink').click(function(){
        $('#firstcarousel').carousel(1);

    });
    $('#certificationlink').click(function(){
        $('#firstcarousel').carousel(2);

    });
    $('#skillslink').click(function(){
        $('#firstcarousel').carousel(3);

    });
    $('#projectslink').click(function(){
        $('#firstcarousel').carousel(4);

    });


    $('#firstcarousel').on('slid.bs.carousel', function () {
        $('.resumebody').hide();
        var classId = $('div.active').attr('id') ;
        console.log(classId);
        if(classId==='workcarousel'){
            $('#workbody').show();
        }else if(classId==="skillscarousel"){
            $('#skillsbody').show();
        } else if(classId==='certificationcarousel'){
            $('#certificatesbody').show();
        } else if(classId==='projectscarousel'){
            $('#projectsbody').show();
        } else if(classId==='educationcarousel'){
            $('#educationbody').show();
        }




    })

$('.skillelement').hover(function(){
    $(this).toggleClass('backgroundgrey');
    $('.stars',this).toggleClass('starshover');
});

    $('#jumbotronscrolldown').click(function(){
        $.scrollTo('#profile',500);
    })
    $('#profilescrolldown').click(function(){
        $.scrollTo('#resume',500);
    })
    $('#jumbotronscrolldown').click(function(){
        $.scrollTo('#profile',500);
    })
    $('#resumescrolldown').click(function(){
        $.scrollTo('#Downloads',500);
    })
    $('#downloadsscrolldown').click(function(){
        $.scrollTo('#topjumbotron',1000);
    })
    };

$(document).ready(main);