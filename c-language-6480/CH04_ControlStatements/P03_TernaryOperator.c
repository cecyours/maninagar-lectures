#include<stdio.h>

void main(){

    int num;

    printf("Enter The Number: ");
    scanf("%d", &num);

    (num %2 == 0 ) ? printf("%d is even.\n" ,num) : printf("%d is odd.\n", num);
}