const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

function AddTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Add a close (×) button for each task
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Unicode for '×'
        span.classList.add("close"); // Optional: You can style the close button with a class
        li.appendChild(span);
    }
    inputBox.value = "";  // Clear the input field after adding a task
    saveData();
}

// Event listener to handle click events on the list container
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {  // Check if the clicked element is a list item
        e.target.classList.toggle("checked");  // Toggle the 'checked' class
        saveData();
    }
    else if (e.target.tagName === "SPAN") {  // Check if the clicked element is a close button
        e.target.parentElement.remove();  // Remove the corresponding task (li element)
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");

}
showList();