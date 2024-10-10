import 'package:ch05/inherited_modal/inherited_modal_provider.dart';
import 'package:flutter/material.dart';

class InheritedModalAbout extends StatefulWidget {
  @override
  _InheritedModalAbout createState() => _InheritedModalAbout();
}

class _InheritedModalAbout extends State<InheritedModalAbout> {
  @override
  Widget build(BuildContext context) {
    String? color = InheritedModalProvider.getColorTwo(context);
    return Container(
      child: Text("ColorOne ${color}"),
    );
  }
}
