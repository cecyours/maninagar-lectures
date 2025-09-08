#include <stdio.h>

void main()
{
    float prinicipal, rate, time, simpleInterest;
    printf("Enter prinicipal amount:");
    scanf("%f", &prinicipal);
    printf("enter rate of interest:");
    scanf("%f", &rate);
    printf("enter time)(in years):");
    scanf("%f", &time);
    simpleInterest = (prinicipal * rate * time)/100;
    printf("simple interest: %.2f\n", simpleInterest);
}





