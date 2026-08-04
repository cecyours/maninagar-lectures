#include<stdio.h>

void main() {
   
    int num, rem, rev = 0;

    printf("Enter number: ");
    scanf("%d", &num);
    while (num > 0)
    {
        /* code */
        rem = num % 10;
        rev = rev * 10 + rem;
        num = num / 10;
    }

    printf("Number: %d\n", rev);
    

   
}
