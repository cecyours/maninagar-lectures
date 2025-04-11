#include<stdio.h>
int main()
{
    int a,b,c ;

    printf("enter the number :");
    scanf("%d",&a);

    printf("enter another number :");
    scanf("%d",&b);

    c=a+b;
    printf("%d + %d = %d\n",a,b,c);
    
    c=a-b;
    printf("%d - %d = %d\n",a,b,c);

    
    c=a*b;
    printf("%d * %d = %d\n",a,b,c);


    c=a/b;
    printf("%d / %d = %d\n",a,b,c);


    c=a%b;
    printf("%d %% %d = %d\n",a,b,c);

}