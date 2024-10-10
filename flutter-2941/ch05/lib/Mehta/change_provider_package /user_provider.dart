import 'package:ch05/Mehta/change_provider_package%20/update_counter.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class UserProvider extends StatefulWidget {
  const UserProvider({super.key});

  @override
  State<UserProvider> createState() => _UserProviderState();
}

class _UserProviderState extends State<UserProvider> {
  @override
  Widget build(BuildContext context) {
    final counter = Provider.of<UpdateCounter>(context);
    return Column(
      children: [
        Text("Counter is ${counter.update}"),
        ElevatedButton(onPressed: counter.increment, child: Text(" + "))
      ],
    );
  }
}
