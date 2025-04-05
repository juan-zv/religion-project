window.addEventListener("scroll", function() {
    let nav = document.getElementById("navMenu");
    let button = document.getElementById("floatingButton");

    // Check if the nav menu is out of view
    let navVisible = nav.getBoundingClientRect().bottom > 0;
    
    if (!navVisible) {
        button.style.display = "block"; // Show button
    } else {
        button.style.display = "none"; // Hide button
    }
});

document.getElementById("floatingButton").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
});
