(function(){
    const btnMenu = document.querySelectorAll('.dropdown');
    const menuAll = document.querySelectorAll('.submenu');

    const toggleMenu = function(item) {
            item.classList.toggle('open');     
    }

    btnMenu.forEach((item, i) =>{
        item.addEventListener('click', function(e) {
            let menu = this.querySelector('.submenu');
            menuAll.forEach(item => {
                item.classList.remove('open');
            });
            e.stopPropagation();
            toggleMenu(menu);
            eventTarget(menu,item)
        });
    });

    const eventTarget = function(targetMenu, buttonMenu) {
        document.addEventListener('click', function(e) {
            const target = e.target;
            const its_menu = target == targetMenu || targetMenu.contains(target);
            const its_btnMenu = target == buttonMenu
            const menu_is_active = targetMenu.classList.contains('open');
            // console.log(buttonMenu);
            if (!its_menu && !its_btnMenu && menu_is_active) {
                toggleMenu(targetMenu);
            }
        });
    }


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

})();

