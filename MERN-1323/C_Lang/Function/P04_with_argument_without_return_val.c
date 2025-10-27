#include<stdio.h>

void sum(int x, int y){
    int z;

    z = x + y;
    printf("%d + %d = %d\n", x, y, z);
}

void main(){
    int a,b;

    printf("\n Enter the Value A+B: " );
    scanf("%d+%d", &a, &b);
    sum(a,b);
}