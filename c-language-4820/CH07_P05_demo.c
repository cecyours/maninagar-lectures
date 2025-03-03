
#include<stdio.h>

int max(int a,int b,int c)
{
    int max_number = a;

    a = a+10;

    printf(" a : %d, b : %d, c: %d\n",a,b,c);

    if(max_number<b)
    {
        max_number = b;
    }

    if(max_number<c)
    {
        max_number = c;
    }

    return max_number;
}

int main()
{
    int x,y,z,m;

    printf("Enter 3 numbers : ");
    scanf("%d,%d,%d",&x,&y,&z);

    printf(" x : %d, y : %d, z : %d\n",x,y,z);
    m = max(y,x,z);

    printf("max is : %d\n",m);
    printf(" x : %d, y : %d, z : %d\n",x,y,z);

    return 0;
}