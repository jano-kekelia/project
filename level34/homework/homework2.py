def find_maximum(numbers):

    if not numbers:
        raise ValueError("The list is empty. Please provide a list with at least one number.")
    return max(numbers)


numbers_list = [3, 7, 2, 8, 5, 10]
maximum_value = find_maximum(numbers_list)
print(f"The maximum value in the list is {maximum_value}")