#include <stdio.h>
#include <conio.h>

void main()
{
    int num;

    printf("Enter a number : \n");
    scanf("%d", &num);

    if(num < 0)
    {
        num *= -1;
    }

    printf("Positive value of num is : %d", num);

}