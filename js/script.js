let menuBtn = document.getElementById('menuBtn');
let aboutBtn = document.getElementById('aboutBtn')
let injectHere1 = document.getElementById('injectHere1');
let injectHere2 = document.getElementById('injectHere2');


//Add event listener to form Btn

menuBtn.addEventListener("click", function(){
    loadData1("./pages/menu.html")
    injectHere1.style.display = (injectHere1.style.display == 'block') ? 'none' : 'block';
  
});

aboutBtn.addEventListener("click", function(){
    loadData2("./pages/about.html");
    injectHere2.style.display = (injectHere2.style.display == 'block') ? 'none' : 'block';
});

function loadData1(url){
    let xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            
            injectHere1.innerHTML = this.responseText;
        }
        
    };
    xhttp1.open("GET", url , true);
    xhttp1.send();
}

function loadData2(url){
    let xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            
            injectHere2.innerHTML = this.responseText;
        }
        
    };
    xhttp2.open("GET", url , true);
    xhttp2.send();
    
}