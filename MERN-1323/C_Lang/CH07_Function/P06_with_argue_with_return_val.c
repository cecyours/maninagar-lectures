#include<stdio.h>

int sum(int a, int b){

    int c;
    c=a+b;

    return c;
}
void main(){
    int x, y, z;

    printf("Enter The value Of A+B: ");
    scanf("%d+%d", &x, &y);

    z = sum(x,y);

    printf("%d+%d=%d\n",x, y, z);
}