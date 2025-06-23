#include <stdio.h>

int main()
{
    int num;
    int i = 1;

    printf("Enter The value : ");
    scanf("%d", &num);

    do
    {
        printf("%2d x %2d = %d\n", num, i, num * i);
        i++;
    } while (i <= 10);

    return 0;
}
