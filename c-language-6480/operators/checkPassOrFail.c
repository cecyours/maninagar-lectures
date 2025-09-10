#include <stdio.h>

void main()
{
    int marks;
    printf("Please enter the marks : \n");
    scanf("%d", &marks);

    if((marks >= 33) && (marks <= 100))
    {
        printf("Congratulations! You passed the exam!");
    }
    else
    {
        printf("You failed the exam!");
    }
}