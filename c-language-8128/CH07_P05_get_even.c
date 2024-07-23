#include<stdio.h>

int getEven(int num)
{
    if(num%2==0)
        return num;

    return num+1;
}


void main()
{
    int x,ans;

    printf("Enter the number : ");
    scanf("%d",&x);


    ans = getEven(x);

    printf("the even number : %d\n",ans);

}