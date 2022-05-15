let sum = (a, b) => a + b



console.log(` Стрелочная функция ${sum}`)


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );



  let ask = (question, yes, no) => {
      if (confirm(question)) return yes()
      else return no()
  }