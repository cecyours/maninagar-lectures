import 'package:ch05/Mehta/change_provider_package%20/update_counter.dart';
import 'package:ch05/Mehta/change_provider_package%20/user_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class MainProvider1 extends StatefulWidget {
  const MainProvider1({super.key});

  @override
  State<MainProvider1> createState() => _MainProviderState();
}

class _MainProviderState extends State<MainProvider1> {
  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(create: (context)=> UpdateCounter(), child: Material(
      child: Center(
        child: Column(
          children: [
            UserProvider()

          ],
        ),
      ),
    ),);
  }
}
