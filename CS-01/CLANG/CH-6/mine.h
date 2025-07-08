#include <stdio.h>
#include <string.h>

void getLineInput(char *buffer, int size)
{
    if (fgets(buffer, size, stdin))
    {
        size_t len = strlen(buffer);
        // Remove trailing newline
        if (len > 0 && buffer[len - 1] == '\n')
        {
            buffer[len - 1] = '\0';
        }
    }
}