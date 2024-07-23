#include<stdio.h>
void sum(int a,int b)
{
    printf("addition of your number is : %d\n",a+b);
}
void sub(int a,int b)
{
    printf("substraction of your number is : %d\n",a-b);
}

void multi(int a,int b)
{
    printf("multiplication of your number is  : %d\n",a*b);
}

void div(float c,float d)
{
    printf("division of your number is : %f\n",c/d);
}


void main()
{
    int a,b;
    float c,d;

    printf("enter the number a and b : ");
    scanf("%d,%d",&a,&b);

    sum(a,b);

    sub(a,b);
    
    printf("\n");


    multi(a,b);
    printf("\n");

    printf("enter the numbers for division : ");
    scanf("%f,%f",&c,&d);
    div(c,d);
}
