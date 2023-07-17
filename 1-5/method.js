let person3 = {
    hello: function() { console.log( "こんにちは" ); }
};

person3.hello();

person3.bye = function() { console.log("さようなら") }
person3.bye();

person3.hello = function() { console.log( "hello" ); }
person3.hello();