#include<stdio.h>

void increment(float *salary)
{
    *salary = *salary + *salary*0.10;
    printf("salary during function:- %f\n",*salary);
}
int main()
{
    float s;

    printf("Enter your salary:- ");
    scanf("%f",&s);

    increment(&s);
    printf("New salary:- %f\n",s);

    return 0;
}