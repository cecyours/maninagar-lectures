#include<stdio.h>
int main()
{
    int a[] = {1,2,3,4,5,6,7,8,9,0};
    int i,n=10;
    // printf("%d",a[0]);

    for(i=0;i<n-1;i++)
    {
        a[i+1] = a[i]+10;
    }

    for(i=0;i<n;i++)
    {
        printf("a[%d] = %d\n",i,a[i]);
    }
}