#include<stdio.h>
#include "./CH12_T01_MACRO_HEADER.h"

#define sum(x,y) x+y

void main()
{

    int a,b;

    printf("Enter the value of a : ");
    scanf("%d",&a);

    printf("Enter the value of b : ");
    scanf("%d",&b);

    printf("Sum : %d\n",sum(a,b));
    printf("Maximum number : %d\n",max(a,b));
    printf("Mininum number : %d\n",min(a,b));

}