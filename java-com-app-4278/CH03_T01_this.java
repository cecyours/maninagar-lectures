public class CH03_T01_this {
    public static void main(String args[]) {
        Level l = new Level(20);
        System.out.println("new coin:"+l.getcoin());
        l.setcoin(40);
        System.out.println("new coin:"+l.getcoin());
     }

}

class Level
{
    int coin = 5;
    public Level(int coin)
    {
        this.coin = coin;
    }
    void setcoin(int coin)
    {
        this.coin = coin;
    }
    int getcoin()
    {
        return coin;
    }
}