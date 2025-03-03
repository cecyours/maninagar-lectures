import 'package:ch05/topics/p02_counter.dart';
import 'package:flutter/material.dart';

class P02Screen1 extends StatefulWidget {
  @override
  _P02Screen1 createState() => _P02Screen1();
}

class _P02Screen1 extends State<P02Screen1> {
  @override
  Widget build(BuildContext context) {
    P02Counter ?p02counter = P02Counter.maybeOf(context);
    return Material(
      child: Center(
        child: Column(
            children: [
              Text("hello worldxx 1 ${P02Counter.maybeOf(context)?.dataNotifier.count}"),
              ElevatedButton(onPressed: (){
                if(P02Counter.maybeOf(context)?.dataNotifier!=null)
                  {
                    P02Counter.maybeOf(context)?.dataNotifier.increment();
                    print("Dnev passed");
                  }
                else{
                  print("Dnev failed");
                }
              }, child: Text("Master"))
            ],
        ),
      ),
    );
  }
}
