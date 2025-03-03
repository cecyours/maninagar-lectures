import 'dart:math';

import 'package:flutter/material.dart';

class home extends StatefulWidget {
  @override
  _home createState() {
    return _home();
  }
}

class _home extends State<home> {
  int _number = 0;

  void getNumber() {
    setState(() {
      _number = Random().nextInt(100);
    });
  }

  void prevNumber() {
    setState(() {
      _number--;
    });
  }

  void nextNumber() {
    setState(() {
      _number++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("kem cho"),
      ),
      body: Material(
        color: Colors.white70,
        child: Padding(
          padding: EdgeInsets.symmetric(vertical: 10, horizontal: 10),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                  SizedBox(
                    width: 15,
                  ),
                  Text(
                    "number is $_number",
                    style: TextStyle(fontSize: 20),
                  ),
                ]),
                TextFormField(
                  obscureText:true,
                  decoration: InputDecoration(
                      suffixIcon: Icon(Icons.password),

                      filled: true,

                      hintText: "Please, use your username",
                      label: Text(
                        "User Name",
                        style: TextStyle(color: Colors.blueAccent),
                      ),
                      border: OutlineInputBorder(borderSide: BorderSide())),
                ),
                TextFormField(
                  decoration: InputDecoration(
                      // label: Text("User Name"),
                      labelText: "Dummer"),
                ),
                SizedBox(height: 30),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SizedBox(
                      width: 15,
                    ),
                    ElevatedButton(onPressed: prevNumber, child: Text("+")),
                    SizedBox(
                      width: 15,
                    ),
                    ElevatedButton(
                      onPressed: getNumber,
                      child: Text(
                        "Random",
                        style: TextStyle(color: Colors.white),
                      ),
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.blueAccent,
                      ),
                    ),
                    SizedBox(
                      width: 15,
                    ),
                    ElevatedButton(onPressed: nextNumber, child: Text("+")),
                  ],
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
