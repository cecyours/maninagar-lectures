### Task: 1 Function Without Argument but With Return (Find Cube)

```cpp
#include <stdio.h>

int cube() {
    int n = 3;
    return n * n * n;
}

int main() {
    int result = cube();
    printf("Cube = %d", result);
    return 0;
}
```
#### Output:
```
Cube = 27
```


### Task: 2 Search an Element in Array

```cpp
#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int search = 30, found = 0;

    for(int i = 0; i < 5; i++) {
        if(arr[i] == search) {
            found = 1;
            break;
        }
    }

    if(found)
        printf("%d found in array.", search);
    else
        printf("%d not found in array.", search);
    
    return 0;
}
```
#### Output:
```
30 found in array.
```

### Task: 3 String Concatenation using function 
```cpp
#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello ";
    char str2[20] = "Tanvi";

    strcat(str1, str2);
    printf("After Concatenation: %s", str1);
    return 0;
}
```
### Output:
```
After Concatenation: Hello Tanvi
```

### Task: 4 Write a program to perform the following string operations using string handling functions:
- Concatenate two strings using strcat()
- Compare two strings using strcmp()
- Reverse a string using strrev()

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str1[30] = "Hello";
    char str2[30] = "World";
    char str3[30];

    // Concatenate two strings
    strcat(str1, str2);
    printf("After Concatenation: %s\n", str1);

    // Compare two strings
    int result = strcmp(str1, str2);
    if(result == 0)
        printf("Strings are Equal\n");
    else
        printf("Strings are Not Equal\n");

    // Reverse string
    strcpy(str3, str1);     // Copy str1 to str3 before reversing
    strrev(str3);
    printf("Reversed String: %s\n", str3);

    return 0;
}
```

### Output:
```
After Concatenation: HelloWorld
Strings are Not Equal
Reversed String: dlroWolleH
```