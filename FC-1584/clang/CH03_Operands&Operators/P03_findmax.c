#include<stdio.h>

void main(){
    int a, b;

    printf("Enter two number: ");
    scanf("%d,%d",&a, &b);

    if( a < b ) {
        printf("B id max: %d\n", b);
    }else {
        printf("A id max: %d\n", a);
    }

}