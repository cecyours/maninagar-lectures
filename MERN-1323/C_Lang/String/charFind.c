#include<stdio.h>
#include<string.h>

void main(){
    char str[100], ch= 'q', *pos;

    printf("Enter The String: ");
    scanf("%s", str);

    pos = strchr(str, ch);

    if(pos){
        printf("'%c' is found at address %p\n",ch,pos);
    }else{
        printf(" '%c' is not found.\n",ch);
    }
}