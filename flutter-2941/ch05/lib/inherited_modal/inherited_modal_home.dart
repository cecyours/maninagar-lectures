import 'package:ch05/inherited_modal/inherited_modal_provider.dart';
import 'package:flutter/material.dart';

class InheritedModalHome extends StatefulWidget {
  @override
  _InheritedModalHome createState() => _InheritedModalHome();
}

class _InheritedModalHome extends State<InheritedModalHome> {

  @override
  Widget build(BuildContext context) {
  String? color = InheritedModalProvider.getColorOne(context);
    return Container(
      child: Text("ColorOne ${color}"),
    );
  }
}
