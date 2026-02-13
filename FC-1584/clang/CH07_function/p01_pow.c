#include <stdio.h>
#include <math.h> // pow() function

void main()
{
    double x, y, ans;

    printf("Enter values as x,y : ");
    scanf("%lf,%lf", &x, &y);
    ans = pow(x, y); // x raise to y, the return value will strored in ans
    printf("Answer : %.2lf\n", ans);
    
}