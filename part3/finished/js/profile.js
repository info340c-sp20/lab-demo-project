let state = {
    chosen: [],
    profileIndex: 0,
    profiles: []
}

function setProfile(profile) {
    let title = document.querySelector("#title");
    title.innerHTML = profile.name + ", " + profile.age;
    let profession = document.querySelector("#profession");
    profession.textContent = profile.profession;
    let bio = document.querySelector("#bio");
    bio.textContent = profile.bio;
    let profileImage = document.querySelector("#profile-img");
    profileImage.src = profile.pic;
    profileImage.alt = profile.name;
}


function fetchProfiles() {
    fetch("js/data.json")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            state.profiles = data.profiles;
            setProfile(state.profiles[state.profileIndex]);
            let loadingBox = document.querySelector("#message");
            loadingBox.style.display = "none";
            let profileBox = document.querySelector("#profile");
            profileBox.style.display = "block";
        });
}

function setUpListeners() {
    document.querySelector("#choose").addEventListener("click", function() {
        chooseOrPass(true);
    });
    document.querySelector("#pass").addEventListener("click", function() {
        chooseOrPass(false);
    });
}

function chooseOrPass(which) {
    let currentProfile = state.profiles[state.profileIndex];
    if (which) {
        state.chosen.push(currentProfile);
    }
    if (state.profileIndex < state.profiles.length - 1) {
        state.profileIndex++;
        setProfile(state.profiles[state.profileIndex]);
    } else {
        let profileBox = document.querySelector("#profile");
        profileBox.style.display = "none";
        let message = document.querySelector("#message");
        message.textContent = "No more profiles!";
        message.style.display = "block";
        console.log(state.chosen);
    }
}

fetchProfiles();
setUpListeners();