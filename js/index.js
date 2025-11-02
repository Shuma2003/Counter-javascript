const INITIAL_COUNTER = 0; // исправлена опечатка
const counter = createCounter(INITIAL_COUNTER);

console.log(counter.get()); // нужно вызывать функцию

const view = initView();
view.render({
    counter: counter.get() // здесь тоже нужно вызывать функцию
});

function initView() {
    const counterNode = document.querySelector('.js-counter');
    const incrementBtnNode = document.querySelector('.js-increment-btn');
    const decrementBtnNode = document.querySelector('.js-decrement-btn'); // исправлено: dincrement -> decrement
    const resetBtnNode = document.querySelector('.js-reset-btn');

    return {
        render({ counter }) {
            counterNode.innerHTML = counter;
        }
    };
}
function onIncrementBtnclick(){
    counter.increment();
    view.render({
        counter: counter.get()
    });
}

function onDecrementBtnclick(){
        counter.decrement();
    view.render({
        counter: counter.get()
    });
}

function onResetBtnclick(){
            counter.reset();
    view.render({
        counter: counter.get()
    });
}