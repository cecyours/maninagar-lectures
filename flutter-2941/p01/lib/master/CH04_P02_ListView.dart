import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Ch04P02Listview extends StatefulWidget {
  @override
  ScreenState createState() => ScreenState();
}

class ScreenState extends State<Ch04P02Listview> {
  List<String> name = <String>["Master", "denver", "Jorge"];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("List View"),
      ),
      body: Material(
          child:Padding(
            padding: EdgeInsets.all(10),
            child:  ListView.builder(
              itemCount: name.length,
              itemBuilder: (context, index) {
                return Container(
                  child: ElevatedButton(onPressed: () => {},child: Text("${name[index]}"),),
                );
              },
            ),
          )
      ),
    );
  }
}
