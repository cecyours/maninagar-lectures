#include<stdio.h>

void main(){
    char list[20][200];
    int i,n;

    printf("Enter the size: ");
    scanf("%d", &n);

    printf("Enter the student List: \n");
    for ( i = 0; i < n; i++)
    {
        printf("Student name enter %d : ", i+1);
        scanf("%s", list[i]);
    }
    
    printf("\n Entered List: \n");
    for ( i = 0; i < n ; i++)
    {
        printf("Student %d : %s \n", i+1, list[i]);
    }
}