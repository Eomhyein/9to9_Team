
//김정찬
    $("#exampleModal1").html(`<div class="modal-dialog modal-xl modal-dialog-scrollable">
    <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="modal1_body_left">
                <img src="./imgs/김정찬_아바타.png" class="modal1_body_left_img">
                <h4><b>팀장 김정찬</b></h4> <br>
                <p style="font-size: 20px;">
                    안녕하세요! <br>1인분 이상의 백엔드 개발자가 되기 위해 학습중인 팀장 김정찬입니다.
                    저는 원래 일을 하다가 대학에 편입 후 컴공으로 올해 졸업했습니다.
                    하지만 너무 짧은 2년이었기에 더 많은 팀플과 소통을 통해 성장하고 싶어서
                    캠프에 지원하게 되었습니다!
                </p> <br>
                <div class="modal1_body_left_footer">
                    <a href="https://github.com/jkc-mycode">
                        <img src="./imgs/깃허브_아이콘.png" class="github_icon" />
                    </a>
                    <a href="https://velog.io/@my_code/posts">
                        <img src="./imgs/벨로그_아이콘.png" class="velog_icon" />
                    </a>
                </div>
            </div>
            <div class="modal1_body_right">
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                            aria-selected="true">나의 성격과 MBTI</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                            aria-selected="false">나의 장점</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                            aria-selected="false">나의 협업 스타일</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent" style="height: 520px;">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                        aria-labelledby="nav-home-tab" tabindex="0">
                        <br>
                        <h2>나의 성격</h2>
                        <p style="font-size: 20px;">
                            저의 성격은 소심하지만 긍정적이고, 무엇이든 시간을 들여 노력하는 편입니다.<br>
                            사람들과 대화하는 게 서툴고 어렵지만 이것 역시 최대한 많은 사람들과 소통하려고 노력하고 있습니다.<br>
                            그리고 문제가 발생하면 그 문제에 대해서 최대한 긍정적으로 생각하되 <br>
                            그 문제를 해결하기 위해 거기에 몰입하고 시간을 들여 노력합니다.<br>
                        </p> <br>
                        <h2>나의 MBTI</h2>
                        <p style="font-size: 20px;">
                            저의 MBTI는 <b>ISFJ</b> 입니다. 위에서 말한 것처럼 내향적인 성향이기에 I 이고, <br>
                            현재에 초점을 두고 생각하기에 S, 어떤 상황에 대해 감성적이기에 F,<br>
                            최대한 무엇이든 계획적으로 이루어지길 원하기에 J 라는 결과가 나왔습니다.<br>
                        </p>
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel"
                        aria-labelledby="nav-profile-tab" tabindex="0">
                        <br>
                        <p style="font-size: 20px;">
                            나의 장점은 끈기 있게 도전하는 것입니다. <br>
                            새로운 목표를 세웠을 때, 그것을 이루기 위해 끝까지 포기하지 않고 <br>
                            노력하는 태도는 내가 가진 가장 큰 덕목 중 하나입니다. <br>
                            어려움이 닥쳤을 때 쉽게 좌절하지 않고, 그 상황을 극복하기 위해 <br>
                            다양한 방법을 모색하며, 실패를 두려워하지 않습니다. <br>
                            이런 저의 태도는 학업이나 일상생활에서도 큰 장점으로 작용합니다.<br>
                            <br>
                            예전에 대학에서 프로젝트를 진행할 때, 프론트를 진행할 사람이 없어서<br>
                            제가 맡아서 진행한 적이 있습니다. 이 때 저는 프론트 영역을 처음이었고<br>
                            그래서 React를 따로 공부하면서 프로젝트를 진행했습니다.<br>
                            이 과정에서 필요한 새로운 지식을 습득하고, 문제 해결 능력을 키우며, <br>
                            팀원들과의 협력을 통해 공동의 목표를 달성하는 등, <br>
                            끈기 있는 도전은 저를 더욱 성장하게 만들었습니다.<br>
                            <br>
                            따라서, 저는 앞으로도 변함없이 도전하는 정신으로 삶의 다양한 분야에서 <br>
                            끊임없이 발전해 나갈 것입니다.
                        </p>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel"
                        aria-labelledby="nav-contact-tab" tabindex="0">
                        <br>
                        <p style="font-size: 20px;">
                            나의 협업 스타일은 팀원과 자주 소통하면서 피드백 받는 것입니다. <br>
                            프로젝트를 진행하면서, 저는 의견 교환의 중요성을 높이 평가합니다. <br>
                            이를 통해 다양한 관점을 이해하고, 프로젝트의 방향성을 보다 명확히 <br>
                            잡을 수 있다고 믿습니다.<br>
                            <br>
                            정기적인 미팅을 통해 팀원들과 진행 상황을 공유하고, <br>
                            각자의 의견을 적극적으로 듣습니다. <br>
                            또한, 피드백을 적극적으로 요청하고 수용함으로써, <br>
                            프로젝트의 질을 향상시키고, 개인의 성장에도 기여합니다.<br>
                            <br>
                            저는 이러한 소통 과정에서 생기는 시너지를 중요하게 생각하며, <br>
                            팀 내에서 긍정적인 분위기를 조성하는 데에도 힘씁니다. <br>
                            서로의 아이디어를 존중하고, 문제 해결을 위해 협력하는 환경에서 <br>
                            최고의 결과를 도출할 수 있다고 확신합니다. <br>
                            이와 같은 협업 스타일을 통해, 저는 팀과 함께 성장하며 <br>
                            목표를 달성해 나가고자 합니다.
                        </p>
                    </div>
                </div>

            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    </div>
</div>`);

