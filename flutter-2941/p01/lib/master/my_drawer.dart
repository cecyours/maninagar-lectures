import 'package:flutter/material.dart';
import 'package:p01/master/CH04_P09_drawer.dart';
import 'package:p01/master/Screen_01.dart';

import 'Screen_02.dart';

class MyDrawer extends StatefulWidget {
  @override
  _State createState() => _State();
}

class _State extends State<MyDrawer> {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: ListView(
        children: [
          ListTile(
            title: Text("Home"),
            onTap: () {
              Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => Ch04P09Drawer(),
                  ));
            },
          ),
          ListTile(
            title: Text("About"),
            onTap: () {
              Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => Screen01(),
                  ));
            },
          ),
          ListTile(
            title: Text("Info"),
            onTap: () {
              Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => Screen02(),
                  ));
            },
          )
        ],
      ),
    );
  }
}
