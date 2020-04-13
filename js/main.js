$(document).ready(function(){
    var owl = $('.carousel-wrapp')
    next = $('.carousel-next'),
    prev = $('.carousel-prev');


    owl.owlCarousel({
        loop:true,
        // margin:10,
        responsiveClass: true,
        animateIn: true,
        animateOut: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            520:{
                items:2,
                nav:true,
            },
            765:{
                items:3,
                nav:true,
            },
            1000:{
                items:4,
                nav:true,
            },
            1300:{
                items:5,
                nav:true,
            },
            1600:{
                items:6,
                nav:true,
            },

            1800:{
                items:7,
                nav:true,
            }
        }
    });

        
next.on('click', () => {
    console.log('next');
    owl.trigger('next.owl.carousel');
});

prev.on('click', () => {
    console.log('prev');
    owl.trigger('prev.owl.carousel');
});


$('.dropdown').click(function(e){ // при клике открывает выпадающее меню 
    e.preventDefault();
    console.log('click');
    if($('.submenu', this).css('display') == 'block'){
        $('.submenu', this).fadeOut();
        $('.submenu', this).css('max-height','0');
        $('.submenu', this).css('display','none');
    }
    else{
        $('.submenu', this).fadeIn();
        $('.submenu', this).css('max-height','100em');
        $('.submenu', this).css('display','block');
    }
})

$(document).mouseup(function(e){ // При клике на любую область закрывает подменю
    var dropdown = $('.dropdown');
    if (e.target!=dropdown[0]&&dropdown.has(e.target).length === 0){
        $('.submenu', this).fadeOut();
        $('.submenu', this).css('max-height','0');
        $('.submenu', this).css('display','none');
    }
});

        
});

