
/* Prevent drag for all elements */
document.addEventListener('dragstart', function(event) {
    event.preventDefault(); 
  });

  
// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: ["frontend development", "backend development", "web designing", "android development", "web development","shopify frontend development"],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->
// Favicon icon change
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === "visible") {
      document.title = "Projects | Ankush Lodhi";
  } else {
      document.title = "Come Back To Portfolio";
  }
});
