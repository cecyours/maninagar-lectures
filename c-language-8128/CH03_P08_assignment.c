#include<stdio.h>
// coin = coin+10 => coin+=10
void main()
{
    int a,b;

    printf("enter the number : ");
    scanf("%d", &a);

    printf("---------------------");

    printf("\nenter the value : ");
    scanf("%d", &b);

    printf("---------------------");

    a +=b; // 13 
    printf("\nthe value : %d\n",a);


    a -=b; // 10 
    printf("the value : %d\n",a);


    a *=b; // 30
    printf("the value : %d\n",a);

    

    a /=b; // 10
    printf("the value : %d\n" ,a);
}