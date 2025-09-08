#include <stdio.h>
#define A 5

void main()
{
    int num;
    printf("Please enter value :");
    scanf("%d", &num);

    printf("Addition is A + num : %d", A + num);
}