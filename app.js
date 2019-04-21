function paris() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const response = JSON.parse(this.responseText);
            document.getElementById("app").innerHTML = response.current_condition.condition;
        }

    }
xhr.open("GET", "https://www.prevision-meteo.ch/services/json/paris");
xhr.send();
}
document.getElementById("paris").addEventListener("click", function(i) {
paris();
})