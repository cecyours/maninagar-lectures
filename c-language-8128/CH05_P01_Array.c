#include<stdio.h>
void main()
{
    int a[] = {1,2,3,4,5,6,7,8,9,0};
    int n=10;
    int i;

    // printf("the value at 3 index : %d\n",a[3]);

    for(i=0;i<n;i++)
    {
        printf("a[%d] = %d\n",i,a[i]);
    }

}