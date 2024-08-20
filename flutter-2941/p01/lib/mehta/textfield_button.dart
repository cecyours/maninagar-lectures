import 'package:flutter/material.dart';

class TextfieldButton extends StatefulWidget{
  @override
  _TextfieldButton createState()=> _TextfieldButton();

}

class _TextfieldButton extends State<TextfieldButton>{
  String? msg;
  void onClick(){
     setState(() {
       msg = controller.text;

     });
  }
  TextEditingController controller = TextEditingController();
  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(title: Text("TextField_Button"),),
      body: Material(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text("$msg"),

              TextField(
                keyboardType: TextInputType.number,
                controller: controller,
                decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  label: Text("Age", style: TextStyle(color: Colors.purpleAccent),),
                  hintText: "Add ur age"
                ),


              ),
              ElevatedButton(onPressed: onClick, child: Text("Click me"))
            ],
          ),
        ),
      ),
    );
  }

}