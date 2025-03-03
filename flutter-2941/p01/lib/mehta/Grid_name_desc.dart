import 'package:flutter/material.dart';


class GridNameDesc extends StatefulWidget {
  const GridNameDesc({super.key});
  @override
  _GridNameDesc createState() => _GridNameDesc();
}


class Student {
   String name;
   int id;

  // Student(String name, int id)
  // {
  //   this.name = name;
  //   this.id = id;
  // }
  Student({required this.name,required this.id});
}
class _GridNameDesc extends State<GridNameDesc> {
 List <Student>st = <Student>[];

 @override
  void initState() {
    // TODO: implement initState
    super.initState();

    setState(() {
      st.add(Student(name: "Master", id: 299));
      // st.add(Student(name: "Master", id: 299));
      // st.add(Student(name: "Master", id: 299));
      // st.add(Student(name: "Master", id: 299));

      print(" maste : ${st[0].id}");
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("yo...."),
      ),
      body: Material(

        child: GridView.builder(
          itemCount: st.length,
            gridDelegate:
            SliverGridDelegateWithMaxCrossAxisExtent(maxCrossAxisExtent: 100)
          , itemBuilder: (context, index) {

              return Text("${st[0].name}" );
            }, ),
      ),
    );
  }
}
