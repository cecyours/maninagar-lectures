#include<stdio.h>
void main()
{
    float l,b,area;

    printf("Please, enter lxb : ");
    scanf("%fx%f",&l,&b);

    area= l*b;

    printf("area (%.2f,%.2f) %.2f\n",l,b,area);
}