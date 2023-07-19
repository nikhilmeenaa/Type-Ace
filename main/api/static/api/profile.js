resultSelectors = document.querySelectorAll(".resultSelector");
resultInstances = document.querySelectorAll(".resultInstance");

let selected = "All";

function filterFunc() {

    for (let i = 0; i < resultInstances.length; i++) {
        if(selected == 'All') {
            resultInstances[i].style.display = 'flex';
        }
        else {
            if(resultInstances[i].getAttribute("name") == selected)
                resultInstances[i].style.display = "flex";
            else {
                resultInstances[i].style.display = "none";
            }

        }
        
    }
}

for (var i = 0; i < resultSelectors.length; i++) {
    resultSelectors[i].addEventListener("click", (event)=>{
        if(selected != event.target.innerHTML) {
            selected = event.target.innerHTML;
            filterFunc();
        }
    });
}