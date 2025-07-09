#include <stdio.h>
#include <conio.h>
#include "mine.h"
int main()

{

    // Compile time
    char str1[] = "Computer";                        // also work with size.
    char str3[4] = {'H', 'o', 'm', 'e'};             // gives garbage string due to absent of NULL position.
    char str4[10] = {'w', 'o', 'r', '\0', 'l', 'd'}; // display wor, l,d will terminated by \0
    char str5[5] = {'l', 'i', 'f', 'e'};             // 1 extra size for NULL

    printf("str1 : %s\n", str1);
    printf("str3 : %s\n", str3);
    printf("str4 : %s\n", str4);
    printf("str2 : %s\n", str5);

    // Run Time
    char name[100];
    char str6[100];

    printf("Enter the str6 : ");
    getLineInput(str6, sizeof(str6));  //use of getLineInput

    printf("Enter the str1 : ");
    scanf("%s", name);
    printf("\n ------------- \n");
    printf("str6 : %s\n", str6);

    printf("str1 : %s\n", name);

    return 0;
}
