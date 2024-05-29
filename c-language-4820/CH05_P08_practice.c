#include<stdio.h>
void main()
{
    int a[100],n,i,neg=0,pos=0,zero=0;

    printf("Enter the num: ");
    scanf("%d",&n);

    printf("enter the data: \n");

    for(i=0;i<n;i++)
    {
        printf("your data is a[%d]",i);
        scanf("%d",&a[i]);
    }
    for(i=0;i<n;i++)
    {
        if(a[i]<0)
        neg++;

        if(a[i]>0)
        pos++;

        if(a[i] == 0)
        zero++;
    }
    printf("------------------------\n");
    printf("the value is neg %d: \n",neg);
    printf("the value is pos %d: \n",pos);
    printf("the value is zero %d: \n",zero);

    printf("------------------------------\n");
    for(i=0;i<n;i++)
    {
        printf("a[%d] = %d\n",i,a[i]);
    }
}