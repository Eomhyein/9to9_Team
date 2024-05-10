// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, query, orderBy, doc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { addDoc, getDocs, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { firebaseConfig } from "../secret.js"



// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 현재 모달창이 누구꺼인지 저장하기 위한 변수
let member = "";

// 더 보기 버튼 클릭 시 동작 (댓글 출력을 위해 사용)
$('.about').click(async function () {
    member = $(this).next("input").val();
    console.log(member);

    // 댓글 리스트를 출력하기 전에 비워두기 위한 함수
    $('#comment_list').empty();

    let docs = await getDocs(query(collection(db, "9to9_Team_Intro"), orderBy("date")));
    docs.forEach((doc) => {
        let row = doc.data();

        // 현재 모달의 주인과 row의 데이터가 같고 isDelete가 false일 때 댓글 출력
        if (row['member'] == member && row['isDelete'] == false) {
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
                <div class="comment">
                    <div class="comment_left">
                        <div class="commenter_info">
                            <img class="comment_img" src="./imgs/comment_img.png">
                            <div class="commenter_and_time">
                                <p class="commenter">${commenter}</p>
                                <p class="comment_time">${day}</p>
                            </div>
                        </div>
                        <div class="comment_content">
                            <p>${content}</p>
                        </div>
                    </div>
                    <div class="comment_right">
                        <!-- 댓글들을 구분하기 위해서 파이이베이스 각 필드의 id 값을 value에 넣어줌 -->
                        <button value=${doc.id} type="button" class="btn btn-outline-danger comment_delete_btn">삭제</button>
                    </div>
                </div>
                <hr class="border border-dark border-2" style="width: 648px;margin-left: -10px;">`

            $('#comment_list').append(html_temp);
        }
    });
})


// 댓글 등록하는 버튼 클릭 시 동작
$("#comment_upload_btn").click(async function () {
    let commenter = $('#floatingInputName').val();
    let content = $('#floatingTextarea2Content').val();

    // 댓글 입력 유효성 검사
    if (commenter != '' && content != '') {
        let date = new Date();
        let isDelete = false;
        let doc = {
            'member': member,  // 현재 모달창의 주인
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




/*엄혜인 이모티콘 있는 아코디언 누르면 mbti 성격, 장점, 협업 스타일 누르면 나타나게 하기*/
/*function openclose1() {
    $('#mbtiEom_contens').toggle();
}
function openclose2() {
    $('#Advantages_contens').toggle();
}
function openclose3() {
    $('#Cooperation_contens').toggle();
}
*/

$("#accordion_openclose1").click(async function () {
    $('#mbtiEom_contens').toggle();
})

$("#accordion_openclose2").click(async function () {
    $('#Advantages_contens').toggle();
})

$("#accordion_openclose3").click(async function () {
    $('#Cooperation_contens').toggle();
})