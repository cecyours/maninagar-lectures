#include<stdio.h>

int result(int age)
{
    if(age>=18)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
void main()
{
    int age;

    printf("Enter your age:- ");
    scanf("%d",&age);

    if(result(age))
    {
        printf("mejority");
    }
    else
    {
        printf("minor");
    }
}