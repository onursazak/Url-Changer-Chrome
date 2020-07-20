let changeColor = document.getElementById('changeColor');

let btnDev1 = document.getElementById('btn-dev1');
let btnProduction = document.getElementById('btn-production');
let btnLocal = document.getElementById('btn-local');

let pathName = window.location.pathname;
let devUrl = "http://www1.dev.odamax.com";
let productionUrl = "http://www.odamax.com";
let localUrl = "http://localhost:8080"

let url;

chrome.tabs.query({ active: true }, function (tab) {
    url = tab[0].url;
});
document.querySelectorAll('button').forEach(function (currentBtn) {

    currentBtn.addEventListener('click', function () {

        let pathIndex = url.indexOf('.com');
        let path = url.substring(pathIndex + 4);

        if (this.id == 'btn-dev1') {
            chrome.tabs.update({ url: devUrl + path });
        }
        else if (this.id == 'btn-production') {
            chrome.tabs.update({ url: productionUrl + path });
        }
        else if (this.id == 'btn-local') {
            chrome.tabs.update({ url: localUrl + path });
        }
    })
})