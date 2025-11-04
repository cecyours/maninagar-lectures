#include<stdio.h>

void main(){

    int rem, rev= 0, num;
    printf("Enter a number: ");
    scanf("%d", &num);
    
    while (num > 0){
        rem = num % 10;
        rev = rev * 10 + rem;
        num = num /10;
    }
    printf("Reversed Number: %d\n", rev);   
}