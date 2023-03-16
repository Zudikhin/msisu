$(document).ready(function () {
    "use strict";

    $(window).scroll(function() {
        if($(window).width() > 1199) {
            if ($(this).scrollTop() > 0) {
                $(".header").addClass("active");
                $(".drop_desktop").addClass("hide");
            } else {
                $(".header").removeClass("active");
                $(".drop_desktop").removeClass("hide");
            }
        }
    });

    $(".header_block_top_content_burger").click(function() {
        if($(window).width() > 1199) {
            $(".header").toggleClass("active");
            $(".drop_desktop").toggleClass("hide");
        } else {
            $(".back_modal").addClass("active");
            $(".modal_drop").addClass("active");
            $("body").addClass("scroll");
        }
    });

    $(".modal_industries_top_close").click(function() {
        $(".modal_industries").removeClass("active");
        $(".back_modal").removeClass("active");
        $("body").removeClass("scroll");
    });

    $(".modal_tags_top_close").click(function() {
        $("body").removeClass("scroll");
        $(".back_modal").removeClass("active");
        $(".modal_tags").removeClass("active");
    });

    $(".modal_sort_top_close").click(function() {
        $("body").removeClass("scroll");
        $(".back_modal").removeClass("active");
        $(".modal_sort").removeClass("active");
    });

    $(".industries_mob").click(function() {
        $("body").addClass("scroll");
        $(".back_modal").addClass("active");
        $(".modal_industries").addClass("active");
    });

    $(".sort_mob").click(function() {
        $("body").addClass("scroll");
        $(".back_modal").addClass("active");
        $(".modal_sort").addClass("active");
    });

    $(".tags_mob").click(function() {
        $("body").addClass("scroll");
        $(".back_modal").addClass("active");
        $(".modal_tags").addClass("active");
    });

    $(".contacts_partners_top_right_btn").click(function() {
        $("body").addClass("scroll");
        $(".back_modal").addClass("active");
        $(".modal_tags_contact").addClass("active");
    });

    $(".contacts_partners_block_list_item_btn").click(function() {
        $(this).parent().parent().toggleClass("active");
    });
    
    $(".back_modal").click(function() {
        $("body").removeClass("scroll");
        $(this).removeClass("active");
        $(".modal_drop").removeClass("active");
        $(".modal_industries").removeClass("active");
        $(".modal_tags").removeClass("active");
        $(".modal_tags_contact").removeClass("active");
        $(".modal_sort").removeClass("active");
    });

    $(".modal_tags_contact_top_close").click(function() {
        $("body").removeClass("scroll");
        $(".back_modal").removeClass("active");
        $(".modal_tags_contact").removeClass("active");
    });

    $(".modal_drop_top_close").click(function() {
        $("body").removeClass("scroll");
        $(".back_modal").removeClass("active");
        $(".modal_drop").removeClass("active");
    });

    $(".parent_cat_block_sidebar_content_item_parent_btn").click(function() {
        $(this).toggleClass("open");
        $(this).parent().parent().find(".parent_cat_block_sidebar_content_item_children").slideToggle( "slow" );
    });

    $(".drop_desktop li a").click(function() {
        $(this).addClass("active");
    });

    $('.main').slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    $('.production_block_content_slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    $('.application_block_content_slider').slick({
        dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    $('.trust_block_slider').slick({
		rows: 1,
		dots: true,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
        prevArrow: $('.trust_block_prev'),
        nextArrow: $('.trust_block_next'),
        responsive: [
            {
              breakpoint: 767,
              settings: {
                rows: 2,
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            }
        ]
    });
    
});