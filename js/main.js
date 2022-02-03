        // 마우스 스크롤기능 없에기
        window.addEventListener("wheel", function (e) {
            e.preventDefault();
        }, { passive: false });



        // js에서는 html을 변수로 두고 scrollTop을 통해 js 로드 시 
        // 혹시라도 만약에 뷰의 Yposition이 0이 아닐 경우를 대비해 다음과 같은 값을 추가한다.
        var mHtml = $("html");
        var page = 1;

        mHtml.animate({ scrollTop: 0 }, 10);




        // 휠 이벤트 처리
        $(window).on("wheel", function (e) {
            if (mHtml.is(":animated")) return;
            if (e.originalEvent.deltaY > 0) {
                if (page == 6) return;
                page++;
            } else if (e.originalEvent.deltaY < 0) {
                if (page == 1) return;
                page--;
            }
            var posTop = (page - 1) * $(window).height();
            mHtml.animate({ scrollTop: posTop },500);
        })





        // 마우스오버 시 스크롤
        $(function () {
            // 포트폴리오 1 pc
            $('.portfolio1 .portfolio_photo').mouseover(function () {
                $('.portfolio1 .portfolio_photo img').stop().animate({ 'marginTop': '-2243.69px' }, 5000);
            });
            $('.portfolio1 .portfolio_photo').mouseout(function () {
                $('.portfolio1 .portfolio_photo img').stop().animate({ 'marginTop': '0px' }, 2000);
            });

            // 포트폴리오 2 pc
            $('.portfolio2 .portfolio_photo').mouseover(function () {
                $('.portfolio2 .portfolio_photo img').stop().animate({ 'marginTop': '-1827.83px' }, 5000);
            });
            $('.portfolio2 .portfolio_photo').mouseout(function () {
                $('.portfolio2 .portfolio_photo img').stop().animate({ 'marginTop': '0px' }, 2000);
            });
                    // 포트폴리오 2 모바일
                    $('.portfolio2 .mobile').mouseover(function () {
                        $('.portfolio2 .img2 img').stop().animate({ 'marginTop': '-1780px' }, 5000);
                    });
                    $('.portfolio2 .mobile').mouseout(function () {
                        $('.portfolio2 .img2 img').stop().animate({ 'marginTop': '0px' }, 2000);
                    });

            // 포트폴리오 3 pc
            $('.portfolio3 .portfolio_photo').mouseover(function () {
                $('.portfolio3 .portfolio_photo img').stop().animate({ 'marginTop': '-2087.84px' }, 5000);
            });
            $('.portfolio3 .portfolio_photo').mouseout(function () {
                $('.portfolio3 .portfolio_photo img').stop().animate({ 'marginTop': '0px' }, 2000);
            });
                    // 포트폴리오 3 모바일
                    $('.portfolio3 .mobile').mouseover(function () {
                        $('.portfolio3 .img2 img').stop().animate({ 'marginTop': '-2144px' }, 5000);
                    });
                    $('.portfolio3 .mobile').mouseout(function () {
                        $('.portfolio3 .img2 img').stop().animate({ 'marginTop': '0px' }, 2000);
                    });

            // 포트폴리오 4 pc
            $('.portfolio4 .portfolio_photo').mouseover(function () {
                $('.portfolio4 .portfolio_photo img').stop().animate({ 'marginTop': '-2157.64px' }, 5000);
            });
            $('.portfolio4 .portfolio_photo').mouseout(function () {
                $('.portfolio4 .portfolio_photo img').stop().animate({ 'marginTop': '0px' }, 2000);
            });
                    // 포트폴리오 4 모바일
                    $('.portfolio4 .mobile').mouseover(function () {
                        $('.portfolio4 .img2 img').stop().animate({ 'marginTop': '-2394px' }, 5000);
                    });
                    $('.portfolio4 .mobile').mouseout(function () {
                        $('.portfolio4 .img2 img').stop().animate({ 'marginTop': '0px' }, 2000);
                    });

            // 포트폴리오 5 pc
            $('.portfolio5 .portfolio_photo').mouseover(function () {
                $('.portfolio5 .portfolio_photo img').stop().animate({ 'marginTop': '-2897.52px' }, 5000);
            });
            $('.portfolio5 .portfolio_photo').mouseout(function () {
                $('.portfolio5 .portfolio_photo img').stop().animate({ 'marginTop': '0px' }, 2000);
            });
        });