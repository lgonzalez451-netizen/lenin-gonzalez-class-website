const button = document.querySelector("#button");
const message = document.querySelector("#message");

function changeMessage() {
    message.textContent = "Hurray Hurray you clicked a button. Pat yourself on the back!";
}

button.addEventListener("click", changeMessage);

document.getElementById('showBtn').addEventListener('click', function() {
    document.getElementById('myImage').style.display = 'block';
});   