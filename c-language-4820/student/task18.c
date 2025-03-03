#include<stdio.h>
void increment(float *salary)
{
    *salary = *salary + *salary * 0.10;

    printf("salary during function call: %.2f, %p\n", *salary,salary);

}
int main()
{
    float s;

    printf("Enter your salary:- ");
    scanf("%f",&s);

    increment(&s);

    printf("new salary: %.2f, %p\n",s,&s);

    return 0;
}