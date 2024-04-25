
#include <stdio.h>
void main()
{

    int a, b;
    int ans;
    printf("Enter 2 numbers : ");
    scanf("%d,%d", &a, &b);

    ans = (a == b);
    printf(" %d == %d, ans:%d \n", a, b,ans); 

    ans = (a>b);
    printf(" %d > %d, ans:%d \n", a, b,ans); 

    ans = (a>=b);
    printf(" %d >= %d, ans:%d \n", a, b,ans); 

    // <
    // <=
    //  !=
}