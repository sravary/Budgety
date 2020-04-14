// BUDGET CONTROLLER
var budgetController = (function() {
    

})();


// UI CONTROLLER
var UIController = (function() {

})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        // 1. Get the field input data

        // 2. Add item to the budget controller

        // 3. Add new item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('It will work properly soon enough!')
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // This also adds a keypress event listener, specifically the return/enter key
    // We will need its keyCode number by console logging the event in the DOM
    // NOTE: event.which is for older browsers who do not recognize keyCodes
    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

    

})(budgetController, UIController);