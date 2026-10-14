function addBook() {
    let name = document.getElementById("bookName").value.trim();
    let author = document.getElementById("authorName").value.trim();
    let id = document.getElementById("bookId").value.trim();

    if (!name || !author || !id) {
        alert("Please fill all fields");
        return;
    }

    let tbody = document.getElementById("bookList");
    let row = tbody.insertRow();
    row.innerHTML = 
        <td></td>
        <td></td>
        <td></td>
        <td><button class="btn btn-red" onclick="deleteRow(this)">Delete</button></td>
    ;

    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("bookId").value = "";
}

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function searchBooks() {
    let filter = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.getElementById("bookList").getElementsByTagName("tr");
    for (let row of rows) {
        let nameCol = row.getElementsByTagName("td")[1];
        if (nameCol) {
            let text = nameCol.textContent || nameCol.innerText;
            row.style.display = text.toLowerCase().includes(filter) ? "" : "none";
        }
    }
}
