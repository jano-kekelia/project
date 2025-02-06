def count_word_occurrences(text, word):
    return text.lower().split().count(word.lower())

text = "This is the example text. The word 'the' appears twice in this text."
word = "the"
count = count_word_occurrences(text, word)
print(f"The word '{word}' appears {count} times in the text.")