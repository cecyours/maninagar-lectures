#include <stdio.h>

void display(int n)
{
    if (n == 0) // Basecase
        return; // exit from recursion
    printf("Hello World\t");
    n--;        // for Basecase
    display(n); /** recursion calling **/
}
void main()
{

    display(10);
}