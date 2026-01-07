#include <stdio.h>

#define VALUE 3

#if VALUE > 5
    #define MSG "Value > 5"
#else
    #define MSG "Value <= 5"
#endif

int main()
{
    printf("%s", MSG);
    return 0;
}