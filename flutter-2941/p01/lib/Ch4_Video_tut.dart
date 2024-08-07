import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class Tuti extends StatefulWidget {
  const Tuti({super.key});

  @override
  tut createState() {
    return tut();
  }
}

class tut extends State<Tuti> {
  late VideoPlayerController _contollerchobhai;

  @override
  void initState() {
    super.initState();
    _contollerchobhai = VideoPlayerController.networkUrl(Uri.parse(
        'https://agriworld.bikabi.in/video.mp4'))
      ..initialize().then((_) {
        setState(() {});
      });
  }

  @override
  Widget build(BuildContext context) {
    // TODO: implement build

    return Scaffold(
      appBar: AppBar(
        title: Text("Hello world .."),
      ),
      body: Material(
        child: Center(
          child: Column(
            children: [
              AspectRatio(
                aspectRatio: _contollerchobhai.value.aspectRatio,
                child: _contollerchobhai.value.isInitialized
                    ? VideoPlayer(_contollerchobhai)
                    : Container(
                        child: Text('Raha jovu...'),
                      ),
              ),
              ElevatedButton(
                  onPressed: () {
                    setState(() {
                      _contollerchobhai.value.isPlaying
                          ? _contollerchobhai.pause()
                          : _contollerchobhai.play();
                    });
                  },
                  child: Icon(_contollerchobhai.value.isPlaying
                      ? Icons.pause_circle
                      : Icons.play_arrow))
            ],
          ),
        ),
      ),
    );
  }
}
