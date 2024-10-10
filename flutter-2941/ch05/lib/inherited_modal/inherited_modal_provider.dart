import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class InheritedModalProvider extends InheritedModel<String> {
  const InheritedModalProvider({
    Key? k,
    required this.ColorOne,
    required this.ColorTwo,
    required Widget child,
  }) : super(key: k, child: child);
  final String ColorOne;
  final String ColorTwo;

  static String? getColorOne(BuildContext context) {
    return InheritedModel.inheritFrom<InheritedModalProvider>(context,
            aspect: "ColorOne")
        ?.ColorOne;
  }

  static String? getColorTwo(BuildContext context) {
    return InheritedModel.inheritFrom<InheritedModalProvider>(context,
            aspect: "ColorTwo")
        ?.ColorTwo;
  }

  @override
  bool updateShouldNotify(InheritedModalProvider oldWidget) {
    return oldWidget.ColorOne != ColorOne || oldWidget.ColorTwo != ColorTwo;
  }

  @override
  bool updateShouldNotifyDependent(
      InheritedModalProvider oldWidget, Set<String> dependencies) {
    return oldWidget.ColorOne != ColorOne &&
            dependencies.contains("ColorOne") ||
        oldWidget.ColorTwo != ColorTwo && dependencies.contains("ColorTwo");
  }
}
