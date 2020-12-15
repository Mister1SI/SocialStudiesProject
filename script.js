function showStories() {
    document.getElementById("stories").style.display = "block";
}
function hideStories() {
    document.getElementById("stories").style.display = "none";
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