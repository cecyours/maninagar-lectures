
import 'package:ch05/topics/P06/provider_counter.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';


class UserComponent extends StatefulWidget {
  const UserComponent({super.key});

  @override
  State<UserComponent> createState() => _UserComponentState();
}

class _UserComponentState extends State<UserComponent> {
  @override
  Widget build(BuildContext context) {
    final counter = Provider.of<ProviderCounter>(context);
    return Container(
      child: Column(
        children: [
          Text("Current Counter : ${counter.count}"),
          ElevatedButton(onPressed: counter.increment, child:Text("Click me") )
        ],
      ),
    );
  }
}
