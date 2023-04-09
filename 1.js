// Get DOM elements
var loginSection = document.getElementById("login-section");
var diarySection = document.getElementById("diary-section");
var passwordList = document.getElementById("password-list");
var addButton = document.getElementById("add-button");

// Check if the user is already logged in
var isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn) {
  showDiarySection();
  loadPasswordItems();
}

// Add event listeners
document.querySelector("form").addEventListener("submit", login);
addButton.addEventListener("click", showAddPasswordForm);
passwordList.addEventListener("click", handlePasswordListClick);

// Handle login form submission
function login(event) {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;
  if (username === "admin" && password === "password") {
    localStorage.setItem("isLoggedIn", true);
    showDiarySection();
    loadPasswordItems();
  } else {
    alert("Invalid username or password");
  }
  event.target.reset();
}

// Show the password diary section
function showDiarySection() {
  loginSection.classList.add("hidden");
  diarySection.classList.remove("hidden");
}

// Load password items from local storage
function loadPasswordItems() {
  const passwordItems = JSON.parse(localStorage.getItem("passwordItems")) || [];
  passwordList.innerHTML = "";
  passwordItems.forEach(item => {
    const passwordItemElement = createPasswordItemElement(item);
    passwordList.appendChild(passwordItemElement);
  });
}

// Create a password item element
function createPasswordItemElement(item) {
  const passwordItemElement = document.createElement("li");
  passwordItemElement.classList.add("password-item");
  const websiteElement = document.createElement("span");
  websiteElement.textContent = item.website;
  const usernameElement = document.createElement("span");
  usernameElement.textContent = item.username;
  const passwordElement = document.createElement("span");
  passwordElement.textContent = item.password;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.dataset.id = item.id;
  passwordItemElement.appendChild(websiteElement);
  passwordItemElement.appendChild(usernameElement);
  passwordItemElement.appendChild(passwordElement);
  passwordItemElement.appendChild(deleteButton);
  return passwordItemElement;
}

// Show the form to add a new password
function showAddPasswordForm() {
  const website = prompt("Enter website:");
  const username = prompt("Enter username:");
  const password = prompt("Enter password:");
  const id = new Date().getTime().toString();
  const newItem = { id, website, username, password };
  const passwordItems = JSON.parse(localStorage.getItem("passwordItems")) || [];
  passwordItems.push(newItem);
  localStorage.setItem("passwordItems", JSON.stringify(passwordItems));
  const passwordItemElement = createPasswordItemElement(newItem);
  passwordList.appendChild(passwordItemElement);
}

// Handle clicks on the password list
function handlePasswordListClick(event) {
  if (event.target.tagName === "BUTTON") {
    const id = event.target.dataset.id;
    const passwordItems = JSON.parse(localStorage.getItem("passwordItems")) || [];
    const index = passwordItems.findIndex(item => item.id === id);
    passwordItems.splice(index, 1);
    localStorage.setItem("passwordItems", JSON.stringify(passwordItems));
    event.target.parentNode.remove();
  }
}
// Get DOM elements
const loginSection = document.getElementById("login-section");
const diarySection = document.getElementById("diary-section");
const passwordList = document.getElementById("password-list");
const addButton = document.getElementById("add-button");

// Check if the user is already logged in
const isLoggedIn = localStorage.getItem("isLoggedIn");
if (isLoggedIn) {
  showDiarySection();
  loadPasswordItems();
}

// Add event listeners
document.querySelector("form").addEventListener("submit", login);
addButton.addEventListener("click", showAddPasswordForm);
passwordList.addEventListener("click", handlePasswordListClick);

// Handle login form submission
function login(event) {
  event.preventDefault();
  const username = event.target.elements.username.value;
  const password = event.target.elements.password.value;
  if (username === "admin" && password === "password") {
    localStorage.setItem("isLoggedIn", true);
    showDiarySection();
    loadPasswordItems();
  } else {
    alert("Invalid username or password");
  }
  event.target.reset();
}

// Show the password diary section
function showDiarySection() {
  loginSection.classList.add("hidden");
  diarySection.classList.remove("hidden");
}

// Load password items from local storage
function loadPasswordItems() {
  const passwordItems = JSON.parse(localStorage.getItem("passwordItems")) || [];
  passwordList.innerHTML = "";
  passwordItems.forEach(item => {
    const passwordItemElement = createPasswordItemElement(item);
    passwordList.appendChild(passwordItemElement);
  });
}

// Create a password item element
function createPasswordItemElement(item) {
  const passwordItemElement = document.createElement("li");
  passwordItemElement.classList.add("password-item");
  const websiteElement = document.createElement("span");
  websiteElement.textContent = item.website;
  const usernameElement = document.createElement("span");
  usernameElement.textContent = item.username;
  const passwordElement = document.createElement("span");
  passwordElement.textContent = item.password;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.dataset.id = item.id;
  passwordItemElement.appendChild(websiteElement);
  passwordItemElement.appendChild(usernameElement);
  passwordItemElement.appendChild(passwordElement);
  passwordItemElement.appendChild(deleteButton);
  return passwordItemElement;
}

// Show the form to add a new password
function showAddPasswordForm() {
  const website = prompt("Enter website:");
  const username = prompt("Enter username:");
  const password = prompt("Enter password:");
  const id = new Date().getTime().toString();
  const newItem = { id, website, username, password };
  const passwordItems = JSON.parse(localStorage.getItem("passwordItems")) || [];
  passwordItems.push(newItem);
  localStorage.setItem("passwordItems", JSON.stringify(passwordItems));
  const passwordItemElement = createPasswordItemElement(newItem);
  passwordList.appendChild(passwordItemElement);
}

// Handle clicks on the password list
function handlePasswordListClick(event) {
  if (event.target.tagName === "BUTTON") {
    const id = event.target.dataset.id;
    const passwordItems = JSON.parse(localStorage.getItem("passwordItems")) || [];
    const index = passwordItems.findIndex(item => item.id === id);
    passwordItems.splice(index, 1);
    localStorage.setItem("passwordItems", JSON.stringify(passwordItems));
    event.target.parentNode.remove();
  }
}
const expect = chai.expect;

describe("createPasswordItemElement", function() {
  it("should create a new password item element", function() {
    const item = { id: "123", website: "example.com", username: "user1", password: "password123" };
    const element = createPasswordItemElement(item);
    expect(element.tagName).to.equal("LI");
    expect(element.classList.contains("password-item")).to.be.true;
    expect(element.querySelector("span:nth-of-type(1)").textContent).to.equal("example.com");
    expect(element.querySelector("span:nth-of-type(2)").textContent).to.equal("user1");
    expect(element.querySelector("span:nth-of-type(3)").textContent).to.equal("password123");
    expect(element.querySelector("button").dataset.id).to.equal("123");
  });
});
