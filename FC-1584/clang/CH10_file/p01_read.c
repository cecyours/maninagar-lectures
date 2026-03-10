#include<stdio.h>

void main(){

    FILE *fp;
    fp = fopen("student.txt", "r");

    if (fp == NULL){
        printf("file not found !");
    }else{
        printf("reading mode");
    }

}