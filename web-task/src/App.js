import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id = "register">
          <h4>회원가입</h4><br></br>
          <label>아이디</label>
          <input type = "text" id = "Id"></input><br></br>
          <label>패스워드</label>
          <input type = "password" id = "Pw"></input><br></br>
          <label>이름</label>
          <input type = "text" id = "Name"></input><br></br>
          <label>전화번호</label>
          <input type = "number" id = "Number"></input><br></br>
          <label>이메일</label>
          <input type = "email" id = "Email"></input><br></br>
          <button onClick={register}>확인</button>
          <button onClick={cancel}>취소</button>
        </div>

        <div id = "searchUser">
          <label>조회할 아이디</label>
          <input type = "text" id = "searchId"></input>
          <button onClick={search}>검색</button><br></br>
         
          <button>회원 목록 전체 검색</button><br></br>
         
          <ul>아이디</ul>
          <ul>이름</ul>
          <ul>전화번호</ul>
          <ul>이메일</ul><br></br>
        </div>

        <div id = "newWord">
          <h4>새 글 작성</h4>
          <label>아이디</label>
          <input id = "writeId" type = "text"></input><br></br>
          <label id = "Title">글제목</label>
          <input type = "text"></input><br></br>
          <label id = "Input">내용</label>
          <input type = "text"></input><br></br>
          <button onClick={write}>확인</button>
          <button>취소</button>
        </div>

        <div id = "searchWords">
          <label>조회할 글쓴이의 아이디를 입력</label>
          <input type = "text"></input>
          <button>검색</button><br></br>
          <label>조회할 게시글의 번호를 입력</label>
          <input type = "text"></input>
          <button>검색</button><br></br>
          <button>게시글 전체검색</button><br></br>
          <ul className="id">아이디</ul>
          <ul className="writer">글쓴이</ul>
          <ul className="title">제목</ul>
          <ul className="input">내용</ul><br></br>
        </div>
      </header>
    </div>
  );
}

var userData = [];
function register(){
  
  var id = document.getElementById('Id').value;
  var pw = document.getElementById("Pw").value;
  var name = document.getElementById("Name").value ;
  var number = document.getElementById("Number").value;
  var email = document.getElementById("Email").value;
  userData[0]=id;
  userData[1]=pw;
  userData[2]=name;
  userData[3]=number;
  userData[4]=email;
  return userData[0];
}

function cancel(){
  var id = document.getElementById('Id').value = " ";
  var pw = document.getElementById("Pw").value = "";
  var name = document.getElementById("Name").value = " ";
  var number = document.getElementById("Number").value = " ";
  var email = document.getElementById("Email").value = " ";
}

function search(){
  var searchId = document.getElementById('serachId').value;
  if(searchId==register()){
    var id = document.getElementsByClassName('id');
    var li = document.createElement("li");
    var node = document.createTextNode(searchId);
    li.appendChild(node);

    id.appendChild(li);
  }
  
}

function edit(){
  
}

function drop(){

}

function write(){
  document.getElementById('writeId').value = register();
}
export default App;
