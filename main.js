let doTitle = document.getElementById('doTitle');
let doDetail = document.getElementById('doDetail');
let doDate = document.getElementById('doDate');
let todolist = document.getElementById('todolist');
let add_button = document.getElementById('add_button');


add_button.addEventListener('click', function(){
  if (!doTitle.value) {
    alert("할일 제목이 입력되지 않았습니다.");
  }
  else {
    var do_title = document.createElement('li');
    var do_detail = document.createElement('p');
    var do_date = document.createElement('p');
    var del_button = document.createElement('button')
    del_button.id = "del_button"
    del_button.innerText = "완료"
    del_button.addEventListener('click', (event) => {
      var parent = event.target.parentElement;
      parent.style.textDecoration = "line-through";

    })


    do_title.innerText = doTitle.value;
    if (doDetail.value != "") {
      do_detail.innerText = "-"+doDetail.value;
      do_title.appendChild(do_detail);
    }
    if (doDate.value != "") {
      do_date.innerText = doDate.value;
      do_title.appendChild(do_date);
    }

    do_title.appendChild(del_button);
    todolist.appendChild(do_title);


    doDetail.value = "";
    doTitle.value = "";
    doDate.value = "";
  }
})
