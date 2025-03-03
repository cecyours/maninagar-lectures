#include <stdio.h>
void main()
{
    int a, coins = 0;
    char ch, c;

    do
    {

        

        if (c=='+')
        {
            coins +=a;
        }
        else if(c=='-')
        {
            coins -=a;
        }
        else if(c=='*')
        {
            coins *=a;
        }
        else
        {
            coins /=a;
        }
        
        

    } while (ch == 'Y' || ch == 'y');

    printf("total coins : %d", coins);
}