def sentence_to_words(sentence):
    words = sentence.split()
    return words

sentence = input("Enter a sentence: ")
words_list = sentence_to_words(sentence)

print("List of words:", words_list)
