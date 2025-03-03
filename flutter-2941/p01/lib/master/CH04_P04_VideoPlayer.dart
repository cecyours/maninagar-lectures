import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class Ch04P04VideoPlayer extends StatefulWidget {
  const Ch04P04VideoPlayer({super.key});

  @override
  state_ createState() => state_();
}

class state_ extends State<Ch04P04VideoPlayer> {
  late VideoPlayerController _controller;

  @override
  void initState() {
    super.initState();
    _controller = VideoPlayerController.networkUrl(Uri.parse(
        "https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4"))..initialize().then((_){
          setState(() {
          });
    });

    _controller.play();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Master Player"),
      ),
      body: Material(
        child: Center(
          child: _controller.value.isInitialized?

              AspectRatio(aspectRatio: _controller.value.aspectRatio,child: VideoPlayer(_controller),):Text("waiting..."),
        ),
      ),
    );
  }
}
