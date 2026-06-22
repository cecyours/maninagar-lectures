#include<stdio.h>

void main()
{
    int num, iter = 1;
    printf("Please enter a number: \n");
    scanf("%d", &num);

    do
    {
        /* code */
        printf("%d x %d = %d\n", num, iter, num * iter);
        iter++;
    } while (iter < 11);
    
}