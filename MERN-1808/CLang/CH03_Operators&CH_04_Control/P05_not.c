#include<stdio.h>

void main(){

    const float OTP = 12345;
    float user_OTP;

    printf("Enter OTP: ");
    scanf("%f", &user_OTP);


    if(!(user_OTP == OTP)){
        printf("Invalid OTP");
    }else{
        printf("Wlcome......%.0f\n",user_OTP);
    }
    
}