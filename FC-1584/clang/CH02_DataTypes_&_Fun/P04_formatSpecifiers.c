#include<stdio.h>

void main(){
    char text[] = "programming";
    int num = 30;
    double data = 121.6788;

    printf("text : %s\n\n", text);
    printf("num: %d\n", num);
    printf("num in octal: %o\n", num);
    printf("num is hexadecimal : %x\n\n", num);

    printf("data with %%lf : %lf\n", data);
    printf("data with %%e : %e\n", data);
}