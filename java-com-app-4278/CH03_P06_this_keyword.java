public class CH03_P06_this_keyword {
    public static void main(String[] args) {
     
        Level l = new Level(10);

        System.out.println("new coin : "+l.getCoin());

        l.setCoin(20);

        System.out.println("new coin : "+l.getCoin());
    }
}


class Level{

    int coin = 0;

    public Level(int coin)
    {
        this.coin = coin;
    }


    void setCoin(int coin) 
    {
        this.coin = coin;
    }

    int getCoin()
    {
        return coin;
    }
}



