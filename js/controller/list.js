(function(){
  angular
    .module('quizApp')
    .controller('listCtrl',ListController);

    ListController.$inject = ['quizMetrics','DataService'];
    function ListController(quizMetrics,DataService){
      //Acronym for View Model
      var vm = this;
      vm.quizMetrics = quizMetrics;
      vm.search = "";
      vm.data= DataService.mountainData;
      vm.activeTurtle= {};
      vm.quizActive=false;
      vm.changeActiveTurtle = function(index){
        vm.activeTurtle=index;
      }
      vm.activateQuiz = function(){
        quizMetrics.changeState("quiz",true);
      }

    }



})();
