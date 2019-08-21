(function () {
    const comma = /\B(?=(\d{3})+(?!\d))/g;
    const num = '1000000';
    const res = num.replace(comma, ',');
    console.log(res);
    console.log(comma.exec(num));
})();

(function () {
    const comma = /(?=(\d{3})+(?!\d))/g;
    const num = '123111321';
    const res = num.replace(comma, function () {
        console.log(arguments);
        return ','
    });
    console.log(res);
    console.log(comma.exec(num));
})();

