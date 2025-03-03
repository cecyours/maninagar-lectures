#include<stdio.h>
void main()
{
    int r;
    float area,pi=3.14;
    

    printf("enter the radius value : ");
    scanf("%d",&r);

    area = pi * r* r;

    printf("area of radius %d = %.2f\n", r, area);

    printf("price of area of radius %d = %.3f", r,area*120);


}