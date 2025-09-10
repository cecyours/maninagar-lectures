#include<stdio.h>

int num;
void main()
{
    enum day {Mon = 1, Tue, Wed, Thu = 101, Fri, Sat};

    

    printf("%d\n",num);

    printf(" Monday : %d\n", Mon);
    printf("Tuesday : %d\n", Tue);
    printf("Thursday : %d\n", Thu);
    printf("Saturday : %d\n", Sat);
}