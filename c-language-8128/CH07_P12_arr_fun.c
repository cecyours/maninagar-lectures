#include<stdio.h>
int n,i;
int min(int a[])
{
    int m = a[0];

    for(i=0;i<n;i++)
    {
        if(m>a[i])
        {
            m = a[i];
        }
    }

    return m;
}

int max(int a[])
{
    int h =a[0];

    for ( i = 0; i < n; i++)
    {
        if (h<a[i])
        {
            h=a[i];
        }
        
    }
    return h;
    
}
void main()
{
    int a[100],m,h;

    printf("Enter the size : ");
    scanf("%d",&n);

    printf("Enter the array : \n");
    for(i=0;i<n;i++)
    {
        printf(" enter element for %d index : ",i);
        scanf("%d",&a[i]);
    }

    m =   min(a);
    printf("%d is minimum number..\n",m);

    h= max(a);

    printf("%d is the highest number..\n",h);

}