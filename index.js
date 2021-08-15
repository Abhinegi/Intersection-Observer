const images = [document.querySelector("#image1"),document.querySelector("#image2"),document.querySelector("#image3")];
const imageUrl = ["./image2.jpg","./image3.jpg"]
const options = {
  root:null,
  threshold:0,
  rootMargin:"-30%"
};
var counter = 1;
const observer = new IntersectionObserver(function (entries,observer){
  entries.forEach(entry=>{
    console.log(entry)
     entry.target.src=imageUrl[counter];
     entry.onload
     ++this.counter;
  })
},options);

images.forEach(image=> observer.observe(image));
