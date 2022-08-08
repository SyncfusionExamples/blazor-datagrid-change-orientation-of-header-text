function setHeaderHeight(args) {
    var textWidth = document.querySelector(".e-headercell > div").scrollWidth; // obtain the width of the headerText content.
    var headerCell = document.querySelectorAll(".e-headercell");
    for (var i = 0; i < headerCell.length; i++) {
        (headerCell.item(i)).style.height = textWidth + 'px'; // assign the obtained textWidth as the height of the headerCell.
    }
}