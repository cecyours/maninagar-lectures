#include<stdio.h>
#include "../CH02_P07_header.h"
int main()
{
int a,b;

printf("please enter two numbers : ");
scanf("%d,%d",&a,&b);

printf("%d - %d= %d \n",a,b,sub(a,b));
printf("%d * %d= %d \n",a,b,mult(a,b));
printf("%d / %d= %d \n",a,b,div(a,b));
printf("%d %% %d= %d \n",a,b,remainder(a,b));

}
