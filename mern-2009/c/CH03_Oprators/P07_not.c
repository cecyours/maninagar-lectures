#include <stdio.h>

int main()
{

    const float OTP = 871199; // float because, out of int's range.
    float user_OTP;


    printf("Enter the OTP : ");
    scanf("%f", &user_OTP);
    
    if (!(user_OTP == OTP))
    {
        printf("Invalid OTP");
        return 0;
    }
    printf("Welcome .... %.0f\n", user_OTP);

    
}