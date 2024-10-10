

import 'package:ch05/topics/P06/provider_counter.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
class AdminComponent extends StatefulWidget {
  const AdminComponent({super.key});

  @override
  State<AdminComponent> createState() => _AdminComponentState();
}

class _AdminComponentState extends State<AdminComponent> {
  @override
  @override
  Widget build(BuildContext context) {
    final counter = Provider.of<ProviderCounter>(context);
    return Container(
      child: Column(
        children: [
          Text("IN Admin : ${counter.count}"),
        ],
      ),
    );
  }
}

