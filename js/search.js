let dim = document.getElementById('dim');
let form_search = document.getElementsByClassName('form-search');
let btn_search = document.getElementsByClassName('search-sp');
let btn_close = document.getElementsByClassName('topzone-delSearch');
let logo_header = document.getElementsByClassName('logo');
let menu_header = document.getElementsByClassName('menu');
let menu_children = menu_header[0].children;

// hiện form
btn_search[0].addEventListener('click', ShowSearchForm);

// ẩn form
btn_close[0].addEventListener('click', HideSearchForm);
dim.addEventListener('click', HideSearchForm);

// hàm xử lý hiện form
function ShowSearchForm() {
  logo_header[0].style.display = 'none';
  for (let i = 0; i < menu_children.length; i++) {
    menu_children[i].classList.add("hidden");
  }
  form_search[0].classList.add("active");
  dim.style.display = 'block';
}

// hàm xử lý ẩn form
function HideSearchForm() {
  dim.style.display = 'none';
  form_search[0].classList.remove("active");
  logo_header[0].style.display = 'block';
  for (let i = 0; i < menu_children.length; i++) {
    menu_children[i].classList.remove("hidden");
  }
}
