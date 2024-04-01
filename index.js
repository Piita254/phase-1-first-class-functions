// receivesAFunction function
const receivesAFunction = (callback) => {
    // Call the callback function
    callback();
};

// returnsANamedFunction function
const returnsANamedFunction = () => {
    // Define and return a named function
    const namedFunction = function named() {
        console.log("This is a named function.");
    };
    return namedFunction;
};

// returnsAnAnonymousFunction function
const returnsAnAnonymousFunction = () => {
    // Return an anonymous function
    return () => {
        console.log("This is an anonymous function.");
    };
};

const callbackFunction = () => {
    console.log("Callback function called.");
};

receivesAFunction(callbackFunction);


const namedFunction = returnsANamedFunction();

namedFunction();


const anonymousFunction = returnsAnAnonymousFunction();

anonymousFunction();
