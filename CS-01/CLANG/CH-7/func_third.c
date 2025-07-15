#include <stdio.h>

// 3. without argument and with return value.

int sum()
{

    int a, b, c;

    printf("\nEnter values as a+b : ");
    scanf("%d+%d", &a, &b);

    c = a + b;
    return c;
}

int main()
{

    int ans;

    ans = sum();

    printf("the sum is %d", ans);
    return 0;
}
