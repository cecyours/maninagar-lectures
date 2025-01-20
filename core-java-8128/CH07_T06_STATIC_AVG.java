public class CH07_T06_STATIC_AVG {
    public static void main(String[] args) {
        Movie m1 = new Movie(5);
        Movie m2 = new Movie(7);

        System.out.println("Movie 1 rating: "+m1.rating);
        System.out.println("Movie 2 rating: "+m2.rating);

        System.out.println("Average rating: "+Movie.avgRating());
    }
}
class Movie{
    double rating;
    static double count;
    static double sum=0;
    public Movie(double rating){
        this.rating=rating;
        count++;
        sum+=rating;
    }
        static double avgRating(){
            return sum/count;
    }
}