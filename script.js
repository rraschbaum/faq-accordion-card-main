let accordianItem = document.getElementsByClassName('accordian__item');
let answerActive = document.getElementsByClassName('answer');
let questionActive = document.getElementsByClassName('question__copy');
let iconActive = document.getElementsByClassName('question__icon');

// Make a click event for each answer
for (i = 0; i < accordianItem.length; i++) {
    let cur = i;

    accordianItem[i].addEventListener('click', function(){
        answerActive[cur].classList.toggle('answer--active');
        questionActive[cur].classList.toggle('question__copy--active');
        iconActive[cur].classList.toggle('question__icon--active');
    }); 
}
