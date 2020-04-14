// DATA MODULE: (each module is a standalone that does not know about other modules)
// Create an IIFE to keep it private from the outside scope
var budgetController = (function() {
    var x = 23;
    var add = function(a) {
        return x + a;
    }
    // This part exposes the function to the public
    // and gives access to x and add because a closure is created
    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})();


// UI MODULE:
var UIController = (function() {

})();



// APP CONTROLLER MODULE: (this module is aware of the other modules and has access to their elements
// by placing them as arguments in the function)
var controller = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);
    // This part exposes the function to the public
    // and gives access to z because a closure is created
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);