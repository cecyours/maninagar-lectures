#include <stdio.h>
void main()
{
    int rollno;
    char div;

    printf("Enter div-rollno : ");
    scanf("%c-%d", &div, &rollno);

    if (div == 'A' || div == 'a')
    {
        printf("sports cars group : \n");
    }

    

    switch (div)
    {
    case 'A':
    case 'a':
        switch (rollno)
        {
        case 1 ... 20:
            printf("\t\tBuggati");
            break;

        case 21 ... 40:
            printf("\t\tPagani");
            break;

        case 41 ... 60:
            printf("\t\tKoenigsegg");
            break;

        default:
            printf("invalid rollno..");
            break;
        }
        break;

    case 'B':
    case 'b':
        switch (rollno)
        {
        case 1 ... 20:
            printf("BMW");
            break;
        case 21 ... 40:
            printf("Mercedes");
            break;
        case 41 ... 60:
            printf("Lamborgini");
            break;

        default:
            printf("invalid rollno..");
            break;
        }
        break;
    case 'C':
    case 'c':
        switch (rollno)
        {
        case 1 ... 20:
            printf("Kawasaki");
            break;
        case 21 ... 40:
            printf("GT-650");
            break;
        case 41 ... 60:
            printf("BMW S1000 RR");

        default:
            printf("invalid rollno..");
            break;
        }

        break;
    default:
        printf("invalid div..");
        break;
    }
}