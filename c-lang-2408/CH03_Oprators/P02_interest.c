#include <stdio.h>

void main() {
    double si, p, r, n;

    printf("Enter p,r,n: ");
    scanf("%lf,%lf,%lf", &p,&r,&n);

    si = (p*r*n)/100;

    printf("Simple intrest: %.3lf",si);
    
}