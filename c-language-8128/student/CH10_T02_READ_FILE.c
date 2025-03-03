#include <stdio.h>
void main()
{
    FILE* file;
    char name[100];
    char n;

        printf("Enter file name to read : ");
        scanf("%s", name);

    file = fopen(name, "r");

    if (!file)
    {
        printf("File name not found...");
        return;
    }
    
    while ((n = fgetc(file)) != EOF)
    {
        printf("%c", n);
    }
}