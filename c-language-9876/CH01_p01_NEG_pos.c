#include <stdio.h>
int main()
{
    int i;
    printf("enter a number : ");
    scanf("%d", &i);

    if (i < 0)
    {
        i = i * -1;
    }
    printf("number is %d \n");
}
