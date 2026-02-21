#include <stdio.h>

void increment(double salary)
{
    salary += 5000; // salary = salary+5000
    printf(" Salary in Function : %7.lf\n", salary);
}
void main()
{
    double sal;

    printf("Enter your salary : ");
    scanf("%lf", &sal);
    
    printf("\n Salary before function : %7.lf\n", sal);
    increment(sal); // call by value
    
    printf(" Salary after function : %7.lf\n", sal);
   
}