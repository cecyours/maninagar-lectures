import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class Ch04P03Gridview extends StatefulWidget {
  const Ch04P03Gridview({super.key});

  @override
  Ch04P03GridViewState createState() {
    return Ch04P03GridViewState();
  }
}

class Ch04P03GridViewState extends State<Ch04P03Gridview> {
  late VideoPlayerController _controller;

  @override
  void initState() {
    super.initState();
    _controller = VideoPlayerController.networkUrl(Uri.parse(
        'https://flutter.github.io/assets-for-api-docs/assets/videos/bee.mp4'))
      ..initialize().then((_) {
        // Ensure the first frame is shown after the video is initialized, even before the play button has been pressed.
        setState(() {});
      });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("kites"),
        ),
        body: Material(
            child: Center(
                child: Column(
          children: [
            AspectRatio(
              aspectRatio: _controller.value.aspectRatio,
              child: _controller.value.isInitialized
                  ? VideoPlayer(_controller)
                  : Container(
                      child: Text("waiting...."),
                    ),
            ),
            ElevatedButton(
                onPressed: () {
                  setState(() {
                    _controller.value.isPlaying
                        ? _controller.pause()
                        : _controller.play();
                  });
                },
                child: Icon(_controller.value.isPlaying
                    ? Icons.pause_circle
                    : Icons.play_arrow))
          ],
        ))));
  }
}
