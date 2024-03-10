
let number1;
let number2;
let op;
let out;
document.getElementById("sub").onclick = function() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    op = document.getElementById("op").value;
    if (op == "+")
    {
        out = Number(number1) + Number(number2);
        document.getElementById("output").textContent = `${out}`;
    }
    else if (op == "*")
    {
        out = Number(number1) * Number(number2);
        document.getElementById("output").textContent = `${out}`;
    }
    else if (op == "%")
    {
        out = Number(number1) % Number(number2);
        document.getElementById("output").textContent = `${out}`;
    }
    else if (op == "/")
    {
        if (Number(number2))
        {
            out = Number(number1) / Number(number2);
            document.getElementById("output").textContent = `${out}`;
        }
        else
            document.getElementById("output").textContent = `${Number(number2)} is unvalid`;
    }
}