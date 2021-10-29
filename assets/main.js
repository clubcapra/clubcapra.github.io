/* Copyright (c) 2019 Club RockÉTS (MIT License) */
$(function () {
    /* Rocket tabs */
    $('.rocket-tab-link').each(function (index, element) {
        $(this).on('click', function (event) {
            target = $(this).attr("data-target");

            /* Highlight only selected tab link */
            $('.rocket-tab-link').each(function (index, element) {
                $(this).removeClass('tab-active');
                if ($(this).attr('data-target') == target) {
                    $(this).addClass('tab-active');
                }
            });

            /* Hide all tab contents except for selected tab */
            $('.rocket-tab-content').each(function (index, element) {
                $(this).removeClass('tab-active');
                if (this.id == 'rocket-tab-' + target) {
                    $(this).addClass('tab-active');
                }
            });
        });
    });

    /* Rocket-tab left/right focus at low sizes */
    $('#rocket-switch-side').on('click', function (event) {
        $('.rocket-tab-content').each(function (index, element) {
            if ($(this).hasClass('rocket-left-focus')) {
                $(this).removeClass('rocket-left-focus');
                $(this).addClass('rocket-right-focus');
            }
            else {
                $(this).removeClass('rocket-right-focus');
                $(this).addClass('rocket-left-focus');
            }
        });
    });

    /* Gallery modal */
    $("#gallery-modal-content").on('click', function (event) {
        $("#gallery-modal-background").css('display', 'none');
    });
    
    $('.gallery-image').on('click', function (event) {
        url = $(this).css('background-image');
        url = /^url\(['"]?([^"]*)['"]?\)$/.exec(url)[1];
        url = url.replace("_thumb", "");
        $("#gallery-modal-content img").attr("src", url).one("load", function() {
            $("#gallery-modal-background").css('display', 'block');
        });
    });

    /* lol copyright */
    $('#currentyear').text((new Date()).getFullYear());

    $('header a[href*="#"').click(function(event) {
        var target = $(this.hash);
        event.preventDefault();
        console.log(target);
        console.log("" + target.offset().top + " - " + $('header').height() + " = " + (target.offset().top - $('header').height()));
        $('main').scrollTop($('main').scrollTop() + target.offset().top - $('header').height());
        
    })

});


function scroller() {
    var height = $(window).height();
    var width = $(window).width();
    if(width > 750){
        if ($('main').scrollTop() > height - $('header').height()) {
            $('header').addClass('scrolled');
        }
        else {
            $('header').removeClass('scrolled');
        }
    }else{
        $('header').addClass('scrolled');
    }
    
    var progress = 100 * ($('main').scrollTop() / ($('main')[0].scrollHeight - height))
    $('#progress').css({'width': progress + '%'});
}