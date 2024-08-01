class Review {
  String? person;
  double? rating;
  String? comment;

  Review(String person, double rating, String comment) {
    this.person = person;
    this.comment = comment;
    this.rating = rating;
  }
}

class Movie {
  String? movieName;
  List review = <Review>[];
  double _avg_rating = 0;

  Movie(String movieName) {
    this.movieName = movieName;
  }

  double getAvgRating() {
    double r = 0;

    for (var i = 0; i < review.length; i++) {
      r += review[i].rating;
    }

    _avg_rating = r/review.length;

    return _avg_rating;
  }
}

void main() {
  Movie m = Movie("Master");

  m.review.add(Review("Maulesh", 7.4, "Nice movie bro"));
  m.review.add(Review("Gk", 8.6, "Great job dude"));
  m.review.add(Review("Neha", 3.4, "Well, sound is not good!!"));

  print("Movie name : ${m.movieName}");
  print("Rating : ${m.getAvgRating()}");

  for(var i=0;i<m.review.length;i++)
  {
    print("\n\nReview : ${m.review[i].person}, ${m.review[i].rating}");
    print("${m.review[i].comment}");
  }
}