(function(){
    
    const openAcordion = (activeSelector, showSelector, animate = false, animateProp = 'bounce') => {
        const menu = document.querySelector(activeSelector),
              showMenus = document.querySelectorAll(showSelector);
              console.log(animateProp);

              menu.addEventListener('click', () =>{
                showMenus.forEach(item =>{
                    item.classList.toggle('block');
                    if(animate){
                        item.classList.toggle('animated');
                        item.classList.toggle(animateProp);
                    }
                })
              });
    }

    openAcordion('.active-menu','.nav__item-tab', true, 'bounceIn');
    openAcordion('.burger-menu','.dropdown', true, 'lightSpeedIn');
    // let activeMenu = document.querySelector('.active-menu'),
    //     tabsMenu = document.querySelectorAll('.nav__item-tab');

    //     activeMenu.addEventListener('click', function(){
    //         tabsMenu.forEach(function(item){
    //             // item.style.display = 'block';
    //             item.classList.toggle('block');
    //             item.classList.toggle('animated');
    //             item.classList.toggle('bounceIn');
    //         });
    //     });

       
   

    


    // const btnMenu = document.querySelectorAll('.dropdown');
    // const menuAll = document.querySelectorAll('.submenu');
    
    // const toggleMenu = function(item) {
    //         item.classList.toggle('open');     
    // }

    // btnMenu.forEach((item, i) =>{
    //     item.addEventListener('click', function(e) {
    //         let menu = this.querySelector('.submenu');
    //         menuAll.forEach(item => {
    //             item.classList.remove('open');
    //         });
    //         e.stopPropagation();
    //         toggleMenu(menu);
    //         eventTarget(menu,item)
    //     });
    // });

    // const eventTarget = function(targetMenu, buttonMenu) {
    //     document.addEventListener('click', function(e) {
    //         const target = e.target;
    //         const its_menu = target == targetMenu || targetMenu.contains(target);
    //         const its_btnMenu = target == buttonMenu
    //         const menu_is_active = targetMenu.classList.contains('open');
    //         if (!its_menu && !its_btnMenu && menu_is_active) {
    //             toggleMenu(targetMenu);
    //         }

    //     });
    // }

    //open search form
    let searchBtn = document.querySelector('.search__icon'),
        searchInput = document.querySelector('.search-form__input'),
        searchSubmit = document.querySelector('.search-form__submit');
        searchSubmit.style.display = 'none';
        searchInput.style.display = 'none';
        searchInput.style.width = '0';
        searchSubmit.style.width = '0';
        searchSubmit.classList.add('animated', 'fadeIn');
        searchInput.classList.add('animated', 'fadeIn');
        searchBtn.addEventListener('click', () => {
            if(searchInput.style.display === 'none' && searchSubmit.style.display === 'none'){
                searchSubmit.style.display = 'block';
                searchInput.style.display = 'block';
                searchInput.style.width = '150px';
                searchSubmit.style.width = '85px';
                
            }else{
                searchSubmit.style.display = 'none';
                searchInput.style.display = 'none';
                searchInput.style.width = '0';
                searchSubmit.style.width = '0';
                searchSubmit.classList.add('animated', 'fadeIn');
                searchInput.classList.add('animated', 'fadeIn');
            }
        });

        ///-----------------------SLIDER------------------------////



    const sliders = (slides, dir, prev, next, slideIn = 1) => { 
            /** slides - наш єлем слайд, dir - направление слайдера  prev, next - кнопки навигации **/ 
            let slideIndex = 1; // index Слайда - первый слайдер будет показан под номером 1
            const items = document.querySelectorAll(slides);
            // console.log(slideIn);   
            // console.log(slideIndex); 
        
            
            function showSlides(n){
                // проверяем, если кол-во наших слайдов меньше, чем мы прокручиваем слайд, то сбрасываем на 1
                if ( n > items.length){
                    slideIndex = 1;
    
                }
                // проверяем, если мы прокручиваем в отрицательнуюю сторону и параметр равен 0, то сбрасываем на количество слайдеров.
                if (n < 1){
                    slideIndex = items.length;
                }
        
                //скрываем все остальные слайды и показываем тот, который пришел по индексу
        
                items.forEach(item => {
                    item.classList.add('animated');
                    item.style.display = 'none';
                });

                if(slideIn > 1){
                    for(let i = 0; i < slideIn; i++ ){
                        items[i].style.display = 'block';
                    }
                }

                

                items[slideIndex - 1].style.display = 'block';
        
            }

            function hideSlides (n){
                // if(items.style.display = 'block' > slideIn){
                //     item[n].classList.add('animated');
                //     item[n].style.display = 'none';
                   
                // }
            }
        
            showSlides(slideIndex);
            hideSlides (slideIndex);
        
            //Перелистывание слайдера
            function changeSlides(n){
                showSlides(slideIndex += n)
                
            }
        
            /* проверяем, если селекторы кнопок не были переданы нашей функции, то 
            весь остальной скрипт будет работать */ 
            try {
                const  prevBtn = document.querySelector(prev),
                       nextBtn = document.querySelector(next);
        
                //если селекторы кнопок передали, то мы запускаем обработчик событий на эту кнопку.
                prevBtn.addEventListener('click', () => {
                    changeSlides(-slideIn);
                    // при перелистывании слайдера добавляем анимацию 
                    items[slideIndex - 1].classList.remove('slideInRight');
                    items[slideIndex - 1].classList.add('slideInLeft');
        
                });
                nextBtn.addEventListener('click', () => {
                    changeSlides(slideIn );
                    items[slideIndex - 1].classList.remove('slideInLeft');
                    items[slideIndex - 1].classList.add('slideInRight');
                });
            }catch(e){}
                
    };
    
        sliders('.slider__item', '', '.prev-btn', '.next-btn', 1);
        // sliders('.product__item', '', '.nav-for-carousel .prev-btn', '.nav-for-carousel .next-btn', 5);
        ///-----------------------SLIDER- END-----------------------////

        ///-----------------------TABS------------------------////
    const tabs = (headerS, tabS, contentS,activeC) => {
        const header = document.querySelector(headerS),
              tab = document.querySelectorAll(tabS),
              content = document.querySelectorAll(contentS);

        function hideTab(){
            content.forEach(item =>{
                item.style.display = 'none';
                item.classList.add('animated', 'fadeIn');
            });

            tab.forEach(item => {
                item.classList.remove(activeC);
            })
        }

        function showTab(i = 0){
            content[i].style.display = 'flex';
            tab[i].classList.add(activeC);
        }

        hideTab();
        showTab();

        header.addEventListener('click', (e) => {
            const target = e.target; // єто тот єлемент куда кликнул пользователь

             /* так как класслист работает с классами
            а не с аргумнтами, нам нужно отделить точну, с помощью регулярных выражений  */

            //проверяем, что мы действительно кликнули в один из табов
            if(target &&
            (target.classList.contains(tabS.replace(/\./, "")) || 
            target.parentNode.classList.contains(tabS.replace(/\./, "")))){
                // когда мы кликнули в один из табов, мы начинаем их перебирать и сохранять каждый таб и его индекс
                tab.forEach((item, i) => {
                    //проверяем, что єлемент по которому мы кликнули, именно тот, который перебирается в цикле
                    if(target == item || target.parentNode == item){
                        hideTab();
                        showTab(i);
                    }
                });
            }
           
        });

    };

    tabs('.nav__list-tabs', '.nav__item-tab', '.carousel-wrapp', 'active-tab');
        ///-----------------------TABS END------------------------////

})();








