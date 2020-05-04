let state = {
    chosen: [],
    profileIndex: 0,
    profiles: []
}

/**
      {
           "name": "Jane",
           "age": 26,
           "profession": "Cosplayer",
           "bio": "I love the Mandalorian and Baby Yoda is so cute!",
           "pic": "img/mando.jpg"
       }
*/

function setProfile(profile) {
    let img = document.querySelector(".card-img-top");
    img.src = profile.pic;
    img.alt = profile.name;
    let bio = document.querySelector("#bio");
    bio.textContent = profile.bio;
    let name = document.querySelector("#title");
    name.textContent = profile.name + ", " + profile.age;
    let profession = document.querySelector("#profession");
    profession.textContent = profile.profession;
}

// gets the profiles...
function fetchProfiles() {
    console.log("Fetching...")
}

// sets up the listeners for the choose / pass
function setUpListeners() {
    let red = document.querySelector(".circle.red");
    let green = document.querySelector(".circle.green");
    red.addEventListener("click", function () { });
    green.addEventListener("click", function () { });
}

// choose or pass...
function chooseOrPass(which) {

    // if chosen, add to chosen list

    // increment profileIndex

    // if there are no more profiles, hide the profile card 
}

fetchProfiles();
setUpListeners(); 