"use strict";

const quizQuestions = [
    {
        'question': 'У Мистецтва батько артист?',
        'answer': 'так',
    },
    {
        'question': 'Торгандроч дзвонить Артуру?',
        'answer': 'ні',
    },
    {
        'question': 'Інтернет - це пауза?',
        'answer': 'так',
    },
    {
        'question': 'Торгандроч винен Архімеду гроші?',
        'answer': 'так',
    },
    {
        'question': 'Нір-Гюль приїхав у Єгипет?',
        'answer': 'ні',
    },
]

const prepareQuiz = () => {
    alert('Відповідайте так або ні. Починаємо через 5 секунд');
    setTimeout(startQuiz, 5000)
}

const startQuiz = () => {
    let [trueAnswers, falseAnswers] = [0, 0];
    for (const element of quizQuestions) {
        const answer = prompt(element.question)
        if (answer.toLowerCase() === element.answer) trueAnswers++;
        else falseAnswers++;
    }
    alert(`✔️Ви відповіли правильно на ${trueAnswers} питання(ь)\n❌Ви відповіли неправильно на ${falseAnswers} питання(ь)`);
}
