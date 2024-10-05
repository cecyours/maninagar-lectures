import 'package:ch05/Mehta/Mehta%20provider/About_provider.dart';
import 'package:ch05/Mehta/Mehta%20provider/home_provider.dart';
import 'package:ch05/Mehta/Mehta%20provider/provider_file.dart';
import 'package:flutter/material.dart';



class MainProvider extends StatefulWidget {
  @override
  _MainProvider createState() => _MainProvider();
}

class _MainProvider extends State<MainProvider> {
  int index = 0;
  int counter = 0;
  List<Widget> picture = <Widget>[HomeProvider(), AboutProvider()];

  void increment() {
    setState(() {
      counter++;
    });
  }

  void decrement() {
    setState(() {
      counter--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ProviderFile(
        counter: counter,
        increment: increment,
        decrement: decrement,
        childpass: Scaffold(
          appBar: AppBar(
            title: Text("Main Screen"),
          ),
          body: picture[index],
          bottomNavigationBar: BottomNavigationBar(
            onTap: (int e) {
              setState(() {
                index = e;
              });
            },
            currentIndex: index,
            items: [
              BottomNavigationBarItem(
                  backgroundColor: Colors.orange,
                  icon: Icon(Icons.home),
                  label: "Home"),
              BottomNavigationBarItem(
                  backgroundColor: Colors.orange,
                  icon: Icon(Icons.info),
                  label: "About"),
            ],
          ),
        ));
  }
}
