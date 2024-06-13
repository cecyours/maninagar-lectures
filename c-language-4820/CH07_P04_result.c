#include<stdio.h>


int result(float marks)
{
    if(marks>=33)
    {
        return 1;
    }
    else{
        return 0;
    }
}
void main()
{

    float marks;

    printf("Enter the marks : ");
    scanf("%f",&marks);


    if(result(marks))
    {
        printf("Congo...");
    }
    else{
        printf("failed...");
    }
}