#include <stdio.h>
int nearestnum(float n)
{
    int lower;
    int higher;

    lower = (int)n;
    higher = (int)(n + 1);

    if(n-lower<higher-n)
        return lower;
    return higher;
}
void main()
{
    float n;

    printf("enter the number : ");
    scanf("%f",&n);
    printf("%d",nearestnum(n));
}