import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class ImCollectionProvider extends InheritedModel<String> {
  const ImCollectionProvider({
    Key? key,
    required this.colorA,
    required this.colorB,
    required Widget child,
  }) : super(key: key, child: child);

  final String colorA;
  final String colorB;


  static String? getColorA(BuildContext context){
   return InheritedModel.inheritFrom<ImCollectionProvider>(context, aspect: 'req1')?.colorA;
  }

  static String? getColorB(BuildContext context){
    return InheritedModel.inheritFrom<ImCollectionProvider>(context, aspect: 'req2')?.colorB;
  }
  @override
  bool updateShouldNotify(ImCollectionProvider oldWidget) {
    return oldWidget.colorA != colorA || oldWidget.colorB != colorB;
  }

  @override
  bool updateShouldNotifyDependent(
      ImCollectionProvider oldWidget, Set<String> dependencies) {
    return oldWidget.colorA != colorA && dependencies.contains('req1') ||
        oldWidget.colorB != colorB && dependencies.contains("req2");
  }
}
