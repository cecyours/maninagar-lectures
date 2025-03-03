#include<stdio.h>
struct billing
{
    char fruit_name[100];
    int fruit_quantity;
    int subtotal;
    int total;
};
void main()
{
    struct billing b[100];
    int n, i;

    printf("Enter the number of fruit:- ");
    scanf("%d",&n);

    printf("Enter fruits data\n");
    for(i=0;i<n;i++)
    {
        printf("\nEnter the data of fruit %d\n",i+1);

        printf("  Enter the Name of Fruit:- ");
        scanf("%s",&b[i].fruit_name);

         printf(" Enter the Quantity of Fruit:- ");
        scanf("%d",&b[i].fruit_quantity);

         printf("Enter Subtotal of Fruit:- ");
        scanf("%d",&b[i].subtotal);

         printf("Total Fruit:- ");
        scanf("%d",&b[i].total);
    }

    printf("\n\n\n------------BILLING------------\n\n\n");
    printf(" %5s | %12s | %15s | %9s | %7s\n","Sr.no","Fruit_name","Fruit_quantity",
            "Subtotal","total");

    for(i=0;i<n;i++)

    printf(" %5s | %12s | %15s | %9s | %7s\n","-----","------------","---------------","---------","-------");
    printf(" %5d | %12s | %15d | %9d | %7d\n",i+1,b[i].fruit_name,b[i].fruit_quantity,
                                              b[i].subtotal,b[i].total);
}