#include <stdio.h>

int main()
{
    // Using \t (tab) and \n (new line)
    printf("Hello wo\trld \nThis is a new line.\n");

    // Using \r (carriage return), \f (form feed), and \b (backspace)
    printf("12345\rABCDE\f909\b763\n");

    // Using \a (alert/beep sound, may not work in some environments)
    printf("This is an alert sound\a\n");

    // Using \" (double quotes inside a string)
    printf("This is C \"programming\" language.\n");

    return 0;
}
