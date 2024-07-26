#include <stdio.h>
int fact(int n)
{
    int x = 0;
    if (n == 1)
    {
        return 1;
    }

    printf("\t%d -> %d\n", x, n);

    x = n * fact(n - 1);
    printf("%d -> %d\n", x, n);

    return x;
}
void main()
{
    int n, ans;

    printf("Enter the number : ");
    scanf("%d", &n);

    ans = fact(n);

    printf("the ans : %d\n", ans);
}