function displayAlert(aElement){
    //aElement = '<a href="#" onclick="displayAlert(this)">Burbank</a>'
    var location = aElement.innerText; //location = "Burbank"
    alert("Loading weather report of "+location);
}

function dismissCookie() {
    var cookieElement = document.querySelector('.cookie');
    cookieElement.remove();
}

function changeTemperature(selectElement) {
    var fOc = selectElement.value;
    console.log(fOc);

    /*
    fOc = F
    i = 1;
    #temp1
    tempElement = <span id="temp1" class="maxTemp">24</span>
    temperature = "24"
    temperature = 24

    newTemp = 0
    newTemp = (24 * 9 / 5) + 32 -> 75.2

    <span id="temp1" class="maxTemp">75.2</span>
    */
    for(let i=1; i<=8; i++){
        var tempElement = document.querySelector('#temp'+i);
        var temperature = tempElement.innerText;
        temperature = parseInt(temperature); //Transforms text to int
        console.log(temperature);

        var newTemp = 0;
        if(fOc === "C"){
            //F -> C
            newTemp = Math.round((temperature - 32) * 5 / 9);
        } else{
            //C -> F
            newTemp = Math.round((temperature * 9 / 5) + 32);
        }

        tempElement.innerText = newTemp;        
    }
}