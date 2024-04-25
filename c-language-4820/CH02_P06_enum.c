#include <stdio.h>
void main()
{
    enum days{MONDAY=20,TUESDAY,WEDNESDAY=300,THURSDAY,FRIDAY,SATURDAY,SUNDAY=199};
    // clrscr();

        printf("   MONDAY : %d\n",MONDAY);
        printf("  TUESDAY : %d\n",TUESDAY);
        printf("WEDNESDAY : %d\n",WEDNESDAY);
        printf(" THURSDAY : %d\n",THURSDAY);
        printf("   FRIDAY : %d\n",FRIDAY);
        printf(" SATURDAY : %d\n",SATURDAY);
        printf("   SUNDAY : %d\n",SUNDAY);
    // getch();
}