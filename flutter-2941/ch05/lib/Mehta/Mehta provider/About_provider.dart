import 'package:ch05/Mehta/Mehta%20provider/provider_file.dart';
import 'package:flutter/material.dart';

class AboutProvider extends StatefulWidget {
  @override
  _AboutProvider createState() => _AboutProvider();
}

class _AboutProvider extends State<AboutProvider> {
  @override
  Widget build(BuildContext context) {
    final counterProvider = ProviderFile.of(context);
    return Material(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [Text("Home kites!! ${counterProvider?.counter}")],
        ),
      ),
    );
  }
}
