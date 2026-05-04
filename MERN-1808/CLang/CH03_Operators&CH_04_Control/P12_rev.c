#include<stdio.h>

void main(){
    int rem, num, rev = 0 ;

    printf("Enter a number: ");
    scanf("%d", &num);

    while (num > 0)
    {
        /* code */
        rem = num % 10;
        rev = rev * 10 + rem;
        num = num / 10 ;
    }

    printf("Reverse number: %d\n", rev);
    
}