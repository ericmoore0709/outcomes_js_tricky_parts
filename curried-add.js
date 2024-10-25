function curriedAdd(total = 0) {
    if (arguments.length === 0) return total;

    return function (num) {
        if (num === undefined) {
            return total;
        }
        return curriedAdd(total + num);
    };
}

module.exports = { curriedAdd };
