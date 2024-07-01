#include<stdio.h>
#include "CH02_T04_AVERAGE.h"
int main()
{
    int maths,science,english;

    printf("enter marks of maths,science,english: ");
    scanf("%d,%d,%d",&maths,&science,&english);

    printf("Your average marks is : %d",average(maths,science,english));


}