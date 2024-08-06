import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
class Ch04P03Gridview extends StatefulWidget {
  @override
  Ch04P03GridViewState createState() {
    return Ch04P03GridViewState();
  }
}

class Ch04P03GridViewState extends State<Ch04P03Gridview> {
  
  late VideoPlayerController _controller = VideoPlayerController.networkUrl(Uri.parse("https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4"));
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("kites"),
      ),
      body: Material(
        child: GridView.count(
            crossAxisCount: 2,
            crossAxisSpacing: 10,
            mainAxisSpacing: 10,
            childAspectRatio: 1,
            children: [
              Image.network(
                  "https://picsum.photos/200"),
              Image.network(
                  "https://picsum.photos/200"),


              Container(
                color: Colors.yellow,
              ),
              Container(
                color: Colors.green,
              )
            ]),
      ),
    );
  }
}
