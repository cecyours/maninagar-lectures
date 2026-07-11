#include <stdio.h>

int main(){
    FILE *fp;

    fp = fopen("student.txt", "r");

    if (fp == NULL)
        printf("File not found!");
    else
        printf("File opened for reading.");

        return 0;
}