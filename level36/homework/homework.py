def convert_list_to_uppercase(str_list):
    return [s.upper() for s in str_list]

lowercase_list = ["apple", "banana", "cherry"]
uppercase_list = convert_list_to_uppercase(lowercase_list)
print(uppercase_list)