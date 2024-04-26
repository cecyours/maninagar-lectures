
#include<stdio.h>

void main()
{
    int age;

    printf("Enter your age : ");
    scanf("%d",&age);


    if(age>18 && age<=110)
    {
        printf("Welcome");
    }
    else
    {
        printf("Bye bye....");
    }

}