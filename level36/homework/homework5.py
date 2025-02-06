def get_lengths_of_strings(str_list):
    return [len(s) for s in str_list]

strings_list = ["apple", "banana", "cherry"]
lengths = get_lengths_of_strings(strings_list)
print(lengths)