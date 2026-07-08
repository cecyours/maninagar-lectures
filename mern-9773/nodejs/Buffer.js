const buf = Buffer.from("Hello Dhaval");
console.log(buf);

console.log(buf.toString());

const buf2 = Buffer.alloc(2);
buf2.write("node jssss");

console.log(buf2);
console.log(buf2.toString());

const buf3 = Buffer.from([68, 104, 97, 118, 97, 108]);
console.log(buf3.toString());