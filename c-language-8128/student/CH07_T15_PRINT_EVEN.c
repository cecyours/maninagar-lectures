#include<stdio.h>
int i;
void even_no(int n)
{
    int u=0;
    for (i = 0; i < n; i++)
    {
        u=u+2;
        printf("%d\n",u);
    }
    
}
void main()
{
    int n;
    printf("Enter the length of even no. you want : ");
    scanf("%d",&n);

    even_no(n);
}