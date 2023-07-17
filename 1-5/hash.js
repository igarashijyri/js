// ドット記法
// プロパティを変数で指定することはできず、プロパティ名を直接指定しないとアクセスできない
// 意図しない属性へのアクセスは避けれるというメリットはあるかも。

let person = {
    name: { first: "太郎", last: "独習" },
    age: 18
};

console.log( person.age );
console.log( person.name.last );


person.name.last = "次郎";
person.gender = "男";
person.familiy = { wife: "花子", child: "三郎" };

console.log( person.familiy.wife );
console.log( person);


// ブラケット記法
// プロパティに対して変数でアクセスすることができる。
// 明示的なアクセスのみで問題ない場合は使わない方が良いと思われる。

let person2 = {
    name: { first: "太郎", last: "独習" },
    age: 18
};

console.log( person2["age"] );

person2["name"]["last"] = "次郎";
person2["gender"] = "男";
person2["familiy"] = { wife: "花子", child: "三郎" };

console.log( person2["familiy"]["wife"] );
console.log( person2 );


// 変数使用

const members = {
    member1: "太郎",
    member2: "次郎"
};

const keyBase = "member";

console.log( members[ keyBase + "1" ] );
console.log( members[ keyBase + "2" ] );