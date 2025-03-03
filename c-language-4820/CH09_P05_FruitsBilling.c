#include<stdio.h>


struct Fruit{
    char f_name[100];
    char f_unit_name[100];
    float f_price;
    float f_total_price;
    float f_unit_quantity;
};

void main(){

    struct Fruit f[100];
    float final_total = 0;
    int i,n;

    printf("Enter the Numbers of Fruits : ");
    scanf("%d",&n);

    printf("\nEnter Fruit data : \n");

    for(i=0;i<n;i++)
    {
        printf("\nthe data of fruit %d : \n",i+1);
        
        printf("  Enter the Name of Fruit:- ");
        scanf("%s",&f[i].f_name);

        printf(" Enter the price of Fruit:- ");
        scanf("%f",&f[i].f_price);

        printf("Enter the unit name of Fruit:- ");
        scanf("%s",&f[i].f_unit_name);

        printf("Enter the quantity of fruit:- ");
        scanf("%f",&f[i].f_unit_quantity);

        f[i].f_total_price = f[i].f_unit_quantity*f[i].f_price;
    }
       printf("\n\n\n========= RECORD =============\n\n\n");

    printf("%3s | %15s | %6s | %6s | %5s | %8s \n", "Sr.", "Name", "Price", "Unit","Qnt.","Total");

    for (i = 0; i < n; i++)
    {
        printf("%3s | %15s | %6s | %6s | %5s | %8s \n", "---", "---------------", "------", "------","-----","------");
        printf("%3d | %15s | %4.2f | %6s | %4.2f | %5.2f \n", i + 1, f[i].f_name, f[i].f_price, f[i].f_unit_name,f[i].f_unit_quantity,f[i].f_total_price);
  
        final_total+= f[i].f_total_price;
    }

    printf("your final amount is %.2f\n",final_total);
}