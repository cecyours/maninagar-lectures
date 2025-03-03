#include <stdio.h>
void main()
{
    int counter=0;

    printf("line 1..\n");
    printf("line 2..\n");
home:
    printf("line 3.. => %d\n", counter);
    printf("line 4.. => %d\n", counter);
    printf("line 5.. => %d\n", counter);
    counter++;
    if (counter < 5)
        goto home;
    printf("line 6..\n");
    printf("line 7..\n");
    printf("line 8..\n");
}