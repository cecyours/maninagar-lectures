import 'dart:core';
import 'package:flutter/material.dart';

class GridUserVid extends StatefulWidget {
  const GridUserVid({super.key});

  @override
  _GridUserVid createState() => _GridUserVid();
}

class Student {
  late String name;
  late int id;

  // Student(String name, int id) {
  //   this.name = name;
  //   this.id = id;
  // }

  Student({required id, required name});
}

class _GridUserVid extends State<GridUserVid> {
  List studentList = <Student>[];

  @override
  void initState() {
    super.initState();
    studentList.add(Student(id: "392", name: "Heena"));
    studentList.add(Student(id: "581", name: "Kites"));
    studentList.add(Student(id: "392", name: "Pappu"));
    studentList.add(Student(id: "192", name: "Rahul"));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Reel Feed... xx'),
      ),
      body: Material(
        child: Center(
            child: GridView.builder(
          itemCount: 30,
          gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
              maxCrossAxisExtent: 50,
              mainAxisSpacing: 10,
              crossAxisSpacing: 10),
          itemBuilder: (context, index) {
            return Container(
                decoration:
                    BoxDecoration(shape: BoxShape.circle, color: Colors.blue),
                child: Padding(
                  padding: EdgeInsets.all(5),
                  child: CircleAvatar(
                    child: Text("Master",style: TextStyle(color: Colors.white),),
                    backgroundImage: NetworkImage(
                        "https://devs.bikabi.in/image-${index + 1}.jpg"),
                  ),
                )
                // Center(
                //   child: Image.network("https://devs.bikabi.in/image-${index+1}.jpg",fit: BoxFit.contain,),
                // ),
                );
          },
        )),
      ),
    );
  }
}
