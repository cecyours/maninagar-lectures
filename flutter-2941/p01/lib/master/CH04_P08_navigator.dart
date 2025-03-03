import 'package:flutter/material.dart';
import 'package:p01/master/CH04_P08_navigatorScreen2.dart';

class Ch04P08Navigator extends StatefulWidget {
  @override
  _Ch04P08Navigator createState() => _Ch04P08Navigator();
}

class _Ch04P08Navigator extends State<Ch04P08Navigator> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("hello 1"),
      ),
      body: Material(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Go to Screen 2"),
              ElevatedButton(
                  onPressed: () {
                    Navigator.push(
                        context,
                        MaterialPageRoute(
                            builder: (context) => Ch04P08Navigatorscreen2()));
                  },
                  child: Text("Go"))
            ],
          ),
        ),
      ),
    );
  }
}
