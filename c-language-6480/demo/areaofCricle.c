#include <stdio.h>
#define PI 3.14

void main()
{
    float radius, area;
    printf("enter radius of cricle: ");
    sacnf("%f", &radius);

    area = PI * radius * radius;
    printf("area of cricle : %.2f\n", area);
}

