#include <stdio.h>

int main()
{

    // to print hello world 10 times
    // int count = 10;
    // for (size_t i = 0; i < count; i++)
    // {
    //     printf("Hello i am from %d\n", i);
    // }

    // to print all even number below 40
    // for (size_t i = 0; i < 40; i += 2)
    // {
    //     printf(" %d\n", i);
    // }

    // print 10 numbers
    int i = 1;
    for (;;)
    {
        if (i > 10)
            break;
        printf("%d, ", i);
        i++;
    }

    return 0;
}
