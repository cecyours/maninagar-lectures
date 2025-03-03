

//  c = a+b => 3 + 4
// operator defines the operation which will be performed. +
// operands are those, on which the opertion performed. (a,b)=> (3,4)

#include <stdio.h>
void main()
{

    int a, b, c;
    char operation;

    printf("Enter the number : ");
    scanf("%d%c%d", &a, &operation, &b);

    if (operation == '+')
        c = a + b;
    else if (operation == '-')
        c = a - b;
    else if (operation == '*')
        c = a * b;

    printf("%d %c %d = %d\n", a, operation, b, c);
}
