gsap.registerPlugin(ScrollTrigger);


const arr = ['./F.jpeg', './G.webp', './P.jpeg', './h.jpeg'];
const elements = document.querySelectorAll(".landing2-right-ele");

elements.forEach((ele, index) => {
    const img = document.createElement('img');
    img.src = arr[index];
    img.alt = 'Image';
    img.classList.add('follow-cursor');
    ele.appendChild(img);
});


document.querySelectorAll('.landing2-right-ele').forEach(element => {
    const floatingImage = element.querySelector('.follow-cursor');

    if (floatingImage) { // Check if floatingImage exists
        element.addEventListener('mousemove', (event) => {
            // Get the bounding rectangle of the element
            const rect = element.getBoundingClientRect();
console.log(rect)
            // Calculate the cursor position relative to the element
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            floatingImage.style.position = 'absolute'; // Ensure absolute positioning
            floatingImage.style.left = `${x}px`;
            floatingImage.style.top = `${y}px`;
            floatingImage.style.opacity = '1'; // Show the image when mouse is over
        });

        element.addEventListener('mouseleave', () => {
            floatingImage.style.opacity = '0'; // Hide the image when mouse leaves
        });
    }
});

const vid=document.querySelector(".landing3-video")

const plays=document.querySelector(".ri-play-circle-fill")
plays.addEventListener('click',()=>{
    vid.play();

    vid.style.height = '100%';  // or use other units like 'em', 'rem', '%', etc.
vid.style.width = '100%'; 
vid.style.zIndex=100;

})
vid.addEventListener('click',()=>{
    vid.pause();
    vid.style.height = '0%';  // or use other units like 'em', 'rem', '%', etc.
    vid.style.width = '0%'; 

})



const vide=document.querySelector(".landing4-video")
vide.addEventListener('mouseover',()=>{
    vide.play();
    vide.style.opacity='1';
})
vide.addEventListener('mouseout',()=>{
    vide.pause();
    vide.style.opacity='0';

})

const bot = document.querySelectorAll(".landing5-content");
const to = document.querySelectorAll(".toclose");
console.log(bot,"bot h y")
console.log(to,"to h y")
// Add event listeners to each bot element
bot.forEach(element => {
    element.addEventListener('mouseover', () => {
        to.forEach(t => {
            t.style.height = "fit-content";
        });
    });

    element.addEventListener('mouseout', () => {
        to.forEach(t => {
            t.style.height = "0px";
        });
    });
});

// Add event listeners to each to element
to.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.height = "fit-content";
    });

    element.addEventListener('mouseout', () => {
        element.style.height = "0px";
    });
});



gsap.from(".btm6-parts2 h4", {
    x:0,
    duration: 2,
    scrollTrigger: {
        trigger: ".btm6-parts2>h4",
        scroller: "body",
       
        start: "top 90%",
        end: "top 50%",
        scrub: true
    }})


    gsap.from(".btm6-parts h4", {
        x:0,
        duration: 2,
        scrollTrigger: {
            trigger: ".btm6-parts2>h4",
            scroller: "body",
          
            start: "top 90%",
            end: "top 50%",
            scrub: true
        }})