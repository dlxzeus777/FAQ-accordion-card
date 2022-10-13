// //QUESTIONS
// const question1 = document.querySelector('.questions1');
// const question2 = document.querySelector('.questions2');
// const question3 = document.querySelector('.questions3');
// const question4 = document.querySelector('.questions4');
// const question5 = document.querySelector('.questions5');

// //ANSWERS
// const answers1 = document.querySelector('.answers1');
// const answers2 = document.querySelector('.answers2');
// const answers3 = document.querySelector('.answers3');
// const answers4 = document.querySelector('.answers4');
// const answers5 = document.querySelector('.answers5');




// question1.addEventListener('click', () => 
// {
//     answers1.classList.toggle('hidden');
// })

// question2.addEventListener('click', () => 
// {
//     answers2.classList.toggle('hidden');
// })

// question3.addEventListener('click', () => 
// {
//     answers3.classList.toggle('hidden');
// })

// question4.addEventListener('click', () => 
// {
//     answers4.classList.toggle('hidden');
// })

// question5.addEventListener('click', () => 
// {
//     answers5.classList.toggle('hidden');
// })

//FINAL SOLUTION (FIGURED IT OUT MYSELF YAY!)

const questions = document.querySelectorAll('.questions');
const answers = document.querySelectorAll('.answers');
const arrow = document.querySelectorAll('.arrow');



questions.forEach((question, index) => 
{
    question.addEventListener('click', () =>
    {
        question.classList.toggle('bold');
        answers[index].classList.toggle('hidden');
        arrow[index].classList.toggle('rotate');
    })
})



