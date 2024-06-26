#include<stdio.h>
void main()
{
    FILE *file;
    char data[100];

    file = fopen("./records.txt","r");




    printf("you have in file :\n");
    while((fscanf(file,"%s",data))==1)
    {
        printf("%s ",data);
    }
    


}