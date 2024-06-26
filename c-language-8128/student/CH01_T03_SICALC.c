#include<stdio.h>
void main()
{
    int P,R,T;
    float SI;
    printf("enter values of P,R,T : ");
    scanf("%d,%d,%d", &P,&R,&T);

    SI = (P*R*T)/100;
    printf("SI = %.2f",SI);

}