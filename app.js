// BUDGET CONTROLLER
var budgetController = (function () {

    //some code

})();


// UI CONTROLLER
var UIController = (function () {

    //Writing a method to get a value from the user
    return{
      getInput: function () {
            return {
                type: document.querySelector('.add__type').value, //will be either in or exp
                description: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };
      }  
    }; 

})();

//GLOBAL APP CONTROLLER
var appController = (function (budgetCtrl, UICtrl) {

    var controlAddItem = function () {
        //1. Get thr field input data
        var input = UICtrl.getInput();
        console.log(input);
        //2.Add the Item to the budge controller
        //3. Add the item to the UI
        //4. Calculate the budget
        //5. display the the result
    }
    //Some Code
    document.querySelector('.add__btn').addEventListener('click', controlAddItem);

    document.addEventListener('keypress', function (e) {
        if(event.keyCode === 13 || event.which === 13){
            console.log("Enter was pressed");
        }
        
    })
})(budgetController,UIController);