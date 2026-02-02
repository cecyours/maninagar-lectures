#include <stdio.h>

void main()
{
    int num;
    int i = 1;
  
    printf("Enter the number : ");
    scanf("%d", &num);
    do
    {
        printf("%2d x %2d = %d\n", num, i, num * i);
        i++;
    } while (i <= 10);
    
}