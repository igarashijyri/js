// 関数宣言
function sum( val1, val2 ) {
    return val1 + val2;
}

// 関数実行
let sum_result = sum( 10, 20 );
console.log( sum_result );


// return
// NOTE: 明示的にreturnを設定しないと何も値が返らない
// returnに値を設定しない場合はundefindが返る

function printSum( a, b ) {
    // 数値型以外が引数に渡された場合に処理を終了する
    if( typeof a !== "number" || typeof b !== "number" ) {
        console.log( "引数が不正なデータ型のため処理を終了します。" )

        return;
    }

    console.log( a + b );
}

// 文字列を渡す
let result = printSum( "10", "20");
console.log( result ); // undefined

// 数値を渡した場合
printSum( 10, 20 );


// 関数式
const minus = function ( val1, val2 ) {
    return val1 - val2;
}

let m_result = minus( 10, 5 );
console.log( m_result )