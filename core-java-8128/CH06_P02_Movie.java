import java.util.Date;

public class CH06_P02_Movie {
    public static void main(String[] args) {

        int n = 10;
        Movie movies[] = new Movie[n];

        Date d = new Date();
       
        movies[0] = new Movie("Interstellar", "Christopher Nolan", 8.4, "Sci-Fi", d);
        movies[1] = new Movie("Inception", "Christopher Nolan", 8.8, "Sci-Fi", d);
        movies[2] = new Movie("The Dark Knight", "Christopher Nolan", 9.0, "Action", d);
        movies[3] = new Movie("The Shawshank Redemption", "Frank Darabont", 9.3, "Drama", d);
        movies[4] = new Movie("The Godfather", "Francis Ford Coppola", 9.2, "Crime", d);
        movies[5] = new Movie("Pulp Fiction", "Quentin Tarantino", 8.9, "Crime", d);
        movies[6] = new Movie("Fight Club", "David Fincher", 8.8, "Drama", d);
        movies[7] = new Movie("Forrest Gump", "Robert Zemeckis", 8.8, "Drama", d);
        movies[8] = new Movie("The Matrix", "The Wachowskis", 8.7, "Sci-Fi", d);
        movies[9] = new Movie("Avengers: Endgame", "Anthony and Joe Russo", 8.4, "Action", d);


        for (Movie movie : movies) {
            System.out.println(movie);
        }
        
    }
}

class Movie {

    double rating;
    String director;
    String name;
    String category;
    Date releaseDate;

    Movie() {
        rating = 0;
        director = "Master";
        name = "N/A";
        releaseDate = new Date();
    }

    Movie(String name, String director, double rating, String category, Date releaseDate) {
        this.name = name;
        this.director = director;
        this.category = category;
        this.releaseDate = releaseDate;
        this.rating = rating;
    }

    @Override
    public String toString() {
        String data = String.format("{name:%s, director:%s, category:%s, rating:%f, releaseDate:%s}",
                name, director, category, rating, releaseDate.toString());
        return data;
    }

}
