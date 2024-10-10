import 'package:ch05/inherited_widget/inherited_provider.dart';
import 'package:flutter/material.dart';

class InheritedHome extends StatefulWidget{
  @override
  _InheritedHome createState()=> _InheritedHome();
}

class _InheritedHome extends State<InheritedHome>{
  @override
  Widget build(BuildContext context) {
    final countProvide = InheritedProvider.of(context);
    return Material(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Home screen ${countProvide?.count}"),
            ElevatedButton(onPressed: countProvide?.increment, child: Text("+")),
            ElevatedButton(onPressed: countProvide?.decrement, child: Text("-")),

          ],
        ),
      ),
    );
  }

}