#include <stdio.h>

#define HELLO

#ifdef HELLO
    #define MSG "HELLO is defined"
#endif

int main()
{
    printf("%s", MSG);
    return 0;
}