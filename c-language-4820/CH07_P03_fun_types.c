#include <stdio.h>

void sum_1() // no arguments, no return value
{
    int a, b;

    printf("Enter 2 numbers : ");
    scanf("%d,%d", &a, &b);

    printf("%d + %d = %d\n", a, b, a + b);
}

void sum_2(int a,int b) //with arguments, no return value
{
    printf("%d + %d = %d\n", a, b, a + b);
}

int sum_3() // no arguments, with return value
{
   int a, b;

    printf("Enter 2 numbers : ");
    scanf("%d,%d", &a, &b);

    return a+b; 
}

int sum(int a,int b) //with argument, with return value
{
    return a+b;
}
void main()
{   
    int x,y,z;
    sum_1();

    printf("Enter 2 numbers : ");
    scanf("%d,%d",&x,&y);

    sum_2(x,y);

   z = sum_3();
   printf("the result of s3 : %d\n",z);

    z = sum(x,y);
    printf("%d + %d = %d\n",x,y,z);

}