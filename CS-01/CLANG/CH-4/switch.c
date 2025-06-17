#include <stdio.h>

int main()
{
    int a;
    printf("Enter Number Of day :");
    scanf("%d", &a);

    switch (a)
    {
    case 1:
        printf("The day is Monday");
        break;
    case 2:
        printf("The day is Tuesday");
        break;
    case 3:
        printf("The day is wednesday");
        break;
    default:
        break;
    }

    return 0;
}
