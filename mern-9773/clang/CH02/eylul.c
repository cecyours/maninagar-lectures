#include<stdio.h> 

int main(){

    char text[] = "programming"; // string
    int num = 30;
    double data = 346.4565;

    printf("text : %s\n\n" ,text); // %s for string
    printf("  num : %d\n" ,num); // %d for decimal
    printf("  num in octal : %o\n",num);
    printf("num is hexadecimal : %x\n\n" ,num);
    printf("data with %%lf : %lf\n" ,data);
    printf(" data with %%e : %e\n" ,data);

    return 0;
}
