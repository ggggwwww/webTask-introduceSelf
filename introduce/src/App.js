import logo from './logo.svg';
import './App.css';
import project from 'C:/React/introduce/src/project.png';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <ul>
          <li><a href = "#schoolInform" rel = "next">홈</a></li>
          <li><a href = "#employInform" rel = "next">소개</a></li>
          <li id="last"><a href = "#projectInform" rel = "next">프로젝트</a></li>
        </ul>
        <div id = "schoolInform">
          <h3>학번 및 이름</h3><br></br>
          <p>3학년 2반 6번 김관웅</p>
        </div>

        <div id = "employInform">
          <h3>취업 및 하고 싶은 분야</h3><br></br>
          <p>크게 생각을 두고 있는 분야는 없고 웹 빼고는 다 괜찮음.</p>
        </div>

        <div id = "projectInform">
          <h3>프로젝트</h3><br></br>
          <img id = "project" src = {project} alt="sans" onClick= {showContext}></img>
        </div>
        <p id = "hiddenText">
          프로젝트 이름: 버스 예약 시스템<br></br>
          GUI에서 사용자가 '버스 정보 입력, 버스 예약, 활성화 된 버스, 좌석 정보'<br></br>
          등을 4가지 카테고리를 선택하여 버스를 예약하는 시스템.<br></br>
          데이터는 DB를 기반으로 불러온다.<br></br>
          그 외 프로젝트는 없어서 1개로 끝.
        </p>
      </header>
    </div>
  );
}

function showContext(){
  var hiddenText = document.getElementById("hiddenText");
  hiddenText.style.visibility = "visible";
}


export default App;
