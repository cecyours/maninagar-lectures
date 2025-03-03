import 'package:ch05/inherited_widget/inherited_provider.dart';
import 'package:flutter/material.dart';

class InheritedAbout extends StatefulWidget {
  @override
  _InheritedAbout createState() => _InheritedAbout();
}

class _InheritedAbout extends State<InheritedAbout> {
  @override
  Widget build(BuildContext context) {
    final countprovider = InheritedProvider.of(context);
    return Material(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [Text("hello ${countprovider?.count}")],
        ),
      ),
    );
  }
}
