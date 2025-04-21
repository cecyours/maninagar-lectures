#include <stdio.h>
int main()
{
    enum month
    {
        jan = 1,
        feb,
        mar,
        apr,
        may,
        jun,
        jul,
        aug,
        sept,
        oct,
        nov,
        dec
    };
    int m;
    printf("  january : %d\n", jan);
    printf(" february : %d\n", feb);
    printf("    march : %d\n", mar);
    printf("    april : %d\n",apr );
    printf("      may : %d\n",may );
    printf("     june : %d\n", jun);
    printf("     july : %d\n", jul);
    printf("   august : %d\n", aug);
    printf("september : %d\n", sept);
    printf("  october : %d\n", oct);
    printf(" november : %d\n", nov);
    printf(" december : %d\n", dec);
    
    printf("Enter the month : ");
    scanf("%d",&m);

    if(m==jan)
    {
        printf("this is the first month of the year");
    }
    else
    {
        printf("this is not the first month of the year");
    }
    if (m>=apr && m<=jun)
    {
        printf("this month is in the first quarter");

        /* code */
    }
    
    else if (m>=jul && m<=sept)
    {
        printf("this month in the second quarter");
    }
    else if (m>=oct && m<=dec)
    {
        printf("this month is in the third quarter");
    }
    else
    {
        printf("this month is in the fourth quarter");
    }
}