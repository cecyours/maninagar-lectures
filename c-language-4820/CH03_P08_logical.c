
#include<stdio.h>

void main()
{
    float marks;

    printf("Enter the number : ");
    scanf("%f",&marks);

    // logical AND
    if(marks>=33 && marks<=100)
    {
        printf("Passed!!");
    }
    else{
        printf("failed");
    }
}
