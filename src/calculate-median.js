function calculate_median(array) {

    var evenPortionArray = separate_array(array);

    if (evenPortionArray.length % 2 === 0) {

        return even_array_median(evenPortionArray);
    } else {

        return odd_array_median(evenPortionArray);
    }
}

function even_array_median(array) {

    return (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
}

function odd_array_median(array) {

    return array[parseInt(array.length / 2)];
}

function separate_array(array) {
    
    var evenPortionArray = [];

    array.forEach(function (item, index) {
        if (index % 2 != 0) {
            evenPortionArray.push(item);
        }
    });

    return evenPortionArray.sort(function (a, b) {

        return a - b;
    });
}

module.exports = calculate_median;
