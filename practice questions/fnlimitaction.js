// create a function that limits an action to run only a fixed number of times
function limitAction(action, limit) {
    let count = 0;
    return function() {
        if (count < limit) {
            count++;
            return action();
        } else {
            console.log("Action limit reached");
        }
    }
}


const limitedAction = limitAction(() => console.log("Action executed"), 3);

limitedAction(); // Action executed
limitedAction(); // Action executed
limitedAction(); // Action executed
limitedAction(); // Action limit reached