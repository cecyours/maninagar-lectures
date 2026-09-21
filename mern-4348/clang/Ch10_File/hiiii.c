#include <stdio.h>

int main()
{
    FILE *fp;

    fp = fopen("notes.txt", "w");
    if (fp == NULL)
    {
        printf("Could not open file.\n");
        return 1;
    }
    /* use fp here */
    fclose(fp);
}
