$(document).ready(function () {
    // e.preventDefault();

    function removeAllSidebarToggleClass() {
        $('#sidebar-toggle-hide').removeClass('d-md-inline');
        $('#sidebar-toggle-hide').removeClass('d-none');
        $('#sidebar-toggle-show').removeClass('d-inline');
        $('#sidebar-toggle-show').removeClass('d-md-none');

    };


    $('#sidebar-toggle-hide').click(function (e) {
        $('#sidebar').fadeOut(300);
        $('#main-body').animate({ width: "100%" }, 1000, ResizeObserver);
        setTimeout(() => {
            removeAllSidebarToggleClass();
            $('#sidebar-toggle-hide').addClass('d-none');
            $('#sidebar-toggle-show').removeClass('d-none');
        }, 300);
    });
    $('#sidebar-toggle-show').click(function (e) {
        $('#sidebar').fadeIn(300);
        $('main-body').animate({ width: "100%" }, 300);
        setTimeout(() => {
            removeAllSidebarToggleClass();
            $('#sidebar-toggle-hide').removeClass('d-none');
            $('#sidebar-toggle-show').addClass('d-none');
        }, 300);
    });




    $('#menu-toggle').click(function (e) {
        $('#body-header').toggle(300);
    });


    $('#search-toggle').click(function (e) {
        $('#search-input').animate({ width: '12rem' }, 400);
        setTimeout(() => {
            $('#search-toggle').removeClass('d-md-inline');
            $('#search-area').addClass('d-md-inline');
        }, 400);

    });
    $('#search-area-hide').click(function (e) {
        $('#search-input').animate({ width: '0rem' }, 400);
        setTimeout(() => {
            $('#search-toggle').addClass('d-md-inline');
            $('#search-area').removeClass('d-md-inline');

        }, 400);
    });

    $('#header-notification-toggle').click(function (e) {
        $('#header-comment').fadeOut(300);
        $('#header-profile').fadeOut(300);
        $('#header-notification').fadeToggle();
    });

    $('#header-comment-toggle').click(function (e) {
        $('#header-notification').fadeOut(300);
        $('#header-profile').fadeOut(300);
        $('#header-comment').fadeToggle();
    });

    $('#header-profile-toggle').click(function (e) {
        $('#header-comment').fadeOut(300);
        $('#header-notification').fadeOut(300);
        $('#header-profile').fadeToggle();
    });


    $('.sidebar-group-link').click(function (e) {



        $('.sidebar-group-link').removeClass('sidebar-group-link-active');
        $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
        $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-left');

        $(this).addClass('sidebar-group-link-active');
        $(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-left');
        $(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-down');

        // $('.sidebar-group-link-active').click(function (e) {
        //     $('.sidebar-group-link').removeClass('sidebar-group-link-active');
        //     $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
        //     $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-left');
        // });

    });

    $('#full-screen').click(function (e) {
        toggleFullScreen();

    });
    function toggleFullScreen() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullscreenElement && document.webkitIsFullscreenElement)) {
            if (document.documentElement.requestFullcreen) {
                document.documentElement.requestFullcreen();
            }            
            else if (document.documentElement.mozRequestFullscreen) {
                document.documentElement.mozRequestFullscreen();

            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);

            }
            $('#screen-compress').removeClass('d-none');
            $('#screen-expand').addClass('d-none');

            
        }
    }
})