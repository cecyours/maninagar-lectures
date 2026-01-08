/* 
    structure c program
*/


#include<stdio.h>

#define A 100
#define SUM(x, y)  x+y

int i = 30;

void display(){
    printf("Dhaval \n");
}

void main() {
    printf("hello\n");
    printf("Sum of %d,%d is %d\n", A,i, SUM(A,i));
    display();
}
