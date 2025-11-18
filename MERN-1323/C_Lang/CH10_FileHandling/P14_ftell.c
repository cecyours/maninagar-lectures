#include <stdio.h>
int main()
{
    FILE *fp;
    char ch;
    
    fp = fopen("student.txt", "r");
    
    if (fp == NULL)
    {
        printf("Error opening file!\n");
        return 1;
    }
    
   printf("Reading file character by character:\n");

   while ((ch = fgetc(fp)) != EOF)
   {
        printf("Character:%c at Position:%ld\n", ch, ftell(fp));
   }
    

    fclose(fp);
    return 0;
}