#include <stdio.h>

int sum()
{
    int a, b, c;
    
    printf("Enter values as a+b: ");
    scanf("%d+%d", &a, &b);
    c = a + b;
    
    return c;
}
void main()
{
    int ans;
   
    ans = sum();
    printf("Answer : %d\n", ans);
    
}