//홍성빈
    $("#exampleModal2").html(`
    <script>
    function btnopen() {
        window.open('https://github.com/rodlsdyd');
    }

    function btnopen2() {
        window.open('https://blog.naver.com/rlslek3');
    }
</script>

    <div class="modal-dialog modal-xl modal-dialog-scrollable">
    <div class="modal-content">
        <div class="modal-header modal12_header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body modal2_body">
            <img src="./imgs/홍성빈캐릭터.png" alt="홍성빈캐릭터" />
            <div class="textarea1">
                <h1> 홍성빈 <h1>
            </div>
            <div class="modalbutton">
                <button onclick="btnopen()" type="button" class="btn12"> </button>
            </div>
            <div class="modalbutton2">
                <button onclick="btnopen2()" type="button" class="btn12"> </button>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <strong> 나의 MBTI 및 성격 </strong>
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong> ESFJ 친선도모형 </strong> 어디 모난곳 없고 두루 두루 다 친하게 지냅니다
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong> 나의 장점 </strong>
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>의견 교환이 원할한 스타일</strong> 거의 모든 의견을 수용하려고 노력하려고 합니다 다수결의 원칙을 따르더라도 어느정도
                        소수에대한 의견도 받아들여 합의점을 찾기위해 많이 노력합니다
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong> 나의 협업 스타일 </strong>
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>주제 정하기 , 아이디어 내기.</strong> 주제나 아이디어같은걸 먼저 내서 문제 방식을 해결하거나 고민하는것을 해결하는
                        스타일입니다.
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
</div>`);

