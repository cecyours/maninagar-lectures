#include<stdio.h>
int mutli()
{
    int a,b;

    printf("enter two  numbers : ");
    scanf("%d,%d",&a,&b);
    

    return a*b;

}
void main()
{
    printf("multiplication of your numbers is : %d",mutli());

}