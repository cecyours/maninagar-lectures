#include <stdio.h>

void main() {
    int num, i = 1; 

    printf("Enter a Number: ");
    scanf("%d", &num);

    do {
        printf("%2d * %2d = %d\n", num,  i, num * i);
        i++;
    }while ( i <= 10 );
}