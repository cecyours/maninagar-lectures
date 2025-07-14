#include <stdio.h>
#include <math.h>

int main()
{

    int a, b, c;
    printf("Enter The value : ");
    scanf("%d", &a);

    printf("Enter The value : ");
    scanf("%d", &b);    

    c = pow(a, b);

    printf("Power of %d and %d = %d : ", a, b, c);

    return 0;
}
