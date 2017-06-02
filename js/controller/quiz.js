(function(){
  angular
    .module('quizApp')
    .controller('quizCtrl', QuizController);
    QuizController.$inject = ['quizMetrics','DataService'];
    function QuizController(quizMetrics,DataService){
      var vm = this;
      vm.quizMetrics = quizMetrics;
      vm.dataService = DataService;
      vm.activeQuestion = 0;
      vm.error= false;
      vm.finalize = false;
      var numQuestionsAnswered = 0;
      vm.setActiveQuestion = function(index){
        if(index === undefined){
          var breakOut = false;
          var quizLength = DataService.quizQuestions.length - 1;

          while(!breakOut){
            // if activeQuestion is less than quizLength then increment activeQuestion or set it equal to 0
            vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;
            if(vm.activeQuestion === 0){
              vm.error =true;
            }
            if(DataService.quizQuestions[vm.activeQuestion].selected===null){
              breakOut = true;
            }
          }
        }else{
          vm.activeQuestion = index;
        }


      };
      vm.selectAnswer = function(index){
        DataService.quizQuestions[vm.activeQuestion].selected = index;
      };
      vm.questionAnswered = function(){
        var quizLength = DataService.quizQuestions.length;
        if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
          numQuestionsAnswered++;
          if(numQuestionsAnswered >= quizLength){
            //finalize the quiz
            for(var i=0;i<quizLength;i++){
              if(DataService.quizQuestions[i].selected === null){
                setActiveQuestion(i);
                //Break out of for loop
                return;
              }
            }
            vm.error=false;
            vm.finalize =true;
            //Break
            return;
          }
        }
        vm.setActiveQuestion();
      };
      vm.finalizeAnswers = function(){
        vm.finalize = false;
        numQuestionsAnswered = 0;
        vm.activeQuestion = 0;
        quizMetrics.markQuiz();
        quizMetrics.changeState("quiz",false);
        quizMetrics.changeState("results",true);
      };

    }

})();
