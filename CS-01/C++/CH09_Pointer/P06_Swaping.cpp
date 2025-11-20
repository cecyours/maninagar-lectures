#include <iostream>
#include <cstring>
using namespace std;

void swapStrings(const char **str1, const char **str2) {
    const char *temp = *str1;  
    *str1 = *str2;      
    *str2 = temp;       
}

int main() {
    const char *string1 = "Hello";
    const char *string2 = "World";
    
    cout << "Before swap:" << endl;
    cout << "String 1: " << string1 << endl;
    cout << "String 2: " << string2 << endl;
    
    swapStrings(&string1, &string2); 
    
    cout << "\nAfter swap:" << endl;
    cout << "String 1: " << string1 << endl;
    cout << "String 2: " << string2 << endl;
    
    return 0;
}