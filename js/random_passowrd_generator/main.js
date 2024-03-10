let char = "qwertyuiop[]asd#@!%fghjklzxcvbnm/?><#0123456789";

var len = document.getElementById("input");
var btn = document.getElementById("button");
var ouput = document.getElementById("ouput");

btn.onclick = function() {
    let l = len.value;
    if (l <= 50)
    {
        let password = "";
        for (let i = 0;i < l;i++)
            password += char.charAt(Math.random() * char.length);
        ouput.textContent = `${password}`;
    }
    else
        alert("length is too long")
}