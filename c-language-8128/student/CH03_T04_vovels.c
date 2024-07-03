#include<stdio.h>
void main()
{
    char ch; // 'a', 'e', 'i','o','u' => 'vovels', 'const..'

    printf("enter the character : ");
    scanf("%c",&ch);

    
    if (ch=='a' || ch=='e' || ch=='i'|| ch=='o' || ch=='i')
    {
        printf("%c is vovels..",ch);

    }
    else
    {
        printf("%c is constants..",ch);
    }
    
    

}