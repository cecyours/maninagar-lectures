#include <stdio.h>
#include <conio.h>

void main()
{   
    double p, r, n;

    printf("Please enter the Principal amount, Rate of interest and number of years:\n");
    scanf("%lf %lf %lf", &p, &r, &n);

    double SI = (p*r*n) / 100;

    printf("Simple interest is : %.3lf", SI);
}