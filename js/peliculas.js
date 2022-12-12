const preguntas =[
    {
        pregunta: "¿En que pelicula aparece Jack Nicholson?",
        respuesta: ["50 sombras de Geyt","El resplandor","Intensamente", "Silen Hill"],
        correcta: 1
    },
    
    {
        pregunta: "¿En que genero de cine se encuentra la pelicula V de vendetta?",
        respuesta: ["Triller psicologico","Drama","Ciencia Ficcion", "Romance"],
        correcta: 2
    },
    {
        pregunta: "¿Cuales eran los personajes principales del TITANIC?",
        respuesta: ["Jack Dawson y Rose Dewitt Bukater","Noa Caulhon y Allie Hamilton","Ryan Reynolds y Blake Lively", "Romeo Montesco y Julieta Capuleto"],
        correcta: 0
    },
];

var indice_aleatorio = 0;
var pregunta_txt = "";
var interval;

window.onload = inciar();

function inciar(){
    if(localStorage.getItem("SCORE") != null){
        localStorage.removeItem("SCORE");
    }
}

function inciarCronometro(){
    const contador = 15, cronometroDisplay = document.getElementById("cronometro")

    inciarTiempo(contador, cronometroDisplay)
}

function inciarTiempo(duracion, componente){
    interval = setInterval(() => {
        if (duracion == 0) {
            componente.innerHTML="Se acabo el tiempo";

            clearInterval(interval);

            loadQuestions()
        }else{
            duracion = duracion<10 ? "0" + duracion:duracion--;
        }

    }, 1000);
}