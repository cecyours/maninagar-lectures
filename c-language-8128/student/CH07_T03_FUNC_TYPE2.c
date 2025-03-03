#include<stdio.h>
void div(float a,float b)
{
    
    printf("division of your numbers is : %.2f",a/b);
}


void main()
{
    float a,b;

    printf("enter two  numbers : ");
    scanf("%f,%f",&a,&b);

    div(a,b);
}