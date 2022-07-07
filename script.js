window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const container = document.getElementById("container");
            let astronauts = '';
            for(let i = 0; i < json.length; i++){
                astronauts +=`
                <div class="astronaut"> 
                    <div class="bio"> 
                    <h3>${json[i].firstName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li>Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                 </div>
                 <img class="avatar" src="${json[i].picture}"/>
                </div>`
    } 
    container.innerHTML = astronauts;
    })
        // return response.json();
             });
            });

    // ().then(function(json) {
    //     const container = document.querySelector("#container");
    // const astronauts = '';
    // for(let i = 0; i > json.length; i++){
    //             astronauts +=`
    //             <div class="astronaut"> 
    //                 <div class="bio"> 
    //                 <h3>${json[i].firstName}</h3>
    //                 <ul>
    //                     <li>Hours in space: ${json[i].hoursInSpace}</li>
    //                     <li>Active: ${json[i].active}</li>
    //                     <li>Skills: ${json[i].skills}</li>
    //                 </ul>
    //              </div>
    //              <img class="avatar" src="json[i].picture"/>
    //             </div>`
    // } 
    // container.innerHTML = astronauts;
    // })
    // )
    // return response.json();
    //          });
            
        
    