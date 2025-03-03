#include <stdio.h>

void increaseSalary(double *xSalary)
{
    *xSalary = *xSalary + *xSalary * 0.10;
    printf("    in function salary : %.2lf => %p\n", *xSalary,xSalary);
}
void main()
{
    double salary;

    printf("Enter your salary : ");
    scanf("%lf", &salary);

    printf("before function salary : %.2lf => %p\n", salary,&salary);
    increaseSalary(&salary);
    printf(" after function salary : %.2lf => %p\n", salary,&salary);
}