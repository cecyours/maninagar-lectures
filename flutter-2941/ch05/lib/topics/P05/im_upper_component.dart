
import 'package:ch05/topics/P05/im_collection_provider.dart';
import 'package:flutter/material.dart';

class ImUpperComponent extends StatefulWidget{
  @override
  _Screen createState() => _Screen();
}

class _Screen extends State<ImUpperComponent>{
  @override
  Widget build(BuildContext context) {
    String? color = ImCollectionProvider.getColorA(context);
    return Container(
      child: Text("Upper World ${color}"),
    );

  }

}