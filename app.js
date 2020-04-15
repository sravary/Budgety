// BUDGET CONTROLLER
var budgetController = (function() {
    // Function Constructors for our expense and income objects
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    // We need to store all the expenses and incomes
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    } 

})();


// UI CONTROLLER
var UIController = (function() {

    // Create object for all the class selectors
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    // This is the method of returning all three inputs from the interface
    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will either be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        // This will make the private DOMstrings public for us to use below in the Global App Controller
        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    // Create function for all Event Listeners (remember to call thereafter)
    var setupEventListeners = function() {
        var DOM =  UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // This also adds a keypress event listener, specifically the return/enter key
        // We will need its keyCode number by console logging the event in the DOM
        // NOTE: event.which is for older browsers who do not recognize keyCodes
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    

    var ctrlAddItem = function() {
        // 1. Get the field input data
        var input = UICtrl.getinput();

        // 2. Add item to the budget controller

        // 3. Add new item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
    };

    // In order to make the private setupEventListener public, we must return an object
    return {
        init: function() {
            setupEventListeners();
        }
    };
})(budgetController, UIController);

// Must call our initialization function outside the controller
controller.init();