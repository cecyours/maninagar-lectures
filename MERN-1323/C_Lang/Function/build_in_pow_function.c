#include<stdio.h>
#include<math.h>

void main(){
    double x, y, ans;

    printf("Enter the value of X,Y : ");
    scanf("%lf, %lf", &x, &y);

    ans = pow(x, y);
    printf("Answerv %.2lf\n", ans);
    
}