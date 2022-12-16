//  다형성을 위해 제네릭 사용
type Superf = {
    // (arr: (number|boolean)[]):void
    (arr: any[]):void
}

const Superf: Superf = (arr) => {
    arr.forEach(i=> console.log(i))     
}

Superf([1,2,3,4])
Superf([true, false])
Superf([1,"ss",true])

// call signature 제네릭을 사용하여 배열이나 받는 값을 그대로 뱉어주는 것

// type SuperPrint = <T, V>(a: T[], b:V) => T
// const SuperPrint: SuperPrint = (a) => a[0];

//funtion 으로 쓰면 아래와 같이 대체 가능
function SuperPrint<V, T>(a: V[], b:T) {
    return a[0]
}



const a = SuperPrint([1,2,3,4])
//call signature을 type SuperPrint = <T, V>(a: T[], b:V) => T 두가지 인자로 받았기 때문에 하나만 들어가서 오류가 나는 것

const b = SuperPrint([true, false, true, false], 3)
const c = SuperPrint(["a","b","c"], 3)
const d = SuperPrint([1,2,true,"hello"], [1.2])

type Player<E> = {
    name: String
    extraInfo: E
}

type NicoExtra = {
    favFood:string,
}
type NicoPlayer = Player<NicoExtra>

// 위와 아래는 같은 기능을 한다.

const nico: Player<{favFood: String}> ={
    name:"nico",
    extraInfo : {
        favFood :"kimchi"
    }
}

const lynn: Player<null> = {
    name :"lynn",
    extraInfo :null
}

//extrainfo 부분에 제네릭을 선언해줌으로써 위와 같이 다른 타입을 선언해주어 같은 Player 라는 객체를 사용해도 다른 형식으로 선언해줄 수 있다.

// type A = Array<number>

// let a:A = [1,2,3,4]

function parintAllnumbers(arr: Array<number>) {

}