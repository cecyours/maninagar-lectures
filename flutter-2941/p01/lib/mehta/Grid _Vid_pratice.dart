import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class GridVid extends StatefulWidget {
  @override
  _GridVid createState() {
    return _GridVid();
  }
}

class _GridVid extends State<GridVid> {
  late VideoPlayerController _controller;

  @override
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
        title: Text('Hmmm...'),
      ),
      body: Material(
        child: GridView.count(
          crossAxisCount: 1,
          children: [
            Container(

              color: Colors.red,
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
                  ],
              ),
            ),
            Container(
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
              ),
            ),
            Container(
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
              ),
            ),
            Container(
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
              ),
            ),
            Container(
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
              ),
            ),
          ],
        ),
      ),
    );
  }
}
