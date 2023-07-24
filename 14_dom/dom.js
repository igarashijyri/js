// textの書き換え
const testEl = document.querySelector( "#test" );
// console.log( `innerHTML: ${ testEl.innerHTML }` );

setTimeout( () => {
    testEl.innerHTML = "<h1>Good World</h1>";
}, 2000 );


// フォームの取得
const input = document.querySelector( "input" );
// console.log( input.value );

setTimeout( () => {
input.value = "入力欄の値を変更";
}, 3000 );


// フォームの作成
// できればclassとかも指定したい
const newDiv = document.createElement( "div" );
newDiv.textContent = "new World";
document.body.prepend( newDiv ); // <body>に挿入


//　複雑なHTML構造のElementを作成

// ベースとなる文字列
const htmlStr = `
    <article id="article">
        <h1 id="article-title">記事のタイトル</H1>
        <div class="tag-area">
            <span>タグ：</span><span>スポーツ</span><span>バスケ</span>
        </div>
        <div class="article-body">記事の本文</div>
        <div id="recommend">
            <h2>おすすめの記事</h2>
            <a href="#">他の記事<a>
        </div>
    </article>
`;

// HTML文字列をElementオブジェクトに変換する関数
function htmlStrToElement( htmlStr ) {
    const dummyDiv = document.createElement( "div" );
    dummyDiv.innerHTML = htmlStr;          // HTML文字列をElementに変換
    return dummyDiv.firstElementChild;
}

//HTML文字列からElementオブジェクトを取得し、bodyに追加
const targetNewElement = htmlStrToElement( htmlStr );
document.body.prepend( targetNewElement );