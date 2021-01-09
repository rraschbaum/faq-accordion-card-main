let accordianItem = document.getElementsByClassName('accordian__item');
let answerActive = document.getElementsByClassName('accordian__copy');
let questionActive = document.getElementsByClassName('accordian__title');
let iconActive = document.getElementsByClassName('accordian__icon');

// Make a click event for each answer
for (i = 0; i < accordianItem.length; i++) {
    let cur = i;

    accordianItem[i].addEventListener('click', function(){
        answerActive[cur].classList.toggle('accordian__copy--active');
        questionActive[cur].classList.toggle('accordian__title--active');
        iconActive[cur].classList.toggle('accordian__icon--active');
    }); 
}
