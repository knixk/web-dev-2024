const drums = document.querySelectorAll('.drum');
const n = drums.length;

for (let i = 0; i < n; i++) {
    const drum = drums[i];
    drum.addEventListener('click', () => {
        console.log("drum " + (i + 1) + " was clicked");
        const audio = new Audio('./sounds/tom-1.mp3')
        audio.play();
    })

}

