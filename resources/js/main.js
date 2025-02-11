function expandCollapsible() {
    var links = document.getElementById("link_items").style;
    console.log("works")
    if (links.display == "flex") {
        links.display = "none";
    } else {
        links.display = "flex";
        links.flexDirection = "column"
    }

}