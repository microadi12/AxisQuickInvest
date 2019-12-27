$(document).ready(function () {
    /*========== chetan ===========*/
    // $(window).load(function() {
    var recomHeight = $("body").height();

    $('.pre-log-wrapper .side_recommendation').css('height', recomHeight);//chetan
    $(window).resize(function () {
        var recomHeight = $("body").height();
        $('.pre-log-wrapper .side_recommendation').css('height', recomHeight);//chetan
    });
    

    /*========== chetan ===========*/

    /*========== dhanashree ===========*/
    var hrefval = window.location.hash;
    if (hrefval.length != 0) {
        $(hrefval).children('.collapsed').trigger('click');
        if (hrefval == "#downloadsForms") {
            $('#accordion1').find('.panel-heading').removeClass('collapsed');
            $('#accordion1').find('.collapse').addClass('in');
        }
        $('html, body').animate({ scrollTop: $(hrefval).offset().top - 95 }, 100);
    }
    $('.pre-log-wrapper .navbar-theme .navbar-right > li > .dropdown-menu li a').click(function () {
        var x_loc = $(this).attr('href');
        var x_loc1 = x_loc.substring(x_loc.indexOf("#"));
        $(x_loc1).children('.collapsed').trigger('click');
        $('html, body').animate({
            scrollTop: $(x_loc1).offset().top - 95
        }, 100);
        if (x_loc1 == "#downloadsForms") {
            $('#accordion1').find('.panel-heading').removeClass('collapsed');
            $('#accordion1').find('.collapse').addClass('in');
        }
    });
    /*========== dhanashree ===========*/



    /*========== Btns ===========*/
    //switch Btns
    $('.btn-group-switch .btn').click(function () {
        $(this).addClass('active');
        $(this).siblings('.btn').removeClass('active');
    });
    /*========== Btns ===========*/
    

    /*========== Forms ===========*/
    //selectpicker
    $('.selectpicker').selectpicker();
    $('.select-theme-1').selectpicker();
    $('.selectpicker').on('shown.bs.select', function (e) {
        var jDropdown = $(this).parents('.bootstrap-select').find("ul.dropdown-menu");
        setTimeout(function () {
            jDropdown.jScrollPane();
        }, 200);
    });


    // $('.selectpicker').on('shown.bs.select', function () {
    //     if ($(this).find('.dropdown-menu li').length > 4) {
    //         var totalHeight = 0;
    //           for(var i = 1; i <= 4; i++){ 
    //               totalHeight += $(this).find('.dropdown-menu li:eq('+i+')').outerHeight();
    //           }        
    //           $(this).find('.dropdown-menu').css('max-height', totalHeight);
    //           $(this).find('.dropdown-menu').jScrollPane(); 
    //     }        

    //   });    



    //animate-labeled
    $('.form-animated .form-control').keyup(function () {
        if ($(this).val() == '') {
            $(this).parents('.form-animated').find('label').addClass('hidden');
            $(this).parents('.form-animated').find('.input-group-addon.rupees-lg').addClass('hidden');
        } else {
            $(this).parents('.form-animated').find('label').removeClass('hidden');
            $(this).parents('.form-animated').find('.input-group-addon.rupees-lg').removeClass('hidden');
        }
    });

    $('.form-control-btn-edit').click(function () {
        var formInput = $(this).parents('.form-group').find('.form-control');
        //formInput.removeAttr('readonly').val('').focus();
        formInput.next('.input-group-addon').removeClass('hidden'); //dhana     

        $(this).parents('.form-group').find('.form-control-static').addClass('hidden');
        $(this).parents('.form-group').find('.form-control').removeClass('hidden');

        $(this).addClass('hidden');
        $(this).parents('.form-group').find('.form-control-btn-save').removeClass('hidden');
    });

    $('.form-control-btn-save').click(function () {
        var formInput = $(this).parents('.form-group').find('.form-control');
        //formInput.val(formInput.val());
        //formInput.prop('readonly', true); 
        $(this).parents('.form-group').find('.form-control-static').html(formInput.val());
        formInput.next('.input-group-addon').addClass('hidden'); //dhana

        $(this).parents('.form-group').find('.form-control-static').removeClass('hidden');
        $(this).parents('.form-group').find('.form-control').addClass('hidden');

        $(this).addClass('hidden');
        $(this).parents('.form-group').find('.form-control-btn-edit').removeClass('hidden');
    });

    $('.input-group.date').datepicker({
        container: '.main-content',
        autoclose: true,
        format: 'dd M yyyy',
        //endDate: '+0d',
        //startDate: '-50y',
        showOnFocus: false,
        templates: {
            leftArrow: '<i class="fa fa-caret-left"></i>',
            rightArrow: '<i class="fa fa-caret-right"></i>'
        }
    }).on('show', function (e) {
        $('.overlay-dark').show();
        if ($('.sidebar .sidebar-wrapper').hasClass('active')) {
            $('.datepicker.datepicker-dropdown').css('left', $('.sidebar .sidebar-wrapper.active').width());
        } else {
            $('.datepicker.datepicker-dropdown').css('left', $('.sidebar .sidebar-wrapper').width());
        }

    }).on('hide', function (e) {
        $('.overlay-dark').hide();
    });

    /*$('.datepicker-card').datepicker({
        container: '.card ',
        autoclose: true,
            format:'dd M yyyy',
            showOnFocus: false,
            templates:{
                leftArrow: '<i class="fa fa-caret-left"></i>',
                rightArrow: '<i class="fa fa-caret-right"></i>'
            }
        });*/


    $('.input-group.date .input-group-addon').click(function (e) {
        e.stopPropagation();
        $('.overlay-dark').show();
    });




    /*========== //Forms ===========*/



    /*========== Dropdowns ===========*/
    $(document).on('click', '.btn-group .dropdown-menu.non-collapsible', function (e) {
        e.stopPropagation();
    });

    $('.dropdown-scrollable').on('shown.bs.dropdown', function () {
        if ($(this).find('.dropdown-menu li').length > 4) {
            var totalHeight = 0;
            for (var i = 1; i <= 4; i++) {
                totalHeight += $(this).find('.dropdown-menu li:eq(' + i + ')').outerHeight();
            }
            $(this).find('.dropdown-menu').css('max-height', totalHeight);
            $(this).find('.dropdown-menu').jScrollPane();
        }

    });

    $('.dropdown-menu a.btn-dropdown-submenu').on("click", function (e) {
        //$('.dropdown-menu ul.dropdown-submenu').hide();
        $(this).next('ul.dropdown-submenu').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    $('.dropdown-theme-3 .dropdown-toggle .dropdown-title').each(function () {
        var checkBadge = $(this).find('.badge').length;
        var checkSubtitle = $(this).find('.dropdown-subtitle').length;
        if (checkBadge > 0) {
            $(this).find('.heading').css('max-width', 'calc(100% - 40px)');
        } else {
            $(this).find('.heading').css('max-width', '100%');
        }

        if (checkSubtitle > 0) {
            $(this).css('min-height', '55px');
        } else {
            $(this).css('min-height', '36px');
        }

    });

    /*========== //Dropdowns===========*/


    /*==========TABS===========*/
    /*$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      e.target // newly activated tab
      e.relatedTarget // previous active tab      
    });  */
    $(".nav-tabs li.disabled a").click(function () {
        return false;
    });
    /*==========//TABS===========*/



    /*========== nav-sticky ===========*/
    if (!$('.nav-sticky').length == 0) {
        var headerHeight = $('.pre-log-wrapper .navbar-theme').outerHeight();
        var navStickyHeight = $('.nav-sticky').outerHeight() - 100;
        var navStickyOffest = $('.nav-sticky').offset().top - headerHeight;
        $(window).on('scroll', function () {

            //var bodyPad = headerHight + $('.nav-sticky').outerHeight() ;
            if ($(window).scrollTop() >= navStickyOffest) {
                $('.nav-sticky').addClass('nav-fixed-top').css('top', headerHeight);
                //$('body').css('padding-top', bodyPad + 'px');
            } else {
                $('.nav-sticky').removeClass('nav-fixed-top').css('top', 0);
                //$('body').css('padding-top', '0');
            }
        });



        //page-menus with Smooth Scrolling 
        if (!$('.page-menus').length == 0) {
            $('body').attr({
                'data-spy': 'scroll',
                'data-offset': '180',
                'data-target': '.page-menus'
            });
        }
        $(".page-menus .nav li a").on('click', function (event) {
            $('.page-menus .nav > li').removeClass('active');
            $(this).parent('li').addClass('active');
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                var pageMenuHeaderHeight = $('.page-menus').outerHeight() + $('.pre-log-wrapper .navbar-theme').outerHeight();
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - pageMenuHeaderHeight //- 20
                }, 900, function () {
                    // window.location.hash = hash;
                });
            }
        });


        //nav-sticky navtab
        $(".nav-sticky .nav li a").on('click', function () {
            var scrollPos = $(this).parents('.nav-sticky').next(".tab-content").offset().top - (navStickyHeight + headerHeight) - 100;
            $(window).scrollTop(scrollPos);
        });

    }
    /*========== //nav-sticky ===========*/


    /*==========page-header===========*/
    /*if($('.post-log-wrapper .main-content').find('.post-page-header').is(":visible")) {
        var calcMainContentPad = $('.post-log-wrapper .navbar-theme').outerHeight() + $('.post-log-wrapper .post-page-header').outerHeight();
             $('.post-log-wrapper .main-content').css('padding-top', calcMainContentPad)
         } */
    /*==========//page-header===========*/



    /*==========page-section===========*/
    $('.page-section .section-link').click(function () {
        $(this).parents('.page-section').find('.section-text').toggleClass('less-content');
        $(this).toggleClass('readLess');

        if ($(this).hasClass('readLess')) {
            $(this).html('Read Less');
        } else {
            $(this).html('Read More');
        }
    });
    /*==========//page-section===========*/

    /*========== cards ===========*/
    $('.card-theme-1 .card-body .card-title').each(function () {
        var windowWidth = $(window).width();
        if (windowWidth > 767) {
            var checkCardSubtitle = $(this).find('.card-subtitle').length;
            if (checkCardSubtitle > 0) {
                $(this).css('min-height', '60px');
            }
        }
        if (windowWidth > 767) {
            var checkCardHeading2 = $(this).find('.heading-2').length;
            if (checkCardHeading2 > 0) {
                $(this).css('min-height', '75px');
            }
        }
    });

    $('.card-theme-1 .popover-theme-1 .btn-collapsible').click(function () {
        $(this).parents('.card-theme-1').find('.card-overlay').toggle();
    });

    $('.card-theme-1 .tooltip-theme-1 .btn-collapsible').hover(function () {
        $(this).parents('.card-theme-1').find('.card-overlay').show();
        $(this).parents('.tooltip-theme-1').find('.collapse').addClass('in hover-patch');

    }, function () {
        $(this).parents('.tooltip-theme-1').find('.collapse').removeClass('in hover-patch');
        $(this).parents('.card-theme-1').find('.card-overlay').hide();
    });



    /*$(document).click(function(e) {
        if (!$(e.target).is('.card-theme-1 .popover-theme-1, .card-theme-1 .popover-theme-1 *')) {
            $('.card-theme-1 .card-overlay').hide();
        }
    });*/

    //card-team
    /*$('.card-team').click(function() {
        $(this).toggleClass('active');
        $(this).find('.card-text').jScrollPane();
    });
    
    
    /*========== //cards ===========*/




    /*========== Modals ===========*/
    $('.modal-post-theme').on('show.bs.modal', function (event) {
        if ($('.sidebar .sidebar-wrapper').hasClass('active')) {
            $('.modal-post-theme').css('left', $('.sidebar .sidebar-wrapper.active').width());
        } else {
            $('.modal-post-theme').css('left', $('.sidebar .sidebar-wrapper').width());
        }
    });
    /*========== //Modals ===========*/



    /*========== Tooltip and Popovers ===========*/
    $('.btn-popover').click(function () {
        $(this).popover('toggle');
    });
    $(document).click(function (e) {
        if (!$(e.target).is('.btn-popover, .popover, .popover *')) {
            $('.btn-popover').popover('hide');
        }
    });
    $('[data-toggle="tooltip"]').tooltip();
    /*========== //Tooltip and Popovers ===========*/




    /*========== slider ===========*/

    function cardSliderMobile() {
        if ($(window).width() < 767) {
            $('.card-slider-xs').slick({
                arrows: false,
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 765,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }

    }
    cardSliderMobile();



    function flipCardGridSlider() {
        $(".flipCardGridSlider").slick({
            arrows: true,
            //dots:true,
            // vertical: true, 
            infinite: false,
            centerMode: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            focusOnSelect: false,
            draggable: false,
            responsive: [
                {
                    breakpoint: 760,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 578,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]
        });
    }
    flipCardGridSlider();

    function videoSlider() {
        $('.videoSlider').slick({
            centerMode: true,
            //centerPadding: '60px',
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        //centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        //centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });

    }
    videoSlider();

    function sliderArrowBottomSetting() {
        $('.slider-theme.arrows-bottom-center').each(function () {
            var slickArrowPosCalc = ($(this).find('.slick-dots').width() * 1) / 2;

            $(this).find('.slick-next').css('margin-right', - slickArrowPosCalc);
            $(this).find('.slick-prev').css('margin-left', - slickArrowPosCalc);
        });
    }
    sliderArrowBottomSetting();


    $('.steps-slide').slick({
        arrows: false,
        //dots: true,
        infinite: false,
        speed: 300,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1
        /*responsive: [
          {
            breakpoint: 1024,
            settings: "unslick"
          },
          {
            breakpoint: 600,
            settings: "unslick"
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }                
        ]*/
    });
    $('.stepSlideNext').click(function () {
        $(this).parents(".steps-slide").slick('slickNext');
    });
    $('.stepSlidePrev').click(function () {
        $(this).parents(".steps-slide").slick('slickPrev');
    });


    /*========== //slider ===========*/





    /*========== Flip-cards ===========*/
    $(".flip-card-theme").flip({
        trigger: "manual",
        autoSize: true,
        reverse: true
    });
    $(document).on("click", ".btn-flip", function () {
        $(this).parents(".flip-card-theme").addClass('active').flip(true);
        $(this).parents(".flip-card-theme").find('.card-content-scrollable').jScrollPane();
        //$('body').css('overflow','hidden');
        $('.overlay-flip').show();
    });
    $(document).on("click", ".btn-unflip", function () {
        $(this).parents(".flip-card-theme").removeClass('active').flip(false);
        setTimeout(function () {
            //$('body').css('overflow','auto');
            $('.overlay-flip').hide();
        }, 100);

    });

    //    $(document).click(function(e) {
    //        if (!$(e.target).is('.flip-card-theme, .flip-card-theme *')) {
    //            $(".flip-card-theme").removeClass('active').flip(false); 
    //            $('.overlay-flip').hide();            
    //        }
    //    });
    /*========== //Flip-cards ===========*/



    /*========== Counter ==========*/
    //$('.counter').counterUp();

    /*========== //Counter ==========*/


    /*========== masonry ==========*/
    $('.grid').masonry({
        itemSelector: '.grid-item',
        //columnWidth: 200
    });
    /*========== //masonry ==========*/


    /*========== resizable text ==========*/
    /*function fnFitText(selector, parentSelector, MaxFontSize) {
                $(selector).each(function (i, box) {
                    var width = $(selector).parents(parentSelector).width(), //$(box).width(),
                    html = '<span style="white-space:nowrap"></span>',
                    line = $(box).wrapInner(html).children()[0],
                    n = parseFloat(MaxFontSize);
                    $(box).css('font-size', n);
                    while ($(line).width() > width) {
                        $(box).css('font-size', --n);
                    }
                    $(box).text($(line).text());     
                });       
            }*/
    /*========== //Resizable text ==========*/



    /*========== Loaders ===========*/
    $('.loader-overlay, .loader-default, .loader-table table tbody').html('<div class="loader"><img src="images/loader.gif"></div>');
    $('.nodata-default, .nodata-table table tbody').html('<div class="nodata">No Data Found</div>');
    /*========== //Loaders ===========*/



    /*========== Pre Log Sidebar ==========*/

    $('.pre-log-wrapper .btn-navbar').on('click', function () {
        $('.pre-log-wrapper .sidebar').addClass('active');
        $('.overlay-dark').fadeIn();
        $.fn.fullpage.setMouseWheelScrolling(false);
        $('body, html').addClass('overFlowHidden');
    });

    $('.pre-log-wrapper .btn-sitebar-close').on('click', function () {
        $('.pre-log-wrapper .sidebar').removeClass('active');
        $('.pre-log-wrapper .sidebar .expanded-menus').removeClass('active');
        $('.overlay-dark').fadeOut();
        $('.pre-log-wrapper .expanded-menus .subnav').hide();
        //$.fn.fullpage.setMouseWheelScrolling(true); 
        $('body, html').removeClass('overFlowHidden');
    });



    /*checkScreenSize*/
    function checkScreenSizePreSidebar() {
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 1199) {
            //mobile
            $('.pre-log-wrapper .sidebar ul  li  a.nav-subnav').on('click', function () {
                var href = $(this).attr('href');
                $('.pre-log-wrapper .expanded-menus').addClass("active");
                $('.pre-log-wrapper .subnav').show();
                $(href).siblings('.subnav-list-item').removeClass('active');
                $(href).addClass('active');

            });
            $('.pre-log-wrapper .btn-sitebar-back .btn').on('click', function () {
                $('.pre-log-wrapper .subnav').hide();
                $('.pre-log-wrapper .expanded-menus').removeClass('active');
                setTimeout(function () {
                    $('.pre-log-wrapper .sidebar').removeClass("w-100-xs");
                }, 300);
                $('.pre-log-wrapper .sidebar-wrapper').addClass('active');

            });
            $.each($('.pre-log-wrapper .subnav ul'), function (i, val) {
                if ($(val).children('li').length % 2 == 0) {
                    $(this).addClass('even-list');
                } else if ($(val).children('li').length % 2 == 1) {
                    $(this).removeClass('even-list');
                }
            });
        } else {
            //desktop
            $('.pre-log-wrapper .sidebar > ul > li > a').on('click', function () {
                $('.pre-log-wrapper .sidebar ul  li').removeClass('active');
                $(this).parents('li').addClass('active');
                $('.pre-log-wrapper .expanded-menus').removeClass("active");
                $('.pre-log-wrapper .expanded-menus .subnav').show();
            });
            $('.pre-log-wrapper .sidebar ul  li  a.nav-subnav').on('click', function () {
                var href = $(this).attr('href');
                $('.pre-log-wrapper .expanded-menus').toggleClass("active");
                $(href).siblings('.subnav-list-item').removeClass('active');
                $(href).addClass('active');

                // 20190208 sunil
                if ($(".pre-log-wrapper .sidebar .expanded-menus.active .subnav .subnav-list-item.active > ul > li").length < 5) {
                    $(".pre-log-wrapper .sidebar .expanded-menus.active .subnav").addClass("subnav-align");
                }
                else {
                    $(".pre-log-wrapper .sidebar .expanded-menus.active .subnav").removeClass("subnav-align");
                }

                // 20190208 sunil
            });
            $(document).click(function (e) {
                if (!$(e.target).is('.pre-log-wrapper .btn-navbar, .pre-log-wrapper .sidebar, .pre-log-wrapper .sidebar *')) {
                    $('.pre-log-wrapper .sidebar').removeClass('active');
                    $('.pre-log-wrapper .sidebar .expanded-menus').removeClass('active');
                    $('.overlay-dark').fadeOut();

                    setTimeout(function () {
                        $('.pre-log-wrapper .expanded-menus .subnav').hide();
                        $('body, html').removeClass('overFlowHidden');
                        //$.fn.fullpage.setMouseWheelScrolling(true); 
                    }, 100);
                }
            });
        }
    }
    checkScreenSizePreSidebar();

    function navActive() {
        var url = window.location;
        $('.sidebar .nav-main a[href="' + url + '"]').parent().addClass('active');
        $('.sidebar .nav-main a').filter(function () {
            return this.href == url;
        }).parent().addClass('active');
    }
    navActive();
    /*========== //Pre Log Sidebar ==========*/



    /*========== Post Log Sidebar ==========*/
    $('.post-log-wrapper .btn-sidebar').on('click', function () {
        //debugger;
        $('.post-log-wrapper .sidebar-wrapper, .post-log-wrapper .main-content').toggleClass('active');
        $('.post-log-wrapper .navbar-theme .navbar-brand ').toggleClass('visible-xs-block');
        if ($('.post-log-wrapper .sidebar-wrapper').hasClass("active")) {
            $(".post-log-wrapper .sidebar-wrapper").find(".sidebar-brand, ul.nav-main li a span, ul.nav-bottom li a span").hide();
            setTimeout(function () {
                $('.modal-post-theme').css('left', $('.post-log-wrapper .sidebar .sidebar-wrapper.active').width());
            }, 300);
        } else {
            $(".post-log-wrapper .sidebar-wrapper").find(".sidebar-brand, ul.nav-main li a span, ul.nav-bottom li a span").fadeIn(300);
            setTimeout(function () {
                $('.modal-post-theme').css('left', $('.sidebar .sidebar-wrapper').width());
            }, 300);

        }
    });

    $('.post-log-wrapper .btn-navbar').on('click', function () {
        $('.post-log-wrapper .sidebar-wrapper').toggleClass('active');
    });

    $('.post-log-wrapper .btn-sitebar-close').on('click', function () {
        $('.post-log-wrapper .sidebar-wrapper').removeClass('active');
    });

    /*checkScreenSize*/
    function checkScreenSizePostSidebar() {
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 1199) {
            //mobile
            $('.post-log-wrapper .sidebar ul  li  a.nav-subnav').on('click', function () {
                var href = $(this).attr('href');
                $('.post-log-wrapper .sidebar').addClass("w-100-xs");
                $('.post-log-wrapper .sidebar-wrapper').removeClass('active');
                $('.post-log-wrapper .expanded-menus').addClass("active");
                $('.post-log-wrapper .subnav').show();
                $(href).siblings('.subnav-list-item').removeClass('active');
                $(href).addClass('active');

            });
            $('.post-log-wrapper .btn-sitebar-back .btn').on('click', function () {
                $('.post-log-wrapper .subnav').hide();
                $('.post-log-wrapper .expanded-menus').removeClass('active');
                setTimeout(function () {
                    $('.post-log-wrapper .sidebar').removeClass("w-100-xs");
                }, 300);
                $('.post-log-wrapper .sidebar-wrapper').addClass('active');

            });
            $.each($('.post-log-wrapper .subnav ul'), function (i, val) {
                if ($(val).children('li').length % 2 == 0) {
                    $(this).addClass('even-list');
                } else if ($(val).children('li').length % 2 == 1) {
                    $(this).removeClass('even-list');
                }
            });
            $(document).click(function (e) {
                if (!$(e.target).is('.post-log-wrapper .sidebar, .post-log-wrapper .sidebar *, .post-log-wrapper .btn-navbar')) {
                    $('.post-log-wrapper .sidebar .sidebar-wrapper').removeClass("active");
                }
            });


        } else {
            //desktop
            $('.post-log-wrapper .sidebar ul li a').on('click', function () {
                //$('.post-log-wrapper .sidebar ul  li').removeClass('active');
                $(this).parents('li').siblings().removeClass('active');
                $(this).parents('li').toggleClass('active');
                if ($(this).hasClass('nav-subnav')) {
                    $('.post-log-wrapper .expanded-menus').toggleClass("active");
                }
                //$('.post-log-wrapper .expanded-menus').removeClass("active");
                //$('.post-log-wrapper .expanded-menus .subnav').show();
            });
            //$('.post-log-wrapper .sidebar ul  li  a.nav-subnav').on('click', function () {
            //    var href = $(this).attr('href');
            //    $('.post-log-wrapper .expanded-menus').toggleClass("active");
            //    $(href).siblings('.subnav-list-item').removeClass('active');
            //    $(href).addClass('active');
            //});
            $('.post-log-wrapper .sidebar ul  li a.nav-subnav').on('click', function () {
                var href = $(this).attr('href');
                if ($(this).parent().hasClass('active')) {
                    $('.post-log-wrapper .expanded-menus').addClass("active");
                    $(this).parents('.sidebar-wrapper').addClass('open_sub_nav');//dhanashree 23rd march 2018
                } else {
                    $('.post-log-wrapper .expanded-menus').removeClass("active");
                    $(this).parents('.sidebar-wrapper').removeClass('open_sub_nav');//dhanashree 23rd march 2018
                }
                $(href).siblings('.subnav-list-item').removeClass('active');
                $(href).addClass('active');
            });
            $(document).click(function (e) {
                if (!$(e.target).is('.post-log-wrapper .sidebar, .post-log-wrapper .sidebar *')) {
                    $('.post-log-wrapper .expanded-menus').removeClass("active");
                    setTimeout(function () {
                        //$('.post-log-wrapper .expanded-menus .subnav').hide();
                    }, 100);
                }
            });
        }
    }
    checkScreenSizePostSidebar();
    /*========== //Post Log Sidebar ==========*/



    /*========== Sticky-items ===========*/


    $('.sticky-item-top .sticky-content .btn-collapsible').click(function () {
        $(this).parents('.sticky-content').toggleClass('active');
        //$('.overlay-light').toggle(); //dhanashree 29th march 2018
        $('.scrollbar-theme').jScrollPane().data('jsp').destroy();
        //setTimeout({}, 1000);
        $('html, body').toggleClass('overFlowHidden');
    });


    $('.sticky-item-top .collapse,  .floting-item-bottom .collapse').on('shown.bs.collapse', function () {
        $('.overlay-light').show();
    }); //dhanashree 29th march 2018 
    $('.sticky-item-top .collapse, .floting-item-bottom .collapse').on('hide.bs.collapse', function () {
        $('.overlay-light').hide();
    }); //dhanashree 29th march 2018 


    $('.sticky-item-bottom .sticky-content .btn-collapsible').click(function () {
        $(this).parents('.sticky-content').toggleClass('active');
        //$('.overlay-light').toggle();        
        //$('.scrollbar-theme').jScrollPane().data('jsp').destroy();        
    });

    $('.sticky-item-top .collapse').on('shown.bs.collapse', function () {
        //scrollBar();
        //var newWindowWidth = $(window).width();
        //if (newWindowWidth >= 768) {
        $('.sticky-item-top .scrollbar-theme').jScrollPane().data('jsp').destroy();
        $('.sticky-item-top .scrollbar-theme').jScrollPane();
        //}
    });

    $('.sticky-item-bottom .sticky-content .btn-close').click(function () {
        $(this).parents('.sticky-content').removeClass('active').find('.collapse').removeClass('in');
        $(this).parents('.sticky-content').find('.icon-arrow_up').addClass('collapsed');

        //$('.overlay-light').hide();
    });


    //$('.floting-item-bottom .btn-collapsible').click(function () { //dhanashree 29th march 2018 
    //    $('.overlay-light').toggle();
    //});

    $('.floting-item-bottom ul li a').click(function () {
        $(this).parents('.floting-item-bottom').find('.collapse').collapse('hide');
        $('.overlay-light').hide();
    });

    $(document).click(function (e) { //dhanashree 29th march 2018 
        if (!$(e.target).is('.sticky-item-top, .sticky-item-top *, .floting-item-bottom, .floting-item-bottom *')) {
            $('.overlay-light').hide();
        }
        if (!$(e.target).is('.sticky-item-top, .sticky-item-top *')) {
            $('.sticky-item-top .collapse').collapse('hide');
            $('.sticky-item-top .sticky-content').removeClass('active');
            // $('.overlay-light').hide();
        }
        if (!$(e.target).is('.sticky-item-bottom, .sticky-item-bottom *')) {
            $('.sticky-item-bottom .collapse').collapse('hide');
            $('.sticky-item-bottom .sticky-content').removeClass('active');
            // $('.overlay-light').hide();
        }
        if (!$(e.target).is('.floting-item-bottom, .floting-item-bottom *')) {
            $('.floting-item-bottom .collapse').collapse('hide');
            // $('.sticky-item-top .sticky-content, .sticky-item-bottom .sticky-content').removeClass('active');
            // $('.overlay-light').hide();
        }
    });

    $(document).click(function (e) {
        if (!$(e.target).is('.sticky-item-bottom, .sticky-item-bottom *')) {
            //$('.sticky-item-bottom .collapse').collapse('hide');
            $('.sticky-item-bottom .sticky-content').removeClass('active');
            $('.sticky-item-bottom .sticky-content').find('.collapse').removeClass('in');
        }
    });


    /*checkScreenSize*/
    function checkScreenSizeStickyItems() {
        var navbarStickyItemHeight = $('.post-log-wrapper .navbar-theme').outerHeight() + $('.post-log-wrapper .sticky-item-top .sticky-content').outerHeight();
        //var StickyItemHeight = $('.post-log-wrapper .sticky-item-top .sticky-content').outerHeight();

        if ($(window).width() < 1199) {
            if ($('.post-log-wrapper .main-content').find('.sticky-item-top').length > 0) {
                //$('.post-log-wrapper .main-content .post-page-header').css('padding-top', StickyItemHeight + 10); 
                $('.post-log-wrapper .main-content').css('padding-top', navbarStickyItemHeight);

            }
        }
    }
    checkScreenSizeStickyItems();
    /*========== //Sticky-item-top ===========*/







    /*========== Transact ===========*/
    $('.transact .panel-group-theme-1 .panel').each(function () {
        if ($(this).hasClass('active')) {
            $(this).find('.panel-heading').removeClass('collapsed');
        }
        else {
            $(this).find('.panel-heading').addClass('collapsed');
        }
    });
    $('#nextStep02, #nextStep03, #nextStep04, #nextStep05').click(function () {
        $(this).parents('.panel').find('.panel-collapse').removeClass('in');
        $(this).parents('.panel').next('.panel').find('.panel-collapse').addClass('in');

        $(this).parents('.panel').removeClass('active').addClass('completed');
        $(this).parents('.panel').next('.panel').addClass('active');

        $('.panel-group-theme-1 .panel').each(function () {
            if ($(this).hasClass('completed')) {
                $(this).find('.panel-heading').attr("data-toggle", "collapse");
                $(this).find('.panel-heading').addClass('collapsed');
            } else {
                $(this).find('.panel-heading').removeAttr("data-toggle");
                $(this).find('.panel-heading').removeClass('collapsed');
            }
        });


        if ($('body').find('.pre-log-wrapper').is(":visible")) {

            if ($('body').find('.pre-page-header').is(":visible")) {
                $('html, body').animate({
                    scrollTop: $(this).parents('.panel').next('.panel').position().top - ($('.pre-log-wrapper .navbar-theme').outerHeight() + $('.pre-log-wrapper .pre-page-header').outerHeight())
                }, 500);
            } else {
                $('html, body').animate({
                    scrollTop: $(this).parents('.panel').next('.panel').position().top - $('.pre-log-wrapper .navbar-theme').outerHeight()
                }, 500);
            }

        } else {

            if ($('body').find('.post-page-header').is(":visible")) {
                $('html, body').animate({
                    scrollTop: $(this).parents('.panel').next('.panel').position().top - ($('.post-log-wrapper .navbar-theme').outerHeight() + $('.post-log-wrapper .post-page-header').outerHeight())
                }, 500);
            } else {
                $('html, body').animate({
                    scrollTop: $(this).parents('.panel').next('.panel').position().top - $('.post-log-wrapper .navbar-theme').outerHeight()
                }, 500);
            }

        }




    });

    $('#prevStep01, #prevStep02, #prevStep03, #prevStep04').click(function () {
        $(this).parents('.panel').find('.panel-collapse').removeClass('in');
        $(this).parents('.panel').prev('.panel').find('.panel-collapse').addClass('in');

        $(this).parents('.panel').removeClass('active');
        $(this).parents('.panel').prev('.panel').addClass('active').removeClass('completed');

        $('.panel-group-theme-1 .panel').each(function () {
            if ($(this).hasClass('completed')) {
                $(this).find('.panel-heading').attr("data-toggle", "collapse");
                $(this).find('.panel-heading').addClass('collapsed');
            } else {
                $(this).find('.panel-heading').removeAttr("data-toggle");
                $(this).find('.panel-heading').removeClass('collapsed');
            }
        });

        if ($('body').find('.pre-log-wrapper').is(":visible")) {

            if ($('body').find('.pre-page-header').is(":visible")) {
                $('html, body').animate({
                    scrollTop: $(this).parents('.panel').prev('.panel').position().top - ($('.pre-log-wrapper .navbar-theme').outerHeight() + $('.pre-log-wrapper .pre-page-header').outerHeight())
                }, 500);
            } else {
                $('html, body').animate({
                    scrollTop: $(this).parents('.panel').prev('.panel').position().top - $('.pre-log-wrapper .navbar-theme').outerHeight()
                }, 500);
            }

        } else {

            if ($('body').find('.post-page-header').is(":visible")) {
                $('html, body').animate({
                    scrollTop: $(this).parents('.panel').prev('.panel').position().top - ($('.post-log-wrapper .navbar-theme').outerHeight() + $('.post-log-wrapper .post-page-header').outerHeight())
                }, 500);
            } else {
                $('html, body').animate({
                    scrollTop: $(this).parents('.panel').prev('.panel').position().top - $('.post-log-wrapper .navbar-theme').outerHeight()
                }, 500);
            }

        }




    });


    $('#nextStep01-2').click(function () {
        $('#step01-1').hide();
        $('#step01-2').show();
    });
    $('#prevStep01-1').click(function () {
        $('#step01-2').hide();
        $('#step01-1').show();
    });
    $('#nextStep01-3').click(function () {
        $('#step01-2').hide();
        $('#step01-3').show();
    });
    $('#prevStep01-2').click(function () {
        $('#step01-3').hide();
        $('#step01-2').show();
    });


    $('.dropdown-theme-3 .dropdown-menu .radio').on("click", function () {
        $(this).parents('.dropdown-theme-3').find('.dropdown-selected-item').show();
    });



    //investing
    $('#investingDirectlyBtn').click(function () {
        $("#investingDirectlyContent").show();
        $("#investingDistributorContent").hide();
    });
    $('#investingDistributorBtn').click(function () {
        $("#investingDistributorContent").show();
        $("#investingDirectlyContent").hide();
    });

    //EUIN
    $('.radio [type="radio"]').on('change', function () {

        if ($("#euinYes").prop('checked') == true) {
            $('#euinNumber').removeClass('hidden');
            $('#investingDistributorConfirm').addClass('hidden');
        } else {
            $('#euinNumber').addClass('hidden');
            $('#investingDistributorConfirm').removeClass('hidden');
        }

        if ($("#confirmEuinYes").prop('checked') == true) {
            $('#confirmEuinNumber').removeClass('hidden');
            $('#confirmInvestingDistributorConfirm').addClass('hidden');
        } else {
            $('#confirmEuinNumber').addClass('hidden');
            $('#confirmInvestingDistributorConfirm').removeClass('hidden');
        }


    });

    //add cart
    $('#addCardBtn').click(function () {
        $("#addCardContent").hide();
        $("#checkoutContent").show();
        $("#addedcartAlert").show();

    });

    //redeemFund
    $("#redeemSwitch").change(function () {
        if (this.checked) {
            $('#fullRedeemContent').addClass('invisible');
        } else {
            $('#fullRedeemContent').removeClass('invisible');
        }
    });

    $("#scheduleRedeemCheck").change(function () {
        if (this.checked) {
            $('#scheduleRedeemDatepicker').removeClass('invisible');
        } else {
            $('#scheduleRedeemDatepicker').addClass('invisible');
        }

    });



    /*========== //Transact ===========*/

    /*========== Resize ==========*/
    $(window).on("resize", function (e) {
        checkScreenSizePostSidebar();
        checkScreenSizeStickyItems();
        //scrollBar();
    });
    /*========== //Resize ==========*/




    /*--Ravi: BELOW ARE FORMATED SCRIPTS--*/


    /*Buttons amd Button Groups
    ------------------------------*/

    //btn focusing
    $('.btn-group-flex > a').click(function () {
        var index = $(this).index();
        var moveWidth = 0;
        for (j = index; j >= 1; j--) {
            var wth = $('.btn-group-flex > a:nth-child(' + j + ')').outerWidth();
            if (wth != undefined)
                moveWidth = moveWidth + wth;
        }
        $('.btn-group-flex').animate({
            scrollLeft: moveWidth
        });
    });





    /*Navigations
    ------------------------------*/

    //tab-btn focusing
    $('.nav-flex > li').click(function () {
        var index = $(this).index();
        var moveWidth = 0;
        for (j = index; j >= 1; j--) {
            var wth = $('.nav-flex > li:nth-child(' + j + ')').outerWidth();
            if (wth != undefined)
                moveWidth = moveWidth + wth;
        }
        $('.nav-flex').animate({
            scrollLeft: moveWidth
        });
    });





    /*Cards
    ------------------------------*/

    //card card-grid border settings
    $('.card-grid .card-item').each(function () {
        var cardItemLastPos = $(this).parent().find('.card-item').length % 3;
        if (cardItemLastPos == 1) {
            $(this).last().prev().addClass('border-bottom-base');
            $(this).last().prev().prev().addClass('border-bottom-base');
        } else if (cardItemLastPos == 2) {
            $(this).last().prev().prev().addClass('border-bottom-base');
        }
    });





    /*Panels
    ------------------------------*/

    //panel-focusing
    $(".panel-focus .panel .panel-collapse").on('shown.bs.collapse', function () {
        $('html, body').animate({
            scrollTop: $(this).parent().offset().top - $('.navbar-theme').outerHeight()
        }, 500);
    });

    // =====chetan======

    $('.btn-group.btn-group-theme-1.btn-group-sm .btn').click(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });
});









