const numeros = [1, 3.14, 5, 73];

const [n1, n2] = numeros;

console.log(n1, n2);

function useState(initialValue?: any) {
    let value = initialValue;

    function setValue(newValue: any) {
        value = newValue;
    }

    return [value, setValue];
}

const [valor, setValor] = useState(0);

console.log(valor);

setValor(5);

console.log(valor);
