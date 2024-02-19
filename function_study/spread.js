
//스프레드 알아보기
const slime = {
    neam: "슬라임"
}

const cuteSlime = {
    name: "슬라임",
    attribute: "cute"
}

const purpleCuteSlime = {
    ...cuteSlime,//객체 안에들어있는 값들을 가지고 오는거다 객체를 가지고오는게 아님
    color: "purple",
    name: "slime"// 그래서 슬라임에서 -> slime으로 바뀐다
}
console.log(purpleCuteSlime);

// 배열 spread

const nums = [1,2,3,4,5];
const nums2 = [...nums, 6,7,8,9,10];// 배열 요소를 다 들고온다

const nums3 = [...nums2.filter(n => n % 2 === 0), 11, 12, 13, 14, 15];// 10까지는 짝수만 11부터 15까지 다 출력


const users = [
    {
        id: 1,
        nmae: "김준일"
    },
    {
        id: 2,
        nmae: "김준이"
    },
    {
        id: 3,
        nmae: "김준삼"
    },
    {
        id: 4,
        nmae: "김준사"
    }
];

const evenUsers = [...users.filter(user => user.id % 2 === 0),{ id: 5, name:"김준오"}];// 추가도 가능
console.log(evenUsers);