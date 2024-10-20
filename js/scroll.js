window.addEventListener('scroll', function() {
    // Получаем положение вертикальной прокрутки страницы
    let scrollPosition = window.scrollY;

    // Получаем ряды текста
    const row1 = document.getElementById('row1');
    const row2 = document.getElementById('row2');

    // Двигаем ряды в противоположные стороны на основе прокрутки
    row2.style.transform = `translateX(${scrollPosition * 0.5}px)`; // Движение вправо
    row1.style.transform = `translateX(${-scrollPosition * 0.5}px)`; // Движение влево
});
