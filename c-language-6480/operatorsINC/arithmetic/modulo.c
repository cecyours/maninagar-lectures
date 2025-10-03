#include<stdio.h>

void main() {
    int a,b,c;
    printf("Enter 2 numbers : ");
    scanf("%d,%d",&a,&b); // enter 2 numbers separate by comma(,)
    
    c = a%b;
    printf("result : %d %% %d = %d\n",a,b,c);       
}