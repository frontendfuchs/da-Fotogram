const containerRef = document.getElementById("image-gallery");

const imgGallery = ["../assets/images/image1.jpg",
"../assets/images/image10.png",
"../assets/images/image11.png",
"../assets/images/image12.png",
"../assets/images/image2.jpg",
"../assets/images/image3.png",
"../assets/images/image4.jpg",
"../assets/images/image5.jpg",
"../assets/images/image6.jpg",
"../assets/images/image7.jpg",
"../assets/images/image8.jpg",
"../assets/images/image9.jpg"
];

function renderGallery(){
    for(let i = 0; i < 12; i++){
        containerRef.innerHTML += /*html*/`
        <img src="${imgGallery[i]}" onclick="open()">`;
    } 
}

renderGallery();