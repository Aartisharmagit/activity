// script.js

let students = [];

function addStudent() {
  const input = document.getElementById("studentName");
  const name = input.value.trim();
  if (name === "") return alert("Please enter a name");

  students.push(name);
  input.value = "";
  showStudents();
}

function showStudents() {
  const list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student, index) => {
    list.innerHTML += `
      <li>
        <span>${student}</span>
        <div class="actions">
          <button onclick="editStudent(${index})">Edit</button>
          <button onclick="deleteStudent(${index})">Delete</button>
        </div>
      </li>
    `;
  });
}

function editStudent(index) {
  const newName = prompt("Enter new name:", students[index]);
  if (newName) {
    students[index] = newName.trim();
    showStudents();
  }
}

function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    showStudents();
  }
}

// function lessThan100(a, b) {
//   return (a + b) < 100;
// }
// console.log(lessThan100(22, 15)); // ➞ true
// console.log(lessThan100(83, 34)); // ➞ false
// console.log(lessThan100(3, 77));  // ➞ true
