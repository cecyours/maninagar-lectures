import 'package:flutter/material.dart';

class ScreenNav03 extends StatefulWidget{
  @override
  _ScreenNav03 createState()=>    _ScreenNav03();

}

class _ScreenNav03 extends State<ScreenNav03>{
  @override
  Widget build(BuildContext context) {
    return Material(
      child: Column(
        children: [
          Container(
            width: 200,
            height: 200,
            child: CircleAvatar(
              child: Text(""),
              backgroundImage: NetworkImage("https://devs.bikabi.in/image-12.jpg"),
            ),
          ),
          SizedBox(height: 20,),

          Row(
            children: [
              Icon(Icons.person),
              Text("@Hidenberg"),
            ],
          ),
          SizedBox(height: 20,),
          Row(
            children: [
              Icon(Icons.phone),
              Text("9689423617"),
            ],
          ),
          SizedBox(height: 20,),

          Row(
            children: [
              Icon(Icons.email),
              Text("Abc@gmail.com"),
            ],
          ),
          SizedBox(height: 20,),

          Row(
            children: [
              Icon(Icons.cast_for_education),
              Text("12th pass,"
                  "BCA 2 year"),
            ],
          ),



        ],
      )
    );
  }

}