#include <stdio.h>
void main()
{
    int rollNo;
    char div;

    printf("Enter div-rollNo : ");
    scanf("%c-%d", &div, &rollNo);

    switch (div)
    {
    case 'A':
    case 'a':

        switch (rollNo)
        {
        case 1 ... 20:
            printf("Iron Man");
            break;

        case 21 ... 40:
            printf("Thor");
            break;
        case 41 ... 50:
            printf("Captain America");

        default:
            printf("invalid rollNo...");
            break;
        }
        break;

    case 'B':
    case 'b':
        switch (rollNo)
        {
        case 1 ... 20:
            printf("Black Panther");
            break;

        case 21 ... 40:
            printf("Bat Man");
            break;
        default:
            printf("invalid rollNo...");
            break;
        }
        break;
    default:
        printf("invalid div...");

        break;
    }
}