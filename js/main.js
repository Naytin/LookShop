$(document).ready(function(){
    var owl = $('.carousel-wrapp')
    next = $('.carousel-next'),
    prev = $('.carousel-prev');


    owl.owlCarousel({
        loop:false,
        margin: 10,
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

    owl.trigger('next.owl.carousel');
});

prev.on('click', () => {

    owl.trigger('prev.owl.carousel');
});

        
});

(function(){
    try{
        const openAcordion = (activeSelector, showSelector, animate = false, animateProp = 'bounce') => {
            const menu = document.querySelector(activeSelector),
                  showMenus = document.querySelectorAll(showSelector);
                //   console.log(animateProp);
    
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
    }catch(e){}

    
    
    

    const dropdownMenu = (dropdownSelector, submenuSelector, activeSelector) =>{
        const dropdown = document.querySelectorAll(dropdownSelector),
              submenu = document.querySelectorAll(submenuSelector);
        
    
        dropdown.forEach((item, i) =>{
            item.addEventListener('click', (e) =>{
                // e.preventDefault();
                if(submenu[i].style.display == 'block'){
                    submenu[i].classList.toggle(activeSelector);
                    submenu[i].classList.add('animated', 'fadeOut');

                }else{
                    submenu[i].classList.add('animated', 'fadeIn');
                    submenu[i].classList.toggle(activeSelector);

                }

                });
            });
        }   
            
    dropdownMenu('.sidebar__item-text','.form-checkbox','active-dropdown');    
    dropdownMenu('.dropdown','.submenu','active-dropdown');
    dropdownMenu('.sidebar__header','.sidebar__body','active-dropdown');

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
    try{
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
    }catch(e){}
    
        ///-----------------------TABS END------------------------////

        ///-----------------------MODALS------------------------////

        const modals = () => {
            function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true){
                const trigger = document.querySelectorAll(triggerSelector),
                      modal = document.querySelector(modalSelector),
                      close = document.querySelector(closeSelector),
                      windows = document.querySelectorAll('[data-modal]'),
                      scroll = calcScroll();
        
                trigger.forEach(item => {
                    item.addEventListener('click', (e) =>{
                        if (e.target){
                            e.preventDefault();
                        }
        
                        windows.forEach(item => {
                            item.style.display = 'none'
                        });
                        
                        // modal.classList.add('animated', 'zoomInDown');
                        modal.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                        document.body.style.marginRight = '0px';
                    });
                });
        
                close.addEventListener('click', () => {
        
                    windows.forEach(item => {
                        item.style.display = 'none'
                    });
        
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                });
        
                modal.addEventListener('click', (e) =>{
                    if (e.target === modal && closeClickOverlay){   
        
                        windows.forEach(item => {
                            item.style.display = 'none'
                        });
        
                        modal.style.display = 'none';
                        document.body.style.overflow = '';
                        document.body.style.marginRight = `0px`;
                    
                    }
                });
            }
        
                 
            function calcScroll(){ //функция которая отнимает ширину скролла, при открытии модального окна
                let div = document.createElement('div');
        
                div.style.width = '50px';
                div.style.height = '50px';
                div.style.overflowY = 'scroll';
                div.style.visibility = 'hidden';
        
                document.body.appendChild(div);
                let scrollWidth = div.offsetWidth - div.clientWidth;
                let a = div.clientWidth;      
                div.remove();
        
                return scrollWidth;
        
            }
        
            bindModal('.header__user-link', '.popup-login', '.popup-login .popup-close');
            bindModal('.no-account', '.popup-register', '.popup-register .popup-close', false);
            bindModal('.no-password', '.popup-resetPassword', '.popup-resetPassword .popup-close',false);

        }; 
        
        modals();

        ///-----------------------MODALS END------------------------////

        ///-----------------------PAGINATIONS------------------------////



        // let list_items = [
        //     'img/clip.jpg',
        //     'img/clip2.jpg',
        //     'img/clip3.jpg',
        //     'img/clip4.jpg',
        //     'img/clip4.jpg',
        //     'img/clip6.jpg',
        //     'img/clip7.jpg',
        //     'img/clip8.jpg',
        // ];


        try{
            const items = document.querySelector('.products').children,
              prev = document.querySelectorAll('.pagination__prev'),
              next = document.querySelectorAll('.pagination__next'),
              pagin = document.querySelectorAll('.pagination-wrapp'),
              pageCount = document.querySelectorAll('.pages-count'),
              maxItem = 9;
        let index = 1,
            allItems = items.length;


        const pagination = Math.ceil(items.length/maxItem);
       
        for(let i = 1; i < pagination + 1; i++){
            pagin.forEach(item =>{
                let num = document.createElement('div');
                num.classList.add('pagination__item');
                num.innerText = i;
                item.appendChild(num);
            })
            

        };

        if(index == 1){
            pageCount.forEach(item =>{
                item.innerText = `Showing ${index} - ${maxItem} of ${allItems}`;
            })
            
        }

        let numbersPage = document.querySelectorAll('.pagination__item');

        prev.forEach(item =>{
            item.addEventListener('click', function(){
                index--;
                // console.log(item);
                check();
                showItems();
            });
        })
        

        next.forEach(item => {
           
            item.addEventListener('click', function(){
                index++;
                // console.log(item);
                check();
                showItems();
                
            });
        })

        function check(){
           
            if(index == pagination){
                next.forEach(item => {
                    item.classList.add('disabled');
                })
                
            }else{
                next.forEach(item => {
                    item.classList.remove('disabled');
                })
            }

            if(index == 1){
                prev.forEach(item => {
                    item.classList.add('disabled');
                })
            }else{
                prev.forEach(item => {
                    item.classList.remove('disabled');
                })
            }
            
        }

        function showItems(){
            for(let i = 0; i < items.length; i++){
                items[i].classList.remove('show');
                items[i].classList.add('hide')

                if(i >= (index*maxItem) - maxItem && i < index*maxItem){

                    //if i greater than and equal to (index*maxItem)-maxItem;
                    //means (1*9)-9=0 if index=2 then (2*9)-9=9
                    items[i].classList.remove('hide');
                    items[i].classList.add('show');
                }
                
            }
        }

        showItems();
        check();
        }catch(e){}
        
             
              

    










        
       


        // const paginatItem = document.querySelector('.pagination'),
        //       list_elements = document.querySelector('.products'),
        //     //   list_elementss = document.querySelectorAll('.product-wrapp'),
        //       prod_item = document.querySelector('.product__img-wrapp');

        
            
        
        // let rows = 3,
        //     current_page = 1;

        // function displayList (items, wrapper, rows_per_page, page){
        //     wrapper.innerHTML = '';
        //     page--;

        //     let start = rows_per_page * page,
        //         end = start + rows_per_page,
        //         paginatItems = items.slice(start, end);
        //         console.log(start);

        //     for(let i = 0; i < paginatItems.length; i++){
        //         let item = paginatItems[i];
        //         console.log(item);

        //         let item_element = document.createElement('img');
        //         item_element.setAttribute('src', item);
        //         item_element.classList.add('product__img');
        //         wrapper.appendChild(item_element);
        //         // console.log(item_wrapp.children.firstchild);
        //     }
        // }

        // function setupPagination(items, wrapper, rows_per_page){
        //     wrapper.innerHTML = '';

        //     let page_count = Math.ceil(items.length / rows_per_page);
        //     for(let i = 1; i < page_count + 1; i++){
        //        let btn = paginationBtn(i,items);
        //     //    console.log(i);

        //        wrapper.appendChild(btn);
        //     }
        // }

        // function paginationBtn(page,items){
        //     let btn = document.createElement('button');
        //     btn.innerText = page;

        //     if( current_page == page){
        //         btn.classList.add('pagin-active');
        //     }

        //     btn.addEventListener('click', function(){
        //         current_page = page;
        //         displayList(items,list_elements,rows,current_page);
        //         let current_btn = document.querySelector('.pagination button.pagin-active');
        //         current_btn.classList.remove('pagin-active');

        //         btn.classList.add('pagin-active');
        //     });
                
        //     return btn;
        // }

        // displayList(list_items, list_elements, rows, current_page);
        // setupPagination(list_items, paginatItem, rows);
        ///-----------------------PAGINATIONS END------------------------////

})();








