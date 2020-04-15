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
    };
    
    // Make public method to allow other modules to add a new item to data structure
    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // [1 2 3 4 5], next ID = 6
            // [1 2 4 6 8], next ID = 9
            // ID = lars ID + 1

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        }
    };


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
        var input, newItem;


        // 1. Get the field input data
        input = UICtrl.getinput();

        // 2. Add item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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