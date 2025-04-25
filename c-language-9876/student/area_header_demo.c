#include<stdio.h>
#include "area.h"
int main()
{
    int a,b;
    printf("enter the two numbers");
    scanf("%d,%d",&a,&b);

    printf("area of the square is : %d \n ",area_square(a));
    printf("area of the rectangle is : %d \n ",area_rectangle(a,b));
    printf("the area of the triangle is : %d \n",area_triangle(a,b));
    printf("area of the circle is : %d \n", area_circle(a));

}