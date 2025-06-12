#include <stdio.h>

int main()
{

    int a;
    printf("Enter The Numbers :");
    scanf("%d  ", &a);

    if (a < 0)
    {
        a *= -1;
    }

    printf("value after convert : %d\n", a);

    return 0;
}
