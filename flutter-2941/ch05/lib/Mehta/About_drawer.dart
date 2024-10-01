import 'package:flutter/material.dart';

import 'Drawer_main.dart';

class AboutDrawer extends StatefulWidget {
  @override
  _AboutDrawer createState() => _AboutDrawer();
}

class _AboutDrawer extends State<AboutDrawer> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      drawer: DrawerMain(),
      body: Center(
        child: Text("About"),
      ),
    );
  }
}
