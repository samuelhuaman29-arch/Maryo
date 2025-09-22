// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
[
  { "text": "In that moment", "time": 15 },
  { "text": "A quiet breeze held my name", "time": 18 },
  { "text": "Shadows danced before the morning", "time": 27 },
  { "text": "Fell like feathers", "time": 32 },
  { "text": "On my skin", "time": 33 },
  { "text": "Where am I now? I still don't know", "time": 41 },
  { "text": "Soft reflections in my hands", "time": 47 },
  { "text": "Too much gold for night to hold", "time": 54 },
  { "text": "Caught in bloom, this quiet love", "time": 59 },
  { "text": "That moment", "time": 67 },
  { "text": "Hit so deep, I couldn’t breathe", "time": 72 },
  { "text": "Stillness showed me what was real", "time": 78 },
  { "text": "I just want to float with skies", "time": 83 },
  { "text": "Where am I now? I still don't know", "time": 91 },
  { "text": "Soft reflections in my hands", "time": 97 },
  { "text": "Too much gold for night to hold", "time": 104 },
  { "text": "Caught in bloom, this quiet love", "time": 108 },
  { "text": "In that moment", "time": 144 },
  { "text": "A quiet breeze held my name", "time": 148 },
  { "text": "Shadows danced before the morning", "time": 153 },
  { "text": "Fell like feathers", "time": 158 },
  { "text": "On my skin", "time": 164 },
  { "text": "Where am I now? I still don't know", "time": 169 },
  { "text": "Soft reflections in my hands", "time": 176 },
  { "text": "Too much gold for night to hold", "time": 183 },
  { "text": "Caught in bloom, this quiet", "time": 188 },
  { "text": "Love.", "time": 140 }
]

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);