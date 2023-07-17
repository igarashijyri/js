try {
    noxExistingFunction();
    console.log( "例外が発生しているのでこのログは実行されない" );

// NOTE: 例外識別子は指定できる?
} catch (error) {
    console.error( "noxExistingFunctionは存在しないため例外が発生しました。" );
    console.error( "エラータイプ:" + error.name );
    console.error( "エラーメッセージ:" + error.message );

} finally {
    console.log("例外の発生有無に関わらず必ず行われる処理");
}

console.log( "例外処理を行ったので後続のコードが実行される" );


try {
    // 数値に対してtoUpperCaseを呼び出した
    const num = 1;
    num.toUpperCase(); // TypeError

    // 存在しない変数val2を参照
    // TypeErrorが発生した時点でこいつは実行されない
    let val1 = val2 + 1;

} catch( error ) {
    // refector: 例外の種類に応じて処理を分岐しているが、そもそもキャッチするエラーを明示的に指定したい
    // 予期しないエラーまでキャッチするのが怖い
    if ( error instanceof TypeError ) {
        console.log( "TypeErrorが発生したときの処理" );
    } else if( error instanceof ReferenceError ) {
        console.log( "ReferenceErrorが発生したときの処理" );
    }
}