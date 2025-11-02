function initView() {
    const counterNode = document.querySelector('.js-counter');
    const incrementBtnNode = document.querySelector('.js-increment-btn');
    const decrementBtnNode = document.querySelector('.js-decrement-btn');
    const resetBtnNode = document.querySelector('.js-reset-btn');

    // Добавляем обработчики событий
    incrementBtnNode.addEventListener('click', () => {
        counter.increment();
        view.render({ counter: counter.get() });
    });

    decrementBtnNode.addEventListener('click', () => {
        counter.decrement();
        view.render({ counter: counter.get() });
    });

    resetBtnNode.addEventListener('click', () => {
        counter.reset();
        view.render({ counter: counter.get() });
    });

    return {
        render({ counter }) {
            counterNode.innerHTML = counter;
        }
    };
}