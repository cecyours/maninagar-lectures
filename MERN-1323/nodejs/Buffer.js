const buf = Buffer.from("Hello Rosewin");
console.log(buf);

console.log(buf.toString());

const buf2 = Buffer.alloc(2);
buf2.write("node jssss");

console.log(buf2);
console.log(buf2.toString());

const buf3 = Buffer.from([82, 111, 115, 101, 119, 105, 110]);
console.log(buf3.toString());