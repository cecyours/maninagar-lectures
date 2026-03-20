#include <stdio.h>

#define X 20

#if X == 10
    #define MSG "X is 10"
#elif X == 20
    #define MSG "X is 20"
#else
    #define MSG "X is something else"
#endif

int main()
{
    printf("%s", MSG);
    return 0;
}