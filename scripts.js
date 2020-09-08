function change() {
    var creds = document.getElementById("stuff");
    creds.innerHTML = 'Click me to copy';
}

function changeback() {
    var creds = document.getElementById("stuff");
    creds.innerHTML = 'Shahin164#8778';
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        return clipboardData.setData("Text", text);
    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

document.querySelector("#copy").onclick = function() {
    var result = copyToClipboard('Shahin164#8778');
    console.log("Copied to clipboard:", result);
};