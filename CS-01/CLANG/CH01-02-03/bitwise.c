#include <stdio.h>

int main()
{

    int a, b, c;

    printf("Enter two numbers :");
    scanf("%d , %d", &a, &b);

    // using &
    // c = a & b;

    // Using OR  |
    // c = a | b;

    // bitwise negation( ~ )

    // c = ~a;

    // using  Ex-OR ^
    // c = a ^ b;

    printf("%d & %d = %d \n", a, b, c);

    return 0;
}
