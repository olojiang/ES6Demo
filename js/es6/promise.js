"use strict";

/*
 A Promise represents an operation that hasn't completed yet, but is expected in the future.
 
 new Promise(executor);
 new Promise(function(resolve, reject) { ... });
 */

/*
 pending: initial state, not fulfilled or rejected.
 fulfilled: meaning that the operation completed successfully.
 rejected: meaning that the operation failed.
 */

/*
 Promise.prototype.catch(onRejected)
 Promise.prototype.then(onFulfilled, onRejected)
 
 Promise.reject(reason)
 Promise.resolve(value)
 */
let promiseCount = 0;

function createPromise() {
    var thisPromiseCount = ++promiseCount;
    var p1 = new Promise(
        function (resolve, reject) {
            console.info("Promise started, but not end yet, promiseCount:", thisPromiseCount);
            
            setTimeout(function () {
                if (Math.random() >= 0.5) {
                    resolve(thisPromiseCount);
                } else {
                    reject(thisPromiseCount + ": is rejected");
                }
            }, 3000);
        }
    );
    
    // Promise is a future resolve or rejected object
    p1.then(function (value) {
        console.info("Resolved, value:", value);
    }).catch(function (reason) {
        console.info("Rejected, reason:", reason);
    });
}

var i, len;
for (i = 0, len = 5; i < len; i++) {
    createPromise();
}