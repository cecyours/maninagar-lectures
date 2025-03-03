#include<stdio.h>

struct Movie{
    int id;
    char movieName[100];
    char movieDirector[100];
    float movieRating;
};

void main()
{
    FILE *file;
    char ch;
    struct Movie m;
    file = fopen("./movies.txt","a+");

    printf("Enter movie info : ");
    scanf("%d %s %s %f",&m.id,m.movieName,m.movieDirector,&m.movieRating);

    // // write into file
    
    fprintf(file,"%d,%s,%s,%.2f\n",m.id,m.movieName,m.movieDirector,m.movieRating);


    // read the content of the file

    printf("the file tell : %ld\n",ftell(file));

    fseek(file,0,0);
    printf("------------ the records -----------\n");
    while((ch=getc(file))!=EOF)
    {   
        printf("%c",ch);
    }

    fclose(file);
}