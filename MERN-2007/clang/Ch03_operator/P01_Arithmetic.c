#include <stdio.h>

void main()
{
    double SI, R, P, N;
    
    printf("Enter P,R,N : ");
    scanf("%lf,%lf,%lf", &P, &R, &N);

    SI = (P * R * N) / 100;
    
    printf("Simple interest : %.3lf", SI);
}