#include<stdio.h>

void main(){
    

    for (int i = 1; i <= 10; i++)
    {
        if(i == 9){
            break;
        }
        printf("line %d.\n",i);
    }

    printf("\nhello world");  
    
}