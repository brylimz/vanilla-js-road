const measureKelvin = function(){
    const measuremnts = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degree celsius:'))
    }
console.table(measuremnts)

const kelvin = measuremnts.value + 273
return kelvin;
}

1
console.log(measureKelvin())

