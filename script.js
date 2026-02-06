var overlay = document.querySelector(".overlay")
var add_menu = document.querySelector(".addpopup")
var button_layer = document.querySelector(".addpopup-layer")
//addpopup button
var popup_button = document.querySelector(".addbutton")
if (popup_button) {
  popup_button.addEventListener("click", function () {
    if (overlay) overlay.style.display = "block"
    if (add_menu) add_menu.style.display = "flex"
    if (button_layer) button_layer.style.display = "flex"
  })
}

//cancel button
var cancel_btn = document.getElementById("cancel")
if (cancel_btn) {
  cancel_btn.addEventListener("click", function () {
    if (overlay) overlay.style.display = "none"
    if (add_menu) add_menu.style.display = "none"
    if (button_layer) button_layer.style.display = "none"
  })
}

//add button
var add = document.getElementById("add")
var booklist = document.querySelector(".list_items")
var title_ele = document.querySelector(".title")
var description_ele = document.getElementById("description")
var books = []
if (add) {
  add.addEventListener("click", function (event) {
    event.preventDefault()
    if (!title_ele || !description_ele || !booklist) return
    var title = title_ele.value.trim()
    var description = description_ele.value.trim()
    if (!title || !description) {
      alert("both title and description are required")
      return
    }
    var book_id = books.length
    books.push({ title, description })
    var li_ele = document.createElement("li")
    li_ele.setAttribute("class", "book_item")
    li_ele.innerHTML = `${title}<button class="delete-btn"><i class="fa fa-trash" id="icon"></i></button>`
    const delete_btn = li_ele.querySelector(".delete-btn")
    li_ele.dataset.index = book_id
    li_ele.onclick = () => showDescription(book_id)
    if (delete_btn) delete_btn.onclick = () => delete_item(book_id)
    booklist.append(li_ele)
    if (overlay) overlay.style.display = "none"
    if (add_menu) add_menu.style.display = "none"
    if (button_layer) button_layer.style.display = "none"
    title_ele.value = ''
    description_ele.value = ''
  })
}

function showDescription(id) {
  const descBox = document.querySelector('.briefview')
  if (!descBox) return
  const book = books[id]
  if (book) {
    descBox.innerHTML = `<div class="head_list" id="desc_head">${book.title}</div>
                         <p class="decription_box">📖 ${book.description}</p>`
    const decription_box = document.querySelector(".decription_box")
    if (decription_box) {
      decription_box.style.display = "block"
      decription_box.style.padding = "30px"
    }
  } else {
    descBox.innerHTML = `<div class="head_list" id="desc_head">Description</div>
                         <p class="decription_box">Description not found.</p>`
  }
}

function delete_item(id) {
  const olElement = document.querySelector('.list_items')
  if (!olElement) return
  const liToRemove = olElement.querySelector(`li[data-index="${id}"]`)
  var descBox = document.querySelector('.briefview')
  if (liToRemove) {
    olElement.removeChild(liToRemove)
  }
  if (books[id]) books[id] = null
  if (descBox) {
    descBox.innerHTML = `<div class="head_list" id="desc_head">Description</div>
                         <p class="decription_box">No description</p>`
    var decription_box = document.querySelector(".decription_box")
    if (decription_box) decription_box.style.display = "flex"
  }
}

var toggle = document.querySelector(".menu-toggle")
var menu = document.querySelector(".side-navbar")
function showNavbar(){
    if(menu) menu.style.left="0"
}

function hideNavbar(){
    if(menu) menu.style.left="-100%"
}

if(toggle){
    toggle.addEventListener("click", showNavbar)
}