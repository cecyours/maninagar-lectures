#include <stdio.h>

void main()
{

    enum month
    {
        jan = 1,
        feb,
        mar,
        april,
        may,
        jun = 90,
        jul,
        aug,
        sep,
        oct,
        nov,
        dec,
    };

        printf("JANUARY : %d\n", jan);
        printf("FEBUARY : %d\n", feb);
        printf("MARCH: %d\n", mar);
        printf("APRIL: %d\n", april);
        printf("MAY: %d\n", may);
        printf("JUNE : %d\n", jun);
        printf("july: %d\n", jul);
        printf("august: %d\n", aug);
        printf("september: %d\n",sep );
        printf("octomber: %d\n",oct );
        printf("november: %d\n",nov );
        printf("december: %d\n",dec );
    }
