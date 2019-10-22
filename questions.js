var question1 = 
    {
      title1: "Commonly used data types DO NOT include:",
      choices1: ["Strings", "Booleans", "Alerts", "Numbers"],
      answer1: "Alerts"
    };
var question2 =   
    {
      title2: "The condition in an if / else statement is enclosed within ____.",
      choices2: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
      answer2: "Parentheses"
    };
var question3 =
    {
        title3:"Variables can contain which of these?",
        choices3: ["Strings", "Numbers", "Booleans", "All the above"],
        answer3: "All the above"
    };
var question4 =
    {
        title4: "What IS NOT one of the three fundamental programming languages of the modern web?",
        choices4: ["JavaScript", "HTML", "Chrome", "CSS"],
        answer4: "Chrome"
    };
var question5 =
    {
        title5: "Which of these answers doesn't fit with the rest?",
        choices5: ["Alerts", "Consoles", "Prompts", "Confirms"],
        answer5: "Consoles"
    };
var question6 =
    {
        title6: "The JavaScript 'If/Else' is which kind of statement?",
        choices6: ["Conditional", "Declarative", "Imperative", "Exclamative"],
        answer6: "Conditional"
    };
var question7 =
    {
        title7: "In the array: ['Ham', 'Bacon', 'Sausage', 'Beef'] which index does 'Ham' belong to?",
        choices7: ["1", "2", "0", "-1"],
        answer7: "0"
    };
 
//   ];

  
document.getElementById("q1").innerText = question1.title1;
document.getElementById("choices1").innerText = choiceOptions;

var choices1List = document.getElementById("choices1");


for (var i = 0; i < choices1.length; i++) {
var choiceOptions = choices1[i]
var li = document.createElement("li");
    li.textContent = choiceOptions;
    choicesList.append(li);
};