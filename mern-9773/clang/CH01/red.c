/*
           structure of c program

*/
#include<stdio.h>

#define A 100
#define sum(x,y) x+y

int i = 30; 

void display() {
printf("grey \n");

}

void main() {
    printf("hello\n");
    printf("sum of %d,%d is %d\n",A,i, sum(A,i));
    display();
}
