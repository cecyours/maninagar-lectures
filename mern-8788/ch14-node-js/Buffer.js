const buf = Buffer.from("Hello Aryan");
console.log(buf.toString());

const buf2 = Buffer.alloc(6);
buf2.write("Node Js");
console.log(buf2.toString());

const buf3 = Buffer.from([65, 114, 121, 97, 110]); // (ASCII codes)
console.log(buf3.toString());
 