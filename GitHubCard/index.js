import axios from 'axios';

const gitUsers = [
  'scriptsalmon',
  'justsml',
  'luishrd',
  'BigKnell',
  'scriptsalmon',
  'justsml',
  'luishrd',
  'BigKnell'
]


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');

// function getUser () {
//     axios.get('https://api.github.com/users/scriptsalmon')
//     .then(res => {
//       const card = cardMaker(res)
//       cards.appendChild(card);
//     }).catch(err => {
//       console.log('wtf');
//     })
// }

// getUser();

const getUser = async (userName) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${userName}`);
      const card = cardMaker(res)
      cards.appendChild(card);
  } catch {
    const errorMsg = document.createElement('p');
    errorMsg.textContent = "you fked up!"
    document.body.appendChild(errorMsg);
  } finally {
    console.log("finalllyyyy");
  }
}

getUser('scriptsalmon');
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
*/
function cardMaker ({ data }) {
  // create elements
  const card = document.createElement('div');
  const cardImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const userNameH3 = document.createElement('h3');
  const usersUserName = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileA = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // classes
  card.className = 'card';
  cardInfo.className = 'card-info';
  userNameH3.className = 'name';
  usersUserName.className = 'username';

  // add content
  cardImg.src = data['avatar_url'];
  userNameH3.textContent = `${data['name'] ? data['name'] : 'Unnamed'}`;
  usersUserName.textContent = data['login'];
  location.textContent = `Location: ${data['location'] ? data['location'] : 'unknown location'}`;
  profile.textContent = 'Profile: ';
  profileA.href = data['html_url'];
  // profileA.setAttribute('href', data['url']);
  profileA.textContent = `${data['url']}`;
  console.log(profileA);
  // followers.textContent = `Followers: ${data['followers'] ? data['followers'] === '0' : 'None!'}`;
  // following.textContent = `Following: ${data['following'] ? data['following'] === '0' : 'Noone'}`;
  followers.textContent = `Followers: ${data['followers']}`;
  following.textContent = `Following: ${data['following']}`;
  bio.textContent = `Bio: ${data['bio'] ? data['bio'] : 'No Bio'}`;

  // append elements
  card.appendChild(cardImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(userNameH3);
  cardInfo.appendChild(usersUserName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileA);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}

/*
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
