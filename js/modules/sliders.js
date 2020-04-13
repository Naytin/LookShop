const sliders = (slides, dir, prev, next) => { 
    /** slides - наш єлем слайд, dir - направление слайдера  prev, next - кнопки навигации **/ 
    let slideIndex = 1; // index Слайда - первый слайдер будет показан под номером 1
    const items = document.querySelectorAll(slides);
         

    
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

        items[slideIndex - 1].style.display = 'block';

    }

    showSlides(slideIndex);

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
            changeSlides(-1);
            // при перелистывании слайдера добавляем анимацию 
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');

        });
        nextBtn.addEventListener('click', () => {
            changeSlides(1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });
    }catch(e){}
        
};

export default sliders;