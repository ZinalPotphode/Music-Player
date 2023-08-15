const music=document.querySelector("audio");
const img=document.querySelector("img");
const play=document.getElementById("play");

//for play function
let isPlaying=false;
const playMusic=()=>{
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play","fa-pause");
    img.classList.add("anime");
};

//for pause function
const pauseMusic=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace("fa-pause","fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click',()=>{
    if(isPlaying)
    {pauseMusic();
    }
    else{
        playMusic();
    }
});

//changing the song
const title=document.getElementById("title");
const artist=document.getElementById("artist");
const prev=document.getElementById("prev");
const next=document.getElementById("next");

const songs=[
    {
        name:"song1",
        title:"Shape of you",
        artist:"Ed Sheeran",
    },
    { name:"song2",
    title:"Darkside",
    artist:"Alan Walker",
    },
    {
        name:"song3",
        title:"Faded",
        artist:"Alan Walker",
    }
];

//changing the music data
const laodSong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src=songs.name+".mp3";
    img.src=songs.name+".jpg";
};
let songIndex=0;
const nextSong=()=>{
    songIndex=(songIndex+1)%songs.length;
    laodSong(songs[songIndex]);
    playMusic();
};
const prevSong=()=>{
    songIndex=(songIndex-1+songs.length)%songs.length;
    laodSong(songs[songIndex]);
    playMusic();
};
next.addEventListener("click",nextSong);
prev.addEventListener("click",prevSong);

