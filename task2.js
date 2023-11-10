const getSimpleNumber = function (number) {
    if ( number === 0 || number === 1) {
       return alert('Уникальное значение');
    } else if (number > 1000 || number < 0) {
        return alert('Данные неверны');
    };
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return alert('Натуральное число');
        };
    };
    return alert('Простое число');
 }