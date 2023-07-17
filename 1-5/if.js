const fruit = "りんご"

if ( fruit ) {
    console.log("フルーツが見つかりました。");
}

if ( fruit == "りんご" ) {
    console.log("りんごが見つかりました。");
}

// 実行されない
if ( fruit == "バナナ" ) {
    console.log("バナナが見つかりました。");
}

if ( fruit == "バナナ" ) {
    console.log("バナナが見つかりました。");
}
else {
    console.log("ばなな以外が見つかりました。")
}