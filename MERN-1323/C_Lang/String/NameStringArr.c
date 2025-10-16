#include<stdio.h>

void main(){
    char name[5][100] = {"Tanvi", "Rio", "Heema", "Jiya", "Rohit"};
    int i, n=5;

    printf ("Student: \n");

    for ( i = 0; i < n; i++)
    {
        printf("%s\n", name[i]);
    }
    
}