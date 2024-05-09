#include <stdio.h>
void main()
{
    int number = 10, counter = 1;

    do
    {

        printf("hello counter %d\t", counter);

        counter++;
    } while (counter <= number);
}