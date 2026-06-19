#include <stdio.h>

int sum(int a, int b)
{
    int c;
    c = a + b;
    return c;
}
void main()
{
    int x, y, z;

    printf("Enter values as a+b : ");
    scanf("%d+%d", &x, &y);
    z = sum(x, y); // x → a, y → b, c → z
    printf("%d + %d = %d\n", x, y, z);
}