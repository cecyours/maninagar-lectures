import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class Ch04P06Textfield extends StatefulWidget {
  @override
  _Ch04P06TextField createState() => _Ch04P06TextField();
}

class _Ch04P06TextField extends State<Ch04P06Textfield> {
  String msg = "";
  TextEditingController controller = TextEditingController();

  void handleAgeClick() {
    setState(() {
      msg = controller.text;

    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Hello Text Field"),
      ),
      body: Material(
        child: Padding(
          padding: EdgeInsets.all(20),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text("$msg"),
                TextField(
                  controller: controller,
                  keyboardType: TextInputType.number,
                  // inputFormatters: <TextInputFormatter>[FilteringTextInputFormatter.digitsOnly],
                  decoration: InputDecoration(
                      border: OutlineInputBorder(),
                      hintText: "please Enter your age !!",
                      // labelText: "Age",
                      // labelStyle: TextStyle(color: Colors.red),
                      label: Text(
                        "Age",
                        style: TextStyle(color: Colors.blue),
                      )),
                ),
                ElevatedButton(
                    onPressed: handleAgeClick, child: Text("Get Age"))
              ],
            ),
          ),
        ),
      ),
    );
  }
}
