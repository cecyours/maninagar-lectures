#include <stdio.h>

void increment(double *salary)

{
    *salary += *salary + 5000;
    printf(" Salary in Function : %7.lf\n", *salary);
}

int main()
{
    double sal;

    printf("Enter your salary : ");
    scanf("%lf", &sal);

    printf("\n Salary before function : %7.lf\n", sal);

    increment(&sal);

    printf("\n Salary after function : %7.lf\n", sal);

    return 0;
}
