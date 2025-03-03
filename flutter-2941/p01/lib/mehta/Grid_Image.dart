import 'package:flutter/material.dart';

class GridImage extends StatefulWidget {
  @override
  _GridImage createState() {
    return _GridImage();
  }
}

class _GridImage extends State<GridImage> {

  int i=0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('App'),
      ),
      body: Material(
        child: Center(
          child: GridView.builder(
              itemCount: 50,
              gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                  maxCrossAxisExtent: 300,
                  mainAxisSpacing: 10,
                  crossAxisSpacing: 10),
              itemBuilder: (context, index) {
                return GestureDetector(
                    onTap: () {
                      setState(() {
                        i=index;
                      });
                    },
                    child: Container(
                        decoration: BoxDecoration(
                            shape: BoxShape.circle, color: i==index?Colors.white70:Colors.purpleAccent),
                        child: Padding(
                          padding: EdgeInsets.all(10),
                          child: CircleAvatar(
                            child: Text(
                              "Yoo",
                              style: TextStyle(color: Colors.white70),
                            ),
                            backgroundImage: NetworkImage(
                                "https://devs.bikabi.in/image-${index + 2}.jpg"),
                          ),
                        )));
              }),
        ),
      ),
    );
  }
}
