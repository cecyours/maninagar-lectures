#include <stdio.h>

int fact(int n)
{
    if (n == 1)
    {
        return 1;
    }
    return n * fact(n - 1);
}
void main()
{
    int num, ans;
    
    printf("Enter a number : ");
    scanf("%d", &num);
    ans = fact(num);
    printf("factorial is : %d\n", ans);
    
}