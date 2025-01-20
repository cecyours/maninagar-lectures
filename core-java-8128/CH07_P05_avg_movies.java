public class CH07_P05_avg_movies {
    public static void main(String[] args) {
        
        Movie m1 = new Movie(5);
        Movie m2 = new Movie(7);
        Movie m3 = new Movie(9);

        System.out.println("Average rating: "+Movie.avgRating());

        System.out.println("M1 :"+m1.rating);
    }
}

class Movie{

    static int count;
    static double sum;
    double rating;
    public Movie(double rating){
        count++;
        sum+=rating;
        this.rating=rating;
    }
    
    static double avgRating(){
        return sum/count;
    }


}
