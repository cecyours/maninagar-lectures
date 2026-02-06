#include <stdio.h>
#include <math.h> 

void main()
{
    double x, y, ans;
   
    printf("Enter values as x,y : ");
    scanf("%lf,%lf", &x, &y);
    
    ans = pow(x, y); 
    printf("Answer : %.2lf\n", ans);
  
}