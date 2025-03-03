#include<stdio.h>
void main()
{
    char input;
    printf("Enter the character:- ");
    scanf("%c",&input);

    if(input == 'a'|| input =='e' || input == 'i' || input == 'o' || input == 'u')
    {
        printf("its vowels");
    }
    else{
        printf("its consonent");
    }
}