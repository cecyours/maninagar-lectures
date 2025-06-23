#include <stdio.h>

int main()
{

    int a, calc;
    int i = 1;
    printf("Enter The value : ");

    scanf("%d", &a);

    for (; i <= 10; i++)
    {
        calc = a * i;
        if (i == 7)
            continue;
        printf("%d  X %d = %d\n", a, i, calc);
    }

    return 0;
}
