//ADICIONE SEUS LINKS DO FIREBASE

const firebaseConfig = {
  apiKey: 'AIzaSyC3PmWGcPE3VGgYKIxnHsTmVB9OY48P-6E',
  authDomain: 'the-art-of-speaking.firebaseapp.com',
  databaseURL: 'https://the-art-of-speaking-default-rtdb.firebaseio.com',
  projectId: 'the-art-of-speaking',
  storageBucket: 'the-art-of-speaking.appspot.com',
  messagingSenderId: '922343316323',
  appId: '1:922343316323:web:f38b97ed9a0bca711dd156'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem('user_name')

document.getElementById('user_name').innerHTML = 'Welcome, ' + user_name + '!'

function addRoom() {
  room_name = document.getElementById('room_name').value

  firebase.database().ref('/').child(room_name).update({
    purpose: 'add room name'
  })

  localStorage.setItem('room_name', room_name)

  window.location = 'taos_page.html'
}

function getData() {
  firebase
    .database()
    .ref('/')
    .on('value', function (snapshot) {
      document.getElementById('output').innerHTML = ''
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key
        Room_names = childKey
        console.log('Room Name: ' + Room_names)
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)' >#" +
          Room_names +
          '</div><hr>'
        document.getElementById('output').innerHTML += row
      })
    })
}

getData()

function redirectToRoomName(name) {
  console.log(name)
  localStorage.setItem('room_name', name)
  window.location = 'taos_page.html'
}
function logout() {
  localStorage.removeItem('user_name')
  localStorage.removeItem('room_name')
  window.location = 'index.html'
}
