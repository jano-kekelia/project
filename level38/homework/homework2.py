#4-5-6
input_string = input("Enter a string: ")

if input_string.isupper():
    print("The string is all uppercase.")
else:
    print("The string is not all uppercase.")

def is_uppercase(input_string):
    return input_string.isupper()

input_string = "HELLO"
print(is_uppercase(input_string))  

input_string = "Hello"
print(is_uppercase(input_string))  

user_input = input("Enter a string: ")

if user_input.isupper():
    print("The string is in uppercase.")
else:
    print("The string is not in uppercase.")
