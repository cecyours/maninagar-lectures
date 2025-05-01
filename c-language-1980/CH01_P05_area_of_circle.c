#include<stdio.h>
int main()
{
    float pi=3.14;
    float r,area;

    printf("Enter the radius : ");
    scanf("%f",&r);

    area = pi*r*r;

    printf("your area is this : %.2f",area);
}