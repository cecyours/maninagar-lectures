import 'package:flutter/material.dart';

import 'About_drawer.dart';
import 'Home_drawer.dart';

class DrawerMain extends StatefulWidget {
  @override
  _DrawerMain createState() => _DrawerMain();
}

class _DrawerMain extends State<DrawerMain> {
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
                    builder: (context) => HomeDrawer(),
                  ));
            },
          ),
          ListTile(
            title: Text("About"),
            onTap: () {
              Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => AboutDrawer(),
                  ));
            },
          ),
        ],
      ),
    );
  }
}
