let money, 
    time;

function start() {

  money = prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == '' || money == null) {
    money = prompt("Ваш бюджет на месяц?", "");
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income : [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", "");
      let b = +prompt("Во сколько обойдется?", "");
    
      if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null &&
      a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        i = i--;
      } 
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget/30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений");
      let persent = +prompt("Под какой процент?");
  
      appData.monthIncome = save/100/12+persent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function(){
    for (let i = 0; i < 3; i++) {
      appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
    }
  },
  chooseIncome: function() {
    let items = prompt("Что приносит дополнительный доход", "(Перечислите через запятую)", "");
    if (typeOf(items) == 'String' && items != '' && typeof(items) != null) {
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что-то еще?", ""));
      appData.income.sort();

      let letter = "Способы доп. заработка: ";
      appData.income.forEach(function(item, index) {
        if (index != appData.income.length - 1) {
          letter += (index+1) + ": " + item + ', ';
        } else {
          letter += (index+1) + ": " + item + '.';
        }
      }); 
    } 
  }
};

let letterConsole = "Наша программа включает в себя данные: ";
for (let key in appData) {
  letterConsole += ":\n" + key + ": " + appData[key]; 
}
console.log(letterConsole)