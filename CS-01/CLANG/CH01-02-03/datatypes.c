#include <stdio.h>

// This program demonstrates various data types in C
int main()
{

    // Primary (Basic) data types
    int integerValue = 10;
    float floatValue = 3.14f;
    double doubleValue = 123.456789;
    char charValue = 'A';

    // Derived data types
    int intArray[5] = {1, 2, 3, 4, 5}; // Array
    int *ptr = &integerValue;          // Pointer

    // Displaying values
    printf("Integer: %d\n", integerValue);
    printf("Float: %.2f\n", floatValue);
    printf("Double: %.6lf\n", doubleValue);
    printf("Character: %c\n", charValue);

    // Array access
    printf("Array Elements: ");
    for (int i = 0; i < 5; i++)
    {
        printf("%d ", intArray[i]);
    }
    printf("\n");

    // Pointer usage
    printf("Pointer Value (address of integerValue): %p\n", ptr);
    printf("Pointer Dereferenced Value: %d\n", *ptr);

    // int float char double long unsigned signed short
    // void if else for do while switch break
    // default return case goto continue struct union enum
    // auto static register extern sizeof typedef const volatile

    return 0;
}
