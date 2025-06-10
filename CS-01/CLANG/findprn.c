#include <stdio.h>

int main()
{

    double SI, P, R, N;

    printf("ENter P R N : ");
    scanf("%lf ,%lf , %lf ", &P, &R, &N);

    SI = (P * R * N) / 100;

    printf("Simple interest : %.3lf", SI);

    return 0;
}
