// Dropdown ke elements ko select kar rahe hai
const dropdownBtn = document.querySelector(".serch-option"); // "Select Country" button
const dropdownList = document.querySelector(".list-serch-contaner"); // pura dropdown box
const searchInput = document.getElementById("serch"); // search input field
const items = document.querySelectorAll(".list-items"); // saare country list items
const selectedText = document.getElementById("selected-text"); // selected text show karne wala span

// 1️⃣Dropdown toggle (open / close on click)
dropdownBtn.addEventListener("click", () => {
  // Agar open hai to band karo, band hai to open karo
  dropdownList.style.display =
    dropdownList.style.display === "flex" ? "none" : "flex";
});

// 2️ Search functionality
searchInput.addEventListener("keyup", () => {
  let filter = searchInput.value.toLowerCase(); // input ko lowercase me convert
  items.forEach(item => {
    let text = item.textContent.toLowerCase(); // item ka text lowercase me
    // Agar match milta hai to show karo warna hide karo
    item.style.display = text.includes(filter) ? "block" : "none";
  });
});

// 3️ Item select karna
items.forEach(item => {
  item.addEventListener("click", () => {
    selectedText.textContent = item.textContent; // selected text ko update karo
    dropdownList.style.display = "none"; // dropdown ko band karo
    searchInput.value = ""; // search box clear karo
    // saare items ko dobara show karna
    items.forEach(i => i.style.display = "block");
  });
});

// 4️ Bahar click karne pe dropdown close ho jaye
document.addEventListener("click", (event) => {
  // Agar click dropdown ke bahar hua hai
  if (!event.target.closest(".contaner")) {
    dropdownList.style.display = "none";
  }
});
