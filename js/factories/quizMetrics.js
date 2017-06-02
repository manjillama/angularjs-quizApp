(function(){
  angular
    .module('quizApp')
    .factory('quizMetrics',QuizMetrics);

    QuizMetrics.$inject = ['DataService'];
    function QuizMetrics(DataService){
      var quizObj = {
        quizActive: false,
        resultsActive:false,
        correctAnswers: [],
        numCorrect: 0,
        changeState: function(metric, state){
          if(metric === 'quiz'){
            quizObj.quizActive = state;
          }else if(metric == 'results'){
            quizObj.resultsActive = state;
          }else{
            return false;
          }
        },
        markQuiz: function(){
          quizObj.correctAnswers = DataService.correctAnswers;
          for(var i=0; i<DataService.quizQuestions.length;i++){
            if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
              DataService.quizQuestions[i].correct = true;
              quizObj.numCorrect++;
            }else{
              DataService.quizQuestions[i].correct = false;
            }
          }
        }
      };
      return quizObj;
    }
})();
