#include<stdio.h>
float simpleint(int p, int r,int t)
{
    float si,tp;
    si= (p*r*t)/100;
    return si+p;
}

void main()
{
    int p,r,t;

    printf("enter the amount, rate of interest and time : ");
    scanf("%d,%d,%d",&p,&r,&t);

    printf("Simple Interest : %.2f\n",simpleint(p,r,t));
}