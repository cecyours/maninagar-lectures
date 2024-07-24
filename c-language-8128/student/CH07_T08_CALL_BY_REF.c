#include<stdio.h>

void callbyref(double *a)
{
    *a = *a+ *a*0.10;
    printf("in function a : %.2lf\n",*a);
}
void main()
{
    double a;

    printf("Enter your salary : ");
    scanf("%lf", &a);


    printf("before function call : %.2lf\n",a);

    callbyref(&a);

    printf("after function call : %.2lf",a);

}