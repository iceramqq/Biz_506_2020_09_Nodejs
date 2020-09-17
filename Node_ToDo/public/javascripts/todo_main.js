/**
 * 바닐라 js 코딩
 * jquery등 front 라이브러리, 프레임워크를 사용하지 않고
 * 순수 js 를 활용한 코딩
 */
function btn_click() {
  //alert("버튼이 클릭됨");

  // id가 todo로 되어있는 onput tag에 사용자가 입력한 문자열을 춫울하여
  // todo 변수에 담아라
  //
  let todo = document.getElementById("todo").value;
  alert(todo);
}

function main_title_click() {
  // id가 main_title로 되어잇는 (일반적인 tag)의 text 문자열을 추출하여
  // innerHTML, innerText 속성을 사용하여 문자열 추출
  // 간촉
  // text 변수에 저장
  let text = document.getElementById("main_title").innerText;
  alert(text);
}

// html dom(docment object model)전체에 이벤트를
//
//
// dom문서가 모두 화면에 그려지기 전에
// js코드가 실행되는 것을 방지할수 있다.
// 즉 dom 문서가 모두 화면에 그려진 후 js 코드가
document.addEventListener("DOMContentLoaded", function () {
  let todo = document.getElementById("todo");
  //todo.value = "반갑습니다";

  document.querySelector("#btn-save").addEventListener("click", function () {
    let todo_input = document.querySelector("input");

    todo_input = document.querySelector(
      "section.todo_main form input[name='todo']"
    );

    let todo_value = todo_input.value;
    if (todo_value === "") {
      alert("할일은 반드시 입력해야 합니다");
      document.querySelectorAll("input")[0].focus;
      return false;
    }
    if (confirm("저장할까요")) {
      document.querySelector("form").submit();
    }
  });

  /*  
  document.getElementById("btn-save").addEventListener("click", function () {
    //alert(todo.value);
    let todo_value = todo.value;

    if (todo_value == "") {
      alert("하고 싶은일 내용은 반드시 입력하세요");
      todo.focus();
      return;
    }

    if (confirm("저장할까요")) {
      document.getElementsByName("form")[0].submit();
    }
  });
  */
  // id가 지정되지 않았을때
  // tag이름으로 찾을경우는 같은 이름의 tag가 여러개 잇을 수 잇기 때문에
  // 무조건 배열로 값이 추출된다.
  // tag이름으로
  /*
  let btn_save = document.getElementsByName("button")[0];
  btn_save.addEventListener("click", function () {
    let input = document.getElementsByName("input");
    let todo_input = inputs[0];
    let todo_value = todo.value;

    if (todo_value === "") {
      alert("할일은 반드시 입력하세요");
      document.getElementsByName("todo")[0].focus();
      return false;
    }

    if (confirm("저장할까요")) {
      document.getElementsByName("form")[0].submit();
    }
    alert(todo_value);
  });
  */
});
