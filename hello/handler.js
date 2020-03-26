"use strict"

module.exports = (event, context) => {
    let err;
    const result =             {
        status: (event.body != "{}" )? "You said: " + JSON.stringify(event.body) : "Hello OpenFaaS"
    };

    context
        .status(200)
        .succeed(result);
}
