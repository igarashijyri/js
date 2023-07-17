// for(初期化処理; ループ継続の条件式; ループの最後に実行される処理)
// NOTE: index++で1ずつインクリメント

const numArray = [ 10, 20, 30 ];
for(let index = 0; index < numArray.length; index++) {
    numArray[ index ] = numArray[ index ] + 10;
}

console.log( numArray );

// practice: 畳込み演算
const sArray = [ 10, 20, 23, 47 ];
let result = 0;
for(let i = 0; i < sArray.length; i++) {
    result +=  sArray[ i ];
}

console.log( result );


// for...in
const fruits = { apple: "りんご", banana: "バナナ", orange: "オレンジ" };

// NOTE: 文字列の中で変数展開をしたい場合はバッククォートでくくる
// for in は渡される要素の順番が担保されていないことに注意
for( const key in fruits ) {
    console.log(`キー[${key}] 値:$[fruits[key]]`);
}


// for...of


// array
const fruits2 = [ "りんご", "バナナ", "オレンジ" ];

for( const value of fruits2 ) {
    console.log( value );
}

// hash
const map = new Map;
map.set( "apple",  "りんご" );
map.set( "banana",  "ばなな" );

for( const row of map) {
    // 配列の0番目にkey, 1番目にval
    console.log( row[0], row[1] );
}