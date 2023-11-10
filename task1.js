function evenOddNull (arr) {
    let evenEl = 0;
    let oddEl = 0;
    let nullEl = 0;
    arr.forEach((el) => {
        if (typeof el === 'number' && !isNaN(el)) {
            if ( el === 0) {
                nullEl++;
            } else if ( el % 2 === 0) {
                evenEl++;
            } else {oddEl++;}} });
    console.log(`Количество четных элементов: ${evenEl}`);
    console.log(`Количество нечетных элементов: ${oddEl}`);
    console.log(`Количество нулевых элементов: ${nullEl}`);}
