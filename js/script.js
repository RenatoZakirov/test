// let answers = [],
// 	questions = [
// 	'как ваше имя?',
// 	'как ваша фамилия?',
// 	'сколько вам лет?'
// 	];

// for (let i = 0; i < questions.length; i++) {
// 	answers[i] = prompt(questions[i])
// }
// document.write(answers)

// let age = prompt('сколько вам лет?');
// if (age > 18) {
// 	alert('вы можете войти')
// } else {
// 	alert('рановато еще')
// }

// function calc(a, b) {
// 	console.log(a + b)
// };
// calc(3, 6);
// calc(67, 12);
// calc(98, 34);


function myFirstApp(name, age) {
  alert ('Привет, меня зовут ' + name + ' и это моя первая программа!');
  function showSkills() {
    var skills = ["html", "css", "javaScript"];
    for (var i = 0; i < skills.length; i++) {
      alert ('я владею ' + skills[i]);
    }
  }
  showSkills();
  function checkAge(age) {
    if (age > 18) {
      alert ('ты подходишь нам по возрасту!');
    } else {
      alert ('к сожалению ты еще очень молод:(, пожалуйста покинь этот сайт');
    }
  }
  checkAge(age);
  function calcPow(num) {
    alert ('квадрат числа ' + num + ' равен числу - ' + (num*num));
  }
  calcPow(4);
}
myFirstApp('Bobby', 42);
