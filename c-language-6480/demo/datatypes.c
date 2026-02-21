#include <stdio.h>

void main()
{
    int a, b;
    printf("Enter two integers: ");
    scanf("%d %d", &a, &b);

    float x, y;
    printf("Enter two floating-point numbers: ");
    scanf("%f %f", &x, &y);

    char ch;
    printf("Enter a character: ");
    scanf(" %c", &ch);  // Note the space before %c to consume any leftover whitespace
}