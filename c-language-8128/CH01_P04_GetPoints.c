#include<stdio.h>
void main()
{
    int i;
    float f;
    float ans;

    printf("Enter the floating value : ");
    scanf("%f",&f);

    i = (int)f;
    ans = f - i;

printf("the ans %.3f",ans);
}