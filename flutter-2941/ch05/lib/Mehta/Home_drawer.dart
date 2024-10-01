import 'package:flutter/material.dart';

import 'Drawer_main.dart';

class HomeDrawer extends StatefulWidget {
  @override
  _HomeDrawer createState() => _HomeDrawer();
}

class _HomeDrawer extends State<HomeDrawer> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      drawer: DrawerMain(),
      body: Center(
        child: Text("Home"),
      ),
    );
  }
}
