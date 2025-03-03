import 'package:flutter/material.dart';

class Pratice extends StatefulWidget {
  @override
  _Pratice createState() {
    return _Pratice();
  }
}

class _Pratice extends State<Pratice> {
  void fun() {}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("yo"),
      ),
      body: Material(
        child: Center(
          child: Padding(
            padding: EdgeInsets.symmetric(vertical: 30,horizontal: 30),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("C"),),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("/")),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("X")),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("c")),
                  ],
                ),
                SizedBox(height: 10,)
              ,
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("7"),),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("8")),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("9")),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("-")),
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("4"),),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("5")),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("6")),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("+")),
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("1"),),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("2")),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("3")),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("=")),
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("%"),),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("0")),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text(".")),
                    SizedBox(
                      width: 10,
                    ),
                    ElevatedButton(onPressed: fun, child: Text("C"),),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
