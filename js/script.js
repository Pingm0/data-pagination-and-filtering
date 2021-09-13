/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*createing refreince for the Document elements to use later in diffrent functions*/ 
const ul = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage (list,page) {

   //storing the start and end indexes

   const itemsPerPage = 9 ;
   const startIndex = (page * itemsPerPage) - itemsPerPage ;
   const endIndex = page * itemsPerPage ;

  // makeing sure the ul Element is clear 
   ul.innerHTML = ''

   // looping through the list of data and generating the template literal to populate the list
   for (let i = 0 ; i < list.length ; i++){
      if (i >= startIndex && i < endIndex) {

         //storing the values from the object so we use it in the template literal later , this is step is not necessary its better for readability
         const img = list[i].picture.large
         const fullName = list[i].name.first + ' ' + list[i].name.last
         const email =  list[i].email
         const dateJoined =  "Joinned" +" "+ list[i].registered.date;

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

   //determining how many pagination buttons we need
   numberOfButtons = Math.ceil(list.length / 9);
   
   
   // making sure its cleared 
   linkList.innerHTML = "";
   //creating the pagination buttons 
   for (let i = 0 ; i < numberOfButtons ; i++) {

      const li = document.createElement('li');
      const button = document.createElement('BUTTON');

      button.textContent = i + 1
      li.appendChild(button);
      linkList.appendChild(li);
}

//adding the active class to the first button
const firstButton = linkList.firstChild.firstChild;
firstButton.className = 'active'


//adding an event listener to change the active page class and rebuild the page based on the page number with different students
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
 * creating search input element
*/

const label = document.createElement('label');
const span = document.createElement('span');
const input = document.createElement('input');
const button = document.createElement('button');
const img = document.createElement('img');

label.setAttribute("for","search")
label.className = 'student-search'

span.textContent = "Search by name"

input.type = "text"
input.id = "search"
input.className = "student-search"
input.placeholder="Search by name..."

button.type = "button"
button.setAttribute("alt","Search icon")
img.setAttribute("src","img/icn-search.svg")
button.appendChild(img)
label.append(span,input,button)

const header = document.querySelector('.header')
header.appendChild(label);



/*** 
 * adding event listener to capture the user search and return result
*/

input.addEventListener('keyup', (e) => {


   // storing the search value and making sure it's in lower case
   const textInput = input.value.toLowerCase();
   
   // creating a placeholder for the search result
   const searchResult=[];

   //adding an event listener to capture the user search and return result
   for (i = 0 ; i < data.length ; i++) {
      //getting first and last name and storing them lowercased 
      const firstName = data[i].name.first.toLowerCase();
      const lastName = data[i].name.last.toLowerCase();
      //checking if the input of the user is matching any part of the first or last name 
      if(firstName.indexOf(textInput) > -1 || lastName.indexOf(textInput) > -1) {
         //if it is  we push the elemet to the search Result arry
         searchResult.push(data[i])         }
   }
   //if we have matches will update the result and pagination
   if (searchResult.length > 0){
      showPage(searchResult,1)
      addPagination(searchResult)   
   }
   //if no result we return no result found 
   //I'm updating the pagination cause I think I have a bug in my code sometimes pagination show like 3 and I have no results

   else {
      ul.innerHTML = "No results found"
      linkList.innerHTML = "";

   } 
})



// Call functions
showPage(data,1)
addPagination(data)

