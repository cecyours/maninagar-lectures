#include <stdio.h>

void main()
{
    int num;
    
    printf("Please enter a number (negative to exit): \n");
    scanf("%d", &num);

    if(num < 0)
    {
        printf("Exiting the program.\n");
        exit(0);
    }
    printf("You entered: %d\n", num);
}