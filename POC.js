window.addEventListener('DOMContentLoaded', (event) => {


// WEATHER API

// Button Click
document.getElementById('btn1').addEventListener('click', loadData);

// GET DATA FROM WEATHER API
function loadData(e) {
    // check
 console.log('LoadData called');

 const xhr = new XMLHttpRequest();

    // OPEN 
    xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=a6532eeb4b9c07d7f97659afd3cfdc19', true);

    xhr.onload = function(){

     if(this.status === 200) {

        console.log(this.responseText);

        showData(this.responseText);
    };
    };
    
    // PARSE DATA AND DISPLAY 
    function showData(){
    // check
     console.log('show Data called');
     
     const data = JSON.parse(xhr.responseText);

      console.log(data);

      // display keys

      Object.keys(data).forEach(function (dataKeys){

        console.log('forEach loop');

        var k = document.createElement('tr');

        k.innerHTML = dataKeys;

        const table = document.getElementById('first Col');

        table.appendChild(k);

        // display values

        Object.values(data).forEach(function (dataValues){

            console.log('forEach loop');

            let valueString = JSON.stringify(dataValues);
    
            let v = document.createElement('ul');
    
            v.innerHTML = valueString;
    
            const table = document.getElementById('second Col');
    
            table.appendChild(v);
        
        });
     });
    };

// SEND request
 xhr.send();

};


// FOOD API

document.getElementById('btn2').addEventListener('click', loadData1);

// GET RECIPE DATA
function loadData1(e){

// check 
console.log('loadData1 called')

// NEW HTTP REQUEST
const xhr1 = new XMLHttpRequest();

// GET DATA FROM API
xhr1.open('GET','https://api.spoonacular.com/recipes/random?apiKey=8b2422e119aa4872a94bbb7748fe64d6', true);

// CHECK HTTP STATUS
xhr1.onload = function(){

    if(this.status === 200) {

        console.log(this.responseText);


        showRecipes(this.responseText);
    }
}
// PARSE RECIPES AND SHOW DATA
function showRecipes(RJSON){

    // check 
    console.log('showRecipes called');

    // Parse JSON to JS OBJECT
    const recipes = JSON.parse(RJSON);

    console.log(recipes);






};

// Send request
xhr1.send();
};

})
