#include <stdio.h>
int main()
{
    // Array of pointers to strings
    char *names[3] = {"Alice", "Bob", "Charlie"};
    for (int i = 0; i < 3; i++)
    {
        printf("Name %d: %s\n", i, names[i]);
    }
    return 0;
}
