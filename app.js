
const decryptRules ={
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
}

const encryptRules ={
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

function revealEnd() {
    document.getElementById("start").style.display = "none";
    document.getElementById("end").style.display = "block";
}

function encrypt(){
    var textInput = document.getElementById("text").value;
    for (var key in encryptRules) {
        var value = encryptRules[key];
        textInput = textInput.replace(new RegExp(key, 'gi'), value);    
    }
    revealEnd();
    document.getElementById("resultArea").value = textInput;
}

function decrypt(){
    var textInput = document.getElementById("text").value;
    
    for (var key in decryptRules) {
        var value = decryptRules[key];
        textInput = textInput.replace(new RegExp(key, 'gi'), value);
    }
    revealEnd();
    document.getElementById("resultArea").value = textInput;
}

function copyToClipboard() {
    var copyText = document.getElementById("resultArea");
    navigator.clipboard.writeText(copyText.value);
}