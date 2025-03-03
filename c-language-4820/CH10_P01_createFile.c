#include<stdio.h>
void main()
{
    FILE *file;


    file = fopen("./at_the_way.txt","w");


    fprintf(file,"I am Not good");
    printf("file is created succesfully");

    
    fclose(file);
}