#include<stdio.h>

void main() {
    double ans, p, r, n;

    printf("Enter p, r, n : ");
    scanf("%lf,%lf,%lf", &p, &r, &n);

    ans = (p*r*n) / 100;

    printf("simple intrest: %.2lf", ans);
        
}