console.log("a");
function validation() {
    let a = document.getElementById("password").value;
    let b = document.getElementById("confirm_password");
    if (a == b) {
        console.log("ok");
    } else {
        console.log("ko");
    }
}
let valider = document.querySelector('#btn')
console.log(valider);
valider.addEventListener('click', function () {
    validation()
});

