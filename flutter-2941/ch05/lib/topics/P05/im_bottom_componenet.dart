
import 'package:ch05/topics/P05/im_collection_provider.dart';
import 'package:flutter/material.dart';

class ImBottomComponenet extends StatefulWidget{
  @override
  _Screen createState() => _Screen();
}


class _Screen extends State<ImBottomComponenet> {
  @override
  Widget build(BuildContext context) {
    String? color = ImCollectionProvider.getColorB(context);
    return Container(
      child: Text("Upper World ${color}"),
    );
  }
}