#include <stdio.h>

int main()
{

    int a, i;
    printf("Enter The value to get divisable numbers : ");
    scanf("%d", &a);

    i = 0;
    while (i < 100)
    {
        printf("%d, ", i);
        i += a;
    }

    return 0;
}
