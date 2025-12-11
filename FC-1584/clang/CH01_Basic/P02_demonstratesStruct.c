#include<stdio.h>

#define A 100
#define SUM(X,Y) X + Y

int i = 30;

void display() {
    printf("Hello Vikash! \n");
}

void main() {
    printf("Hello World....\n");
    printf("sum of %d,%d is %d\n", A, i, SUM(A,i));
    // display();
}