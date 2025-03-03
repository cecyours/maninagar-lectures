#include<stdio.h>

int result(char ch)
{
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
       ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
void main()
{
    char vowels;

    printf("Enter your char:- ");
    scanf("%c",&vowels);

    if(result(vowels))
    {
        printf("vowels..");
    }
    else
    {
        printf("consonent..");
    }
}