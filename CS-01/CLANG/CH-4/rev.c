#include <stdio.h>

int main()
{

    int rem, num, rev = 0;
    printf("Enter The value : ");
    scanf("%d", &num);
    while (num > 0)
    {
        rem = num % 10; // to get last digit
        printf("rem is %d\n", rem);
        rev = rev * 10 + rem; // append the rem into rev
        printf("rev is %d\n", rev);
        num = num / 10;
        printf("num is %d\n", num);
    }

    printf(" reverse number : %d\n", rev);

    return 0;
}
