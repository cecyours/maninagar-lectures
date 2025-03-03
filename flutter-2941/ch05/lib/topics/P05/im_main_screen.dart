
import 'package:ch05/topics/P05/im_bottom_componenet.dart';
import 'package:ch05/topics/P05/im_collection_provider.dart';
import 'package:ch05/topics/P05/im_upper_component.dart';
import 'package:flutter/material.dart';

class ImMainScreen extends StatefulWidget{
  @override
  _Screen createState() => _Screen();
}

class _Screen extends State<ImMainScreen>{

  String colorA = "red";
  String colorB ="blue";

  @override
  Widget build(BuildContext context) {


    return Scaffold(

      body: Material(
        child: ImCollectionProvider(colorA: colorA, colorB: colorB, child:  Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [ ImUpperComponent(), ImBottomComponenet(),
              Container()
            ],
          ),
        )
        ),
      ),
    );

  }

}