const input = require('readline-sync');
const testKey = require('./test2.json')

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
// let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
//let question = "Who was the first American woman in space? ";
//let correctAnswer = "Sally Ride";
//let candidateAnswer = "";
//let questions = [];
//let correctAnswers = [];
//let candidateAnswers = [];

/*
questions = ["Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];

correctAnswers = ["Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"];
*/



function askForName() {
  const candidateName = input.question("Please enter your name: ");
  console.log(`Hello, ${candidateName}!`);
  return candidateName;
}

function askQuestions(testData) {
  const candidateAnswers = [];

  for (let i = 0; i < testData.length; i++) {
    candidateAnswers.push(input.question('\n'+testData[i].question));
  }

  return candidateAnswers;
}

function gradeQuiz(candidateName, testData, candidateAnswers, passingGrade = 80) {
  const questionCount = testData.length;
  let totalCorrectAnswers = 0;

  console.log(`\nCandidate Name: ${candidateName}`);

  for (let i = 0; i < testData.length; i++) {
    console.log(`${i + 1}) ${testData[i].question}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`)
    console.log(`Correct Answer: ${testData[i].answer}\n`)
    if (candidateAnswers[i].toLowerCase() === testData[i].answer.toLowerCase()) {
      totalCorrectAnswers++;
    }
  }
  const finalGrade = totalCorrectAnswers / questionCount * 100
  console.log(`>>> Overall Grade: ${finalGrade}% (${totalCorrectAnswers} of ${questionCount} responses correct) <<<\n>>> Status: ${finalGrade >= passingGrade ? "PASSED" : "FAILED"} <<<`);
  return finalGrade;
}

function runProgram() {
  const candidateName = askForName();


  const answers = askQuestions(testKey);
  gradeQuiz(candidateName, testKey, answers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  //candidateName: candidateName,
  //question: question,
  //correctAnswer: correctAnswer,
  //candidateAnswer: candidateAnswer,
  //questions: questions,
  //correctAnswers: correctAnswers,
  //candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};