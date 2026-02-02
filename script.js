var overlay = document.querySelector(".overlay")
var add_menu = document.querySelector(".addpopup")
var button_layer = document.querySelector(".addpopup-layer")
//addpopup button
var popup_button = document.querySelector(".addbutton")
popup_button.addEventListener("click",function(){
    overlay.style.display = "block"
    add_menu.style.display = "flex"
    button_layer.style.display="flex"
})

//cancel button
var cancel_btn = document.getElementById("cancel")
cancel_btn.addEventListener("click",function(){
    overlay.style.display = "none"
    add_menu.style.display = "none"
    button_layer.style.display="none"
})

//add button
var add = document.getElementById("add")
var booklist=document.querySelector(".list_items")
var title_ele = document.querySelector(".title")
var description_ele = document.getElementById("description")
var books=[]
add.addEventListener("click",function(event)
    {    
        event.preventDefault()
        var title = title_ele.value.trim()
        var description = description_ele.value.trim()
        if(!title || !description){
            alert("both title and description are required")
            return
        }
        var book_id = books.length
        books.push({title,description})
        var li_ele = document.createElement("li")
        li_ele.setAttribute("class","book_item")
        li_ele.innerHTML=`${title}<button class="delete-btn"><i class="fa fa-trash" id="icon"></i></button>`;
        const delete_btn = li_ele.querySelector(".delete-btn");
        li_ele.dataset.index = book_id
        li_ele.onclick = () => showDescription(book_id)
        delete_btn.onclick = () => delete_item(book_id);
        booklist.append(li_ele);
        overlay.style.display = "none"
        add_menu.style.display = "none"
        button_layer.style.display="none"
        title_ele.value=''
        description_ele.value=''
}
)

function showDescription(id) {
  const descBox = document.querySelector('.briefview');
  var decription_box = document.querySelector(".decription_box")
  const book = books[id];
  if (book) {
    descBox.innerHTML = `<div class="head_list" id="desc_head">${book.title}</div>
                         <p class="decription_box">📖 ${book.description}</p>`;
    const decription_box = document.querySelector(".decription_box")
    decription_box.style.display="block"
    decription_box.style.padding = "30px"
  } else {
    decription_box.textContent = "Description not found.";
  }
}

function delete_item(id){
  const olElement = document.querySelector('.list_items');
  
  const liToRemove = olElement.querySelector(`li[data-index="${id}"]`);
  var descBox = document.querySelector('.briefview');
  
  
  if (liToRemove) {
    olElement.removeChild(liToRemove);
    
  }
  if(books[id]) books[id]=null;
  
  descBox.innerHTML = `<div class="head_list" id="desc_head">Description</div>
                       <p class="decription_box">No description</p>`;
  var decription_box = document.querySelector(".decription_box");
  decription_box.style.display="flex";
  
}

var toggle = document.querySelector(".menu-toggle")
var menu = document.querySelector(".side-navbar")
function showNavbar(){
    menu.style.left="0"
}

function hideNavbar(){
    menu.style.left="-100%"
}