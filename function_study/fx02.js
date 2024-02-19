응답데이터_뿌려주기();// 호출해야행


function 응답데이터_뿌려주기() {
    const responseData = { // 객체안에 title dataList들어있다
        title: "응답데이터",
        dataList: [
            {
                name: "김준일",
                age: 31
            },
            {
                name: "김준이",
                age: 32
            },
            {
                name: "김준삼",
                age: 33
            }
        ]

    };

    // 타이틀_컴포넌트(responseData.title);//호출할떄 매개변수로 타이틀이 들어와야한다 근데 타이틀만 필요하다
    // responseData 안에 title호출해준다
    console.log(타이틀_컴포넌트(responseData.title));// 이렇게 바로 호출가능
    //매개변수 통로라고 생각하자

    for( let i = 0 ; i < responseData.dataList.length; i++) {
        console.log(테이블_TR_TD_컴포넌트(responseData.dataList[i]));// 이렇게하면 3번 반복해서 아래쪽에서 3번할필요없다
    }
    // 테이블_TR_TD_컴포넌트(responseData.dataList[0]);//   {name: "김준일",  age: 31 하나의 객체가 들어있다  
    // 테이블_TR_TD_컴포넌트(responseData.dataList[1]);
    // 테이블_TR_TD_컴포넌트(responseData.dataList[2]);// 근데 반복된다 그러니까 for문 쓰자

    for(let 학생 of responseData.dataList) {
        console.log(테이블_TR_TD_컴포넌트(학생));// 3개다 같은 코드
    }

    // 비구조 할당
    const 학생 = responseData.dataList[0];
    const 학생들 = responseData.dataList;
    const 타이틀 = responseData.title;

    const{title, dataList} = responseData;// 비구조할당으로 한줄로 줄인거
     // 비구조할당 특징 이름 가져오는게아니라 responseData 안에있는 실제 데이터 이름
     
     //const 학생 = dataList[0]; 이걸 아래로 바꿀수 있다
     const {name, age} = dataList[0];

     for(let 학생 of dataList) {// dataList 에서 그냥 하나 씩 꺼낸다 학생은 임의로 정해서 학생에 저장한다는 뜻
        console.log(테이블_TR_TD_컴포넌트(학생, title));
     }

}

function 타이틀_컴포넌트(타이틀) { //매개변수는 받는다고 표현한다 표현을 잘 보자
    return `
        <h1>${타이틀}</h1>
    `;

}

// function 테이블_TR_TD_컴포넌트(학생) {// 비구조 할당으로 바꾸면 학생. 찍을필요없다 아래처럼
//     return `
//         <tr>
//             <td>${학생.name}</td>
//             <td>${학생.age}</td>
//         </tr>

//     `;
// }

function 테이블_TR_TD_컴포넌트({name, age}, title) {// 비구조 할당 처음엔 객체가 들어와야
    console.log(title);

    return `
        <tr>
            <td>${name}</td>
            <td>${age}</td>
        </tr>

    `;
}

// 비구조할당 - 객체를 풀어서 쓰는것

const user = {
    username: "aaa",
    password: "1234",
    name: "김준일"
}

// const username = user.username; //원래 이렇게 하나씩 가져와야한다
// const password = user.password;

// const{ username, password, name} = user; // 이렇게 풀어쓴다 필요한것만 가지고올수있느 갯수 정할수있다
const{ username } = user;// 이렇게 하나만 가지고 오기도 된다

