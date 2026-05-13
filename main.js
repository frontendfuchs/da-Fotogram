
// These elements are used to display the gallery and control the dialog (modal)
const containerRef = document.getElementById("image-gallery");
const dialogRef = document.getElementById("myDialog");
const dialogImageRef = document.getElementById("dialogImage");
const dialogTitleRef = document.getElementById("dialogTitle");
const dialogCountRef = document.getElementById("dialogCount");

// Array containing all image paths for the gallery
// Each entry represents one image that will be rendered
const imgGallery = [
"../assets/images/image1.jpg",
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

// Stores the index of the currently selected image
// This variable is updated whenever the user opens or navigates the dialog
let currentIndex =0;

// FUNCTION: renderGallery()
// Purpose: Dynamically renders all images from the imgGallery array into the container
// How it works:
// - Loops through the entire imgGallery array
// - Creates an <img> element for each image
// - Adds an onclick event to each image so it can open the dialog
// - Appends the images into the container using innerHTML

function renderGallery() {
  for (let i = 0; i < imgGallery.length; i++) {
    containerRef.innerHTML = containerRef.innerHTML + `
      <img src="${imgGallery[i]}" onclick="openDialog(${i})" alt="Galeriebild ${i + 1}">
    `;
  }
}

// FUNCTION: openDialog(index)
// Purpose: Opens the modal dialog and displays the clicked image
// Parameters:
// - index: the position of the clicked image in the array
// How it works:
// - Saves the clicked image index into currentIndex
// - Calls updateDialog() to display correct content
// - Opens the dialog using showModal()

function openDialog(index) {
  currentIndex = index;
  updateDialog();
  dialogRef.showModal();
}


// FUNCTION: updateDialog()
// Purpose: Updates the dialog content based on the current image index
// What it updates:
// - Image source (dialogImageRef)
// - Title text (e.g., "Image 3")
// - Image counter (e.g., "3 / 12")
// Important:
// - Adds +1 to index because arrays start at 0, but users expect counting from 1

function updateDialog() {
  dialogImageRef.src = imgGallery[currentIndex];
  dialogTitleRef.textContent = `Linse ${currentIndex + 1}`;
  dialogCountRef.textContent = `${currentIndex + 1} / ${imgGallery.length}`;
}


// FUNCTION: prevImage()
// Purpose: Navigates to the previous image in the gallery
// Behavior:
// - If the current image is the first one (index 0),
//   it jumps to the last image (loop effect)
// - Otherwise, it decreases the index by 1
// - Calls updateDialog() to refresh the display

function prevImage() {
  if (currentIndex === 0) {
    currentIndex = imgGallery.length - 1;
  } else {
    currentIndex = currentIndex -1;
  }
  updateDialog();
}

// FUNCTION: nextImage()
// Purpose: Navigates to the next image in the gallery
// Behavior:
// - If the current image is the last one,
//   it jumps back to the first image (loop effect)
// - Otherwise, it increases the index by 1
// - Calls updateDialog() to refresh the display

function nextImage() {
  if (currentIndex === imgGallery.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex +1 ;
  }
  updateDialog();
}

// FUNCTION: closeDialog()
// Purpose: Closes the modal dialog
// Uses the built-in close() method of the <dialog> element

function closeDialog() {
  dialogRef.close();
}

// Initial function call
// This ensures the gallery is rendered as soon as the script runs
renderGallery();