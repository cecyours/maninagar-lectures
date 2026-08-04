#include <stdio.h>

int main()
{
    int a,b;

    printf("Enter 2 numbers: ");
    scanf("%d,%d",&a,&b);

    a+=b;
    printf("value of a += : %d\n", a);

    
    a-=b;
    printf("value of a += : %d\n", a);

    
    a*=b;
    printf("value of a += : %d\n", a);

    
    a/=b;
    printf("value of a += : %d\n", a);


    

    return 0;

}