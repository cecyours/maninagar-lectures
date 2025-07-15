#include <stdio.h>

// 4. with argument and with return value

int sum(int a, int b)
{
    int c;
    c = a + b;
    return c;
}

int main()
{

    int a, b, c, ans;

    printf("\nEnter values as a+b : ");
    scanf("%d+%d", &a, &b);

    ans = sum(a, b);

    printf("The sum is %d ", ans);

    return 0;
}
