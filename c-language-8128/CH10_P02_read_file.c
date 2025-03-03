#include <stdio.h>
void main()
{
    FILE *file;
    char fileName[100] = "CH09_P03_struc_ptr.c";

    // char data[100];
    char ch;

    // printf("Enter file name to open : ");
    // scanf("%s",&fileName);

    file = fopen(fileName, "r");

    if (!file)
    {
        printf("File is not available !!");
        return;
    }

    // fscanf(file, "%s", data);

    while ((ch=fgetc(file))!=EOF) // END OF FILE , -1
    {
        printf("--%c--",ch);
    }
    // rest code
}