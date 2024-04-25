#include<stdio.h>
void main()
{
    // area = h*b/2
    float h,b,area;

    printf("Enter h, b : ");
    scanf("%f,%f",&h,&b);

    area = h*b/2;

    printf("area is : %f\n",area);
}