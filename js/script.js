/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/






/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const ul = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');

function showPage (list,page) {

   const startIndex = (page * 9) - 9 ;
   const endIndex = page * 9 ;

   
   
   
   ul.innerHTML = ''
   for (let i = 0 ; i < list.length ; i++){
      if (i >= startIndex && i < endIndex) {

         const img = list[i].picture.large
         const fullName = list[i].name.first + ' ' + list[i].name.last
         const email =  list[i].email
         const dateJoined =  list[i].registered.date;

      const li = document.createElement('li');
      li.innerHTML = `  <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src=${img} alt="Profile Picture">
        <h3>${fullName}</h3>
        <span class="email">${email}</span>
      </div>
      <div class="joined-details">
        <span class="date">${dateJoined}</span>
      </div>
    </li>`
         
      ul.appendChild(li)
  
      }
}

};





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination (list) {

   numberOfButtons = Math.ceil(list.length / 9);
   
   
   
   linkList.innerHTML = "";

   for (let i = 0 ; i < numberOfButtons ; i++) {

      const li = document.createElement('li');
      const button = document.createElement('BUTTON');

      button.textContent = i + 1
      li.appendChild(button);
      linkList.appendChild(li);
}

const firstButton = linkList.firstChild.firstChild;
firstButton.className = 'active'


linkList.addEventListener('click', (e) => {
   if ( e.target.tagName === 'BUTTON') {
      
      const activeButton = document.querySelector('.active')
      const pageNumber = e.target.textContent
      activeButton.classList.remove("active")
      e.target.className = 'active'


      showPage(list,pageNumber)

   }
});


};

/*** 
 * creating search input
*/

const label = document.createElement('label');
const span = document.createElement('span');
const input = document.createElement('input');
const button = document.createElement('button');

label.setAttribute("for","search")
label.className = 'student-search'

span.textContent = "Search by name"

input.type = "text"
input.id = "search"
input.className = "student-search"

button.type = "button"
button.setAttribute("src","../img/icn-search.svg")
button.setAttribute("alt","Search icon")

label.append(span,input,button)

const header = document.querySelector('.header')
header.appendChild(label);

/*** 
 * adding event listner
*/




input.addEventListener('keyup', (e) => {
   
   const textInput = input.value.toLowerCase();
   
   const searchResult=[];
   for (i = 0 ; i < data.length ; i++) {
      const firstName = data[i].name.first.toLowerCase();
      const lastName = data[i].name.last.toLowerCase();
      
         if(firstName.indexOf(textInput) > -1 || lastName.indexOf(textInput) > -1) {
            searchResult.push(data[i])         }
   }

   if (searchResult.length > 0){
      showPage(searchResult,1)
      addPagination(searchResult)   
   }

   else {
      ul.innerHTML = "No results found"
      linkList.innerHTML = "";

   }

   console.log(searchResult)


 
})



// Call functions
showPage(data,1)
addPagination(data)

