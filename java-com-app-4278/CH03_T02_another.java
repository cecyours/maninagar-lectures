public class CH03_T02_another {
    public static void main(String[] args) {
        Level l = new Level(30);
        System.out.println("for level 1 coins required:"+l.getcoin());
        l.setcoin(60);
        System.out.println("for level 2 coins required:"+l.getcoin());
    }
}
class Level
{
    int coin = 0;
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