// 함수란 무엇인가ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ
// 클라이언트 -> 서버로 요청 -> 서버의 응답 -> 클라이언트  이런순서라고 생각해보자 이걸 함수로 표현해보자

// 함수 호출과 정의를 명확하게 구분할수 있어야한다 정의는 아직 사용한게 아님 
// 정의 - (밥을 해야해 라고 정의 하는것) - 아직 하라고 명령하진 않음
// 호출 - 실제로 실행을 시키는것이다 

// 스택 이해하기- 밑에칸부터 채워진다 데이터 밑에서 부터 못뺀다 왜냐면 밑에 막혀있기때문에 
//               밑에꺼를 뺴려면 위에꺼를 싹다 빼야한다
//               만약 1.2.3 순서대로 들어가면 3,2.1로 나와야한다
//               화면_출력이 맨 위에 있어야한다 출력을 꺼내서 사용하려면 정의가 되어있어야한다
//               그러려면 출력에대한 정의가 아래 있어야한다 근데 영역을 나눠야함(같은스택으로보면안됨) 정의되는 구간 호출되는구간이 따로있어야함
//               위에서 부터 코드를 읽는다는건 스택을 아래에서부터 쌓는것이다 그럼 위에서 부터 출력이안됨 
//               return은 두가지 가 있다 비어있는 리턴/ 값이 들어있는 리턴
// function 붙어있으면 무조건 정의 // function의 최종목적을 항상 확인하자

클라이언트_화면_출력();// 이라는 함수호출이 시작
// 백엔드_데이터_삽입_요청();
// 이렇게 두개하면 화면출력이 처음 스택에 들어가고 삽입요청이 두번째로 들어가서 출력될때는 삽입요청이 먼저나온다


//html화면이 출력되는것
function 클라이언트_화면_출력() { // 함수 정의
    let a = 10;
    let b = 20;
    let result = a + b; // 3개중에 누가 제일 밑에 깔려있어야하는가 이해하자

    // a 정의
    // a = 10;
    // b 정의
    // b = 20;
    // a + b
    // let result 정의
    // result =  이런구조로 쌓여있어야한다

    let c = 클라이언트_데이터_입력(10);
    console.log(c);
    // 여기서 보내고 싶으면 밑에 &클라이언트_데이터_입력& 함수에 매개변수(공간-데이터)이 필요하다
    // 그럼  10이라는 데이터가 매개변수에 저장돼서 출력된다
    let d = 클라이언트_데이터_입력(20);

    let 요청데이터 = {// 요청데이터라는 객체 만들기
        데이터1: c,
        데이터2: d //두개의 변수(데이터 1,2) 를 하나의 객체(요청데이터)로 묶었다
    };

    // 요청데이터. 점찍으면 안에 저장되어있는 데이터 1,2가뜬다

    const test = () =>  { //익명함수
        return 요청데이터;
    }

    클라이언트_데이터_삽입_요청_버튼_클릭(요청데이터); // 얘실행하면 밑에 버튼클릭 호출하는곳에서 요청데이터를 보내줘야한다 그럼 위에서 요청데이터라는 매개변수 받아야한다
    클라이언트_데이터_삽입_요청_버튼_클릭(test());// 익명함수 로 매개변수에 함수를 넣는 방법 함수안에 함수가
    // 전역 개념 = 지구
    // 지역 개념 = 한국 미국 = 매개변수는 무조건 지역 개념

}

// Input이라고 생각
function 클라이언트_데이터_입력(데이터) {// 입력을 받을수있게끔 정의를 한것 // 매개변수는 메뉴라고생각하자
    // 무엇을만들어라고 정의하고 그 정의를 매개변수에 넣어서 메뉴를 알려주고 조리를 해서 리턴해준다
    // 만약 함수가 두번 호출되면 메모리가 2개가 생긴다 
    // console.log(데이터); // 이렇게하면 매개변수에 10이 들어오고 콘솔 찍히고 다시 20으로 돌아가서 20이 매개변수 들어오고 콘솔찍힌다
     return 10;// 10이라는 함수를 값으로 반환한다 그럼 함수가 값이 된다 그럼 클라이언트_데이터_입력(10); 를 단순히 10이라는 값으로 사용가능 그게 c로 대입이 된다
    //리턴이 있으면 함수 자체가 값이 된다

}

function 클라이언트_데이터_삽입_요청_버튼_클릭(요청데이터) {
    백엔드_데이터_삽입_요청(요청데이터); //클라이언트_데이터_삽입_요청_버튼_클릭 실행되면 백엔드 삽입요청이 날라갈거다 
    //
}

function 백엔드_데이터_삽입_요청(요청데이터) {
    console.log(요청데이터);
    console.log("요청");

}