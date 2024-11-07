const images = document.querySelectorAll(".draggable");
const box = document.getElementById("box");

images.forEach((img) => {
    img.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    });
});

box.addEventListener("dragover", function(event) {
    event.preventDefault();
});

box.addEventListener("drop", function(event) {
    event.preventDefault();

    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);

    const rect = box.getBoundingClientRect();
    const x = event.clientX - rect.left - draggedElement.clientWidth / 2;
    const y = event.clientY - rect.top - draggedElement.clientHeight / 2;

    draggedElement.style.position = "absolute";
    draggedElement.style.left = x + "px";
    draggedElement.style.top = y + "px";

    if (!box.contains(draggedElement)) {
        box.appendChild(draggedElement);
    }
});