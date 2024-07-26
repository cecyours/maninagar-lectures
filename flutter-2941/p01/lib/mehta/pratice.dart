import 'dart:math';

import 'package:flutter/material.dart';

class Pratice extends StatefulWidget {
  @override
  _Pratice createState() {

    return _Pratice();

   }
}

class _Pratice extends State<Pratice> {
  int number_ = 0;


  void getNumber() {
    setState(() {
      number_ = Random().nextInt(1000);
    });
  }


  void prevNumber() {
    setState(() {
      number_--;
    });
  }

  void addNumber(){
    setState(() {
      number_++;
    });
  }



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("App by maulesh"),

      ),
      body: Material(
        color: Colors.deepPurpleAccent,
        child: Padding(
          padding: EdgeInsets.symmetric(vertical: 15, horizontal: 20),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(onPressed: getNumber, child: Text("Random number"),),
                ElevatedButton(onPressed: prevNumber, child: Text("-"),),
                ElevatedButton(onPressed: addNumber, child: Text("+"),),
                Text("number is $number_"),
                SizedBox(height: 20,),
                TextFormField(
                  decoration: InputDecoration(
                    label:Text("User Name",style: TextStyle(color: Colors.white),),
                    border: OutlineInputBorder(borderSide: BorderSide()),

                  ),
                ),
                SizedBox(height: 20,),

            TextFormField(
              obscureText: true,
              decoration: InputDecoration(
                label:Text("Password",style: TextStyle(color: Colors.white),),
                border: OutlineInputBorder(borderSide: BorderSide()),

              ),
            ),
              ],
            ),
          ),
        ),
      ),
    );
  }

}
