#2-10
def hello_world():
    print("Hello, World!")

def sum_numbers(a, b):
    print(a + b)

def multiply_by_10(number):
    return number * 10

def greet(name="Guest"):
    print(f"Hello, {name}!")

def outer_function():
    def inner_function():
        print("This is the inner function!")
    inner_function()

outer_function()

def check_even_odd(numbers):
    for num in numbers:
        if num % 2 == 0:
            print(f"{num} is Even")
        else:
            print(f"{num} is Odd")

def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num

def filter_positive(numbers):
    positive_numbers = []
    for num in numbers:
        if num > 0:
            positive_numbers.append(num)
    return positive_numbers

def sum_divisible_by_3():
    total = 0
    for num in range(1, 101):
        if num % 3 == 0:
            total += num
    return total
