// Firebase Configuration

};// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2hHzG57gPbIsmRa5U4o4eJIvnXMvKgKM",
  authDomain: "ekolojik-kredi.firebaseapp.com",
  projectId: "ekolojik-kredi",
  storageBucket: "ekolojik-kredi.firebasestorage.app",
  messagingSenderId: "17544780480",
  appId: "1:17544780480:web:09d695360decc5bdd96b25",
  measurementId: "G-P3F8TRBYG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function toggleMenu() {
    var menuContent = document.getElementById('menuContent');
    menuContent.style.display = (menuContent.style.display === 'block') ? 'none' : 'block';
}

function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('kayitForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));
    
    db.collection('users').add(data)
    .then(() => alert('Kayıt başarılı!'))
    .catch(error => console.error('Error:', error));
});

document.getElementById('veriGirisiForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));
    
    db.collection('data').add(data)
    .then(() => alert('Veri girişi başarılı!'))
    .catch(error => console.error('Error:', error));
});
