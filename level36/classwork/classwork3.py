def count_symbols(main_str, str_to_search):
    h1 = main_str.count(str_to_search)
    print(f"'{str_to_search}' სთრინგი {h1}-ჯერ გვხვდება '{main_str}'-ში.")


count_symbols("h1", "a")
count_symbols("hello world, p", "bye")
count_symbols("98", "100")