//엄혜인
    $("#exampleModal_3").html(`<div class="modal-dialog modal-xl">
    <div class="modal-content">
        <div class="modal-header modal3_header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <!--나의 소개 아바타있는부분-->
            <div class="aboutmeEom">
                <img src="./imgs/hyein/엄혜인_아바타_배경X.png" class="imageEom" alt="엄혜인 아바타 배경없는 이미지">
                <h1 class="introductionEom_title">엄혜인</h1>
                <div class="introductionEom">
                    <p class="introductionEom_text">호기심많고 새로운 도전을 즐기는 개발자! </p>
                </div>
                <div class="archivingEom">
                    <a href="https://github.com/Eomhyein/" target="_blank">
                        <button class="githubeEom" type="button"><img src="./imgs/깃허브_아이콘.png"
                                alt="깃허브이미지"></button>
                    </a>
                    <a href="https://blog.naver.com/mickey_8688" target="_blank">
                        <button class="naverblogEom" type="button"><img src="./imgs/hyein/02_naver blog_01.png"
                                alt="네이버블로그이미지"></button>
                    </a>
                </div>
            </div>
            <!--나의 소개 성격부분-->
            <div class="mystyleEom">
                <div class="mystyleEom_accordion">
                    <input type="radio" name="accordion" id="mbtiEom">
                    <label for="mbtiEom" class="personalityEom">
                        <div class="accordion_head_1" id="accordion_openclose1">
                            <button class="accordion_btn1" id="accordion_btn01">
                                <i class='bx bx-palette' id="palette_icon"></i>
                                <h1 class="accordion-title">나의 MBTI 및 성격</h1>
                            </button>
                        </div>
                        <div class="accordion_body" id="mbtiEom_contens">
                            <p class="accordion_text">낯을 가리지만 소통하는 것을 좋아하며 친해지면 거리낌없이 장난도 아주 잘 칩니다. <br>
                                ISFP : 적응력이 뛰어난 현실주의자!
                            </p>
                        </div>
                    </label>
                    <input type="radio" name="accordion" id="Advantages">
                    <label for="Advantages" class="AdvantagesEom">
                        <div class="accordion_head_2" id="accordion_openclose2">
                            <button class="accordion_btn2" id="accordion_btn02">
                                <i class='bx bx-happy-beaming' id="smile_icon"></i>
                                <h1 class="accordion-title">나의 장점</h1>
                            </button>
                        </div>
                        <div class="accordion_body" id="Advantages_contens">
                            <p class="accordion_text">관심을 가지는 분야에 끝까지 파고드는 성격으로 목표를 꼭 이루고자 하는 강한 집념을 가지고 있습니다.
                            </p>
                        </div>
                    </label>
                    <input type="radio" name="accordion" id="Cooperation">
                    <label for="Cooperation" class="CooperationEom">
                        <div class="accordion_head_3" id="accordion_openclose3">
                            <button class="accordion_btn3" id="accordion_btn03">
                                <i class='bx bx-group' id="group_icon"></i>
                                <h1 class="accordion-title">나의 협업 스타일</h1>
                            </button>
                        </div>

                        <div class="accordion_body" id="Cooperation_contens">
                            <p class="accordion_text">새로운 것을 알아가는데 성취감을 느끼며 원활하게 잘 소통하려고 하는 의지가 있습니다.
                            </p>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    </div>
</div>`);

//이장현
    $("#exampleModal4").html(`<div class="modal-dialog modal-xl">
    <div class="modal-content">
        <div class="modal-header modal4_header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">상세정보</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="Profile_Body_L">
                <img src="./imgs/Jh/ljh_no_back.png" class="Profile_Img" alt="캐릭터 이미지">
                <div class="Profile_Page">
                    <!-- 이름 -->
                    <div class="Profile_Name">
                        <div class="Badge_Name">
                            <span class="badge rounded-pill bg-success">팀원</span>
                            <span class="badge rounded-pill badge bg-warning">뉴비</span>
                            <span class="badge rounded-pill bg-secondary">ESTP</span>
                        </div>
                        <h5 class="P_Name">이장현</h5>
                        <!-- 추가정보 -->
                        <div class="Profile_Info">
                            <div class="Profile_Info_Body">
                                <li class="tag1">개발자를 꿈꾸다!</li>
                                <li class="tag2">왈왈! 왈왈왈왈!</li> <br />
                                <li class="tag1">사용하는 언어</li>
                                <span class="badge bg-danger">HTML</span>
                                <span class="badge bg-warning">JavaScript</span>
                                <span class="badge bg-primary">CSS</span>
                            </div>
                            <div class="Link_Btn">
                                <a href="killiacaridos@gmail.com" target="_blank">
                                    <button class="LK1" type="button">
                                        <img src="./imgs/Jh/gmail.png" alt="gmail"></button>
                                </a>
                                <a href="https://github.com/JHLee0891" target="_blank">
                                    <button class="LK2" type="button"><img src="./imgs/Jh/git.png"
                                            alt="git"></button>
                                </a>
                                <a href="https://velog.io/@jhyunl/posts" target="_blank">
                                    <button class="LK3" type="button">
                                        <img src="./imgs/Jh/velog.jpg" alt="velog"></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Profile_Body_R">
                <div class="Profile_Page_R">
                    <div class="Font_R"></div>
                    <span class="badge bg-info text-dark">역활</span>
                    <li class="tag1_R">Modal 분리 및 개인페이지 제작</li><br />
                    <span class="badge bg-info text-dark">목표</span>
                    <li class="tag1_R">다같이 프로젝트 잘 끝내기</li>
                    <li class="tag1_R">수강 완주하기</li>
                    <li class="tag1_R">코딩테스트 수준 높이기</li>
                    <li class="tag1_R">게임개발 능력 올리기</li> <br />
                    <span class="badge bg-info text-dark">하고싶은 말</span>
                    <li class="tag1_R">처음 경험해보는 주제이기에 흥미로우면서 머리가 아픕니다.</li>
                    <li class="tag1_R">하지만 이러한 아픔이 좋은 경험으로 되돌아올 수 있게 최선을 다하겠습니다.</li>
                    <li class="tag1_R">모두 화이팅!</li>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>`);



// 박순호
    $("#exampleModal5").html(`<div class="modal-dialog modal-xl">
    <div class="modal-content">
        <div class="modal-header modal5_header">
            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="modal5_body_left">
                <img src="./imgs/박순호소개.png" class="modal5_body_left_img">
                <h1>
                    팀원 박순호
                </h1>
            </div>
            <div class="modal5_body_right">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                            data-bs-target="#home-tab-pane" type="button" role="tab"
                            aria-controls="home-tab-pane" aria-selected="true">자기소개</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                            data-bs-target="#profile-tab-pane" type="button" role="tab"
                            aria-controls="profile-tab-pane" aria-selected="false">나의 성격과 MBTI</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab"
                            data-bs-target="#contact-tab-pane" type="button" role="tab"
                            aria-controls="contact-tab-pane" aria-selected="false">나의 장점</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="disabled-tab" data-bs-toggle="tab"
                            data-bs-target="#disabled-tab-pane" type="button" role="tab"
                            aria-controls="disabled-tab-pane" aria-selected="false">나의 협업 스타일</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                        aria-labelledby="home-tab" tabindex="0">
                        안녕하세요 저는 스파르타코딩 내일배움캠프 Node.js 5기 박순호입니다. 팀원들과 열심히 공부해서 모든 팀원들과 함께 좋은 결과 만들겠습니다.
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel"
                        aria-labelledby="profile-tab" tabindex="0">
                        <h3>나의 성격</h3>
                        <p>나의 성격은 무던한 편이고 약간 내향적입니다</p>
                        <h3>나의 MBTI</h3>
                        <p>ISTP</p>
                    </div>
                    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel"
                        aria-labelledby="contact-tab" tabindex="0">
                        나의 장점은 상대방의 말을 잘 들어주고 이해하려고 한다.
                    </div>
                    <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel"
                        aria-labelledby="disabled-tab" tabindex="0">
                        나의 협업 스타일은 상대방의 개성을 존중하면서 자율적으로 협업한다.
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    </div>
    </div>`
    );



// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, query, orderBy, doc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { addDoc, getDocs, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { firebaseConfig } from "./secret.js"


// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 댓글 리스트를 출력하기 전에 비워두기 위한 함수
$('.comment_list').empty();

// 파이어베이스에서 데이터 가져오는 forEach문 (날짜 순으로 정렬해서 가져옴)
let docs = await getDocs(query(collection(db, "9to9_Team_Intro"), orderBy("date")));
docs.forEach((doc) => {
    let row = doc.data();

    // isDelete가 false일 때 댓글 출력
    if (row['isDelete'] == false) {
        let commenter = row['commenter'];
        let content = row['content'];
        let date = row['date'].toDate();

        // 날짜, 시간 포맷 변경하기
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth() + 1)).slice(-2)
        let days = ('0' + date.getDate()).slice(-2)
        let hours = ('0' + date.getHours()).slice(-2)
        let minutes = ('0' + date.getMinutes()).slice(-2)
        let seconds = ('0' + date.getSeconds()).slice(-2)

        let day = year + '-' + month + '-' + days + " " + hours + ":" + minutes + ":" + seconds

        let html_temp = `
            <hr class="border border-dark border-2" style="width: 100%;">
            <div class="comment">
                <div class="comment_left">
                    <div class="commenter_info">
                        <img class="comment_img" src="./imgs/comment_img.png">
                        <div class="commenter_and_time">
                            <p class="commenter" style="font-weight: bold">${commenter}</p>
                            <p class="comment_time">${day}</p>
                        </div>
                    </div>
                    <div class="comment_content">
                        <p style="font-weight: bold">${content}</p>
                    </div>
                </div>
                <div class="comment_right">
                    <!-- 댓글들을 구분하기 위해서 파이이베이스 각 필드의 id 값을 value에 넣어줌 -->
                    <button value=${doc.id} type="button" class="btn btn-outline-danger comment_delete_btn">삭제</button>
                </div>
            </div>
            `

        $('#comment_list').append(html_temp);
    }
});


// 댓글 등록하는 버튼 클릭 시 동작
$("#comment_upload_btn").click(async function () {
    let commenter = $('#floatingInputName').val();
    let content = $('#floatingTextarea2Content').val();

    // 댓글 입력 유효성 검사
    if (commenter != '' && content != '') {
        let date = new Date();
        let isDelete = false;
        let doc = {
            'commenter': commenter,  // 댓글 작성자
            'content': content,  // 댓글 내용
            'date': date,  // 댓글 작성 날짜(시간)
            'isDelete': isDelete,  // 삭제된 댓글 유무
        };
        await addDoc(collection(db, "9to9_Team_Intro"), doc);
        alert('등록완료!');
        window.location.reload();
    } else {
        alert("이름 또는 내용이 비었습니다.");
    }
});


// 데이터베이스의 데이터를 지우는 것이 아닌 isDelete를 플래그로 사용
$('#comment_list').on('click', '.comment_delete_btn', async function () {
    if (confirm("댓글을 삭제하시겠습니까?")) {
        await updateDoc(doc(db, '9to9_Team_Intro', $(this).val()), {
            isDelete: true,
        })
        alert("삭제되었습니다.");
        window.location.reload();
    }
});


// // 데이터베이스에서 직접 필드를 삭제하는 코드
// $('#comment_list').on('click', '.comment_delete_btn', async function() {
//     if (confirm("댓글을 삭제하시겠습니까?")) {
//         await deleteDoc(doc(db, '9to9_Team_Intro', $(this).val()));
//         alert("삭제되었습니다.");
//         window.location.reload();
//     }
// });



$("#accordion_openclose1").click(async function () {
    $('#mbtiEom_contens').toggle();
})

$("#accordion_openclose2").click(async function () {
    $('#Advantages_contens').toggle();
})

$("#accordion_openclose3").click(async function () {
    $('#Cooperation_contens').toggle();
})