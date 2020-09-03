const data = [{
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/81.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/62.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/93.jpg'
    }
];
// Profiles
const profiles = profileIterator(data);

// DOM event listener to get the next profile
document.getElementById('next').addEventListener('click', nextProfile);
// Call first profile
nextProfile();

function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profile-display').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

        document.getElementById('image-display').innerHTML = `<img src="${currentProfile.image}">`;
        document.getElementById('image-display').style = 'margin-bottom:20px;';
    } else {
        // No more profiles
        window.location.reload();
    }


}

// Profile Iterator
function profileIterator(profiles) {

    let nextprofile = 0;

    return {
        next: function() {
            return nextprofile < profiles.length ? { value: profiles[nextprofile++], done: false } : { done: true }
        }
    }
}