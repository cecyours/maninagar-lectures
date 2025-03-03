#include<stdio.h>
void salary_incre(int *salary)
{
    *salary = *salary + *salary*0.30;
}
void main()
{
    int salary;

    printf("enter your salary : ");
    scanf("%d",&salary);


    printf("salary before increment : %d\n",salary);

    salary_incre(&salary);

    printf("Your Salary after increment : %d",salary);
}