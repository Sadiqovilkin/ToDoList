const name = document.getElementById("name");
const surname = document.getElementById("surname");
const age = document.getElementById("age");
const about = document.getElementById("about");
const Btn = document.getElementById("btn");
const Table = document.getElementById("table_body");

const FormAdd = (e) => {
  e.preventDefault();
  if (
    name.value.length < 3 ||
    surname.value.length < 5 ||
    age.value.length > 3 ||
    about.value.length < 1
  ) {
    Btn.setAttribute("disabled", true);
  } else {
    var UserData = `
    <tr id="list">
    <th scope="row">${Math.floor(Math.random() * 100)}</th>
    <td>${name.value}</td>
    <td>${surname.value}</td>
    <td>${age.value}</td>
    <td><p>${about.value}</p></td>
   
  </tr>
    
    `;
    Table.innerHTML += UserData;
    name.value = "";
    surname.value = "";
    age.value = "";
    about.value = "";
    Btn.setAttribute = false;
  }
};
if (Btn) {
  Btn.addEventListener("click", FormAdd);
}
const RemoveBtn = document.getElementById("crahs");
const list = document.getElementById("list");
// const RemoveToDoList = (list)=>{
//     this.parentNode.remove()
//     list.style.display="none"
//     Table.removeChild(list);
//     console.log("ok");
// }
RemoveBtn.addEventListener("click", (e)=>{
  e.preventDefault();

Table.removeChild(list)
})

// if(RemoveBtn){
//   // this.parentNode.remove()
//       // list.style.display="none"
//       // Table.removeChild(list);
//       list.remove();
// }
// else{
//   console.log("l");
// }

// var current_tasks = document.querySelectorAll(".bi-trash");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }