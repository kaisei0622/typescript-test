import './App.css';
import TestComponent from './TestComponent';
import Data from "./data.json"

type USERS = typeof Data;

// 型の勉強
const name: string = "hello";
console.log(name);

let nameChange: string = "hello";
nameChange = "hello2";
console.log(nameChange);

let username: string = "Hello";
let dummyNum: number = 2;
let bool: boolean = true;
console.log(username);
console.log(dummyNum);
console.log(bool);

let array1: boolean[] = [true, false, true];
let array2: (string | number)[] = [0,1, "hello"];
console.log(array1);
console.log(array2);

interface NAME {
  first: string;
  last: string | null;
}

let nameObj: NAME = {
  first: "Yamada",
  last: null
};
console.log(nameObj);

const func1 = (x: number, y: number): number => {
  return x + y;
};
console.log(func1);

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "xxx",
  password: "yyy",
}
console.log(userA);

// Union Types
let value: boolean | number;
value = true;
value = 10;

console.log(value);


let arrayUni: (number | string)[];
arrayUni = [0,1,2, "hello"];
console.log(arrayUni);


let company: "Facebook" | "Google" | "Amazon"
company = "Amazon";
console.log(company);

let memory: 256 | 512;
memory = 512;
console.log(memory);

// typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";
console.log(msg2);

let animal = {cat: "small cat"};
let newAnimal: typeof animal = {cat: "big cat"};
console.log(newAnimal);

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};

let key: keyof KEYS
key = "primary"
console.log(key);

// typeof + keyof

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";
console.log(keySports);

// enum
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number;
  OStype: OS;
}
const PC1: PC = {
  id: 1,
  OStype: OS.Windows,
};
const PC2: PC = {
  id: 2,
  OStype: OS.Mac,
}
console.log(PC1);
console.log(PC2);

// 型の互換性
const comp1 = "test";
let comp2: string = comp1;
console.log(comp2);

let comp3: string = "test";
// let comp4: "test" = comp3;
//エラーになる
console.log(comp3);

let funcComp1 =  (x: number) => {};
let funcComp2 = (x: string) => {};
console.log(funcComp1);
console.log(funcComp2);

// ジェネリクス
interface GEN<T> {
  item: T;
}
const gen0: GEN<string> = { item: "hello"};
console.log(gen0);
// const gen1: GEN = { item: "hello"};
const gen2: GEN<number> = { item: 12};
console.log(gen2);

interface GEN1<T = string> {
  item: T;
}
const gen3: GEN1 = { item: "hello"};
console.log(gen3);

// interface GEN2<T extends string | number> {
//   item: T;
// }

// const gen4: GEN2<boolean> = {
//   item: true
// };
//エラーになる

function funcGen<T>(props: T) {
  return {item: props}
}
const gen6 = funcGen<string>("test");
const gen7 = funcGen<string | null>(null);
console.log(gen6);
console.log(gen7);

function funcGen1<T extends string | null>(props: T) {
  return {value: props};
}
const gen8 = funcGen1("hello");
// const gen9 = funcGen1(123);
//エラーになる
console.log(gen8);

interface Props {
  price: number;
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price };
}
const gen10 = funcGen3({ price: 10});
console.log(gen10);

const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price}
}
console.log(funcGen4);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello"/>
      </header>
    </div>
  );
}

export default App;
