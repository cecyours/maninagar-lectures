#include <stdio.h>
void main()
{
    int condition = 10;

    while (condition) // entry loop
    {
        printf("i am king... \n");
        condition--;
    }
    condition = 10;
    do
    {
        printf("i am queen..\n");
        condition--;
    } while (condition); // exit loop
}