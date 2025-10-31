#include<stdio.h>
void main(){
    int i;

    i=0;
    for(; ;){
        if(i>10)
            break;
        printf("%d\n", i);
        i++;
    }
    
}