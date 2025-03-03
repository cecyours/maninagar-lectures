#include<stdio.h>
void main()
{
    int marks;

    printf("Enter your marks:- ");
    scanf("%d",&marks);

    if(marks>90 && marks<=100)
    {
        printf("student will get A grade");
    }
    else if(marks>70 && marks<=90)
    {
        printf("student will get B grade");
    }
    else if(marks>50 && marks<=70)
    {
        printf("student will get C grade");
    }
    else if(marks>40 && marks<=50)
    {
        printf("student will get D grade");
    }
    else
    {
        printf("failed");
    }
}