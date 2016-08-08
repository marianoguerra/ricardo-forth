#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

void run(int a, int b) {
    int result = add(a, b);
    printf("add 1234 + 4321: %d!\n", result);
}

int main(int argc, char** argv) {
    run(1234, 4321);

    return 0;
}
