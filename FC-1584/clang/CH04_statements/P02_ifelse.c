#include <stdio.h>

void main()
{
    int num;
   
    printf("Enter the number : ");
    scanf("%d", &num);
    if (num % 2 == 0) 
    {
        printf("%d is the even number.\n", num);
    }
    else 
    {
        printf("%d is the odd number.\n", num);
    }
    
}