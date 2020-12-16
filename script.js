function showStories() {
    document.getElementById("stories").style.display = "block";
    document.getElementById("stories").style.color = "white";
}
function hideStories() {
    document.getElementById("stories").style.display = "none";
    document.getElementById("stories").style.color = "white";
}
function toggleStories() {
    if (document.getElementById("stories").style.display == "none") {
        showStories();
    }
    else {
        hideStories();
    }
}
hideStories();