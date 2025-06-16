#include <stdio.h>
#include <conio.h>

int main()
{

    int num;
    printf("Enter ASCII Value : ");
    scanf("%d", &num);
    textattr(13); // 13 is color code for pink.
    cprintf("%d -> %c\n\r", num, num);

    return 0;
}
