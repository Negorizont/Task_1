let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income : [],
  saving: false
};

let question = prompt("Введите обязательную статью расходов в этом месяце", "");
let answer = prompt("Во сколько обойдется?", "");
appData.expenses[question] = answer;

alert(appData.budget);