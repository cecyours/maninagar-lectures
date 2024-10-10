


import 'package:ch05/topics/P06/admin_component.dart';
import 'package:ch05/topics/P06/provider_counter.dart';
import 'package:ch05/topics/P06/user_component.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class ProviderMainScreen extends StatefulWidget {
  const ProviderMainScreen({super.key});

  @override
  State<ProviderMainScreen> createState() => _ProviderMainScreenState();
}

class _ProviderMainScreenState extends State<ProviderMainScreen> {

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(create: (context)=>ProviderCounter(),child: Material(
      child: Center(
        child: Column(
        children: [
          Text("Hello World"),
          UserComponent(),
          AdminComponent()
        ],
        ),
      ),
    ),);
  }
}
