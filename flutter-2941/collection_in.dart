void main() {
  // var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  // // assert(list[2]==29);

  // print(list);

  var list = <String>[];

  list.add("Thor");
  list.add("Marvel");
  list.add("Enternal");
  list.add("Thor");
  list.remove("Thor");

  var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  var x = data.any((d) => d % 2 == 0);

  var d = data.map((d) => d + 4);

  var k = data.where((d) => d % 2 == 0);

  var lwr = list.map((name)=>name.toLowerCase());

  
  print(x);
  print(d);
  print(k);
  print(data);
  print(lwr);
}
