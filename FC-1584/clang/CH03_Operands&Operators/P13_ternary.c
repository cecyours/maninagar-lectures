#include<stdio.h>

void main(){

    int a, b, min;
    printf("enter two number: ");
    scanf("%d,%d", &a,&b);


    min = (a < b) ? a : b ; 

    printf("The min: %d\n",min);


}
