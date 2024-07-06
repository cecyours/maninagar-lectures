#include<stdio.h>
void main()
{
    int a,b,c;

    printf("enter a-b : ");
    scanf("%d-%d", &a,&b);

    c= a&b; //bitwise &

    printf("%d & %d = %d\n",a,b,c);


    c=a|b; // bitwise OR

    printf("%d | %d = %d\n",a,b,c);


    c=a^b; // bitwise EX-OR

    printf("%d ^ %d = %d\n",a,b,c);


    c= a>>b; // left shift..

    printf("%d >> %d = %d\n",a,b,c);

    /*
        c = a/2^b
          = 7/2^3
          
    */

    c=a<<b; // right shift..  

    printf("%d << %d = %d\n",a,b,c);

    /*
        c = a*2^b
          = 7*2^3
    */

}