

let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume= 1;
  text_speak.lang="en-GB";
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning Madam");
  } else if (hours >= 12 && hours < 4) {
    speak("Good AfterNoon Madam");
  } else {
    speak("Good Evening Madam");
  }
}

wishMe(); // Call wishMe directly

let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.maxResults = 10; // Return multiple results

recognition.onresult = (event) => {
  let transcript = event.results[0][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript);
};

recognition.onstart = () => {
  content.innerText = "Listening...";
};

recognition.onerror = (event) => {
  content.innerText = "Error: " + event.error;
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none"
  voice.style.display = "block"
});

function takeCommand(message) {
  btn.style.display = "flex"
  voice.style.display = "none"
  message = message.toLowerCase(); // Convert to lowercase
  if (message.includes("hello")) {
    speak("Hello Madam, what can I help you?");
  }
else if(message.includes("who are you")){
  speak("I am a virtual Assistant ,created by Tayyaba Madam");
}
else if(message.includes("open youtube")){
  speak("Opening youtube")
  window.open("https://www.youtube.com/")
}
else if(message.includes("open google")){
  speak("Opening google")
  window.open("https://www.google.com/")
}
else if(message.includes("open facebook")){
  speak("Opening facebook")
  window.open("https://www.facebook.com/")
}
else if(message.includes("open instagram")){
  speak("Opening instagram")
  window.open("https://www.instagram.com/")
}
else if(message.includes("open calculator")){
  speak("Opening calculator")
  window.open("calculator://")
}
else if(message.includes("open whatsapp")){
  speak("Opening whastapp")
  window.open("whatsapp://")
}
else if(message.includes("time")){
  let time = new Date().toLocaleTimeString()
  speak(time)
}
else{
  speak(`This is what i found on internet regarding ${message}`)
  window.open(`https://www.google.com/search?q=${message}`)
}
} 