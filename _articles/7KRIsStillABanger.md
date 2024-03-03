---
id: 7
title: "K&R is still a banger"
subtitle: "Goin' back to Tangier with some Jordans and a spear"
date: "2023-01-12"
tags: "book review, programming, C"
---

K&R is a book about C programming written by the dudes who actually wrote the language. It's a masterpiece in concise writing, capable of going over the entire language in a few hundred pages.

# The Good

K&R's strength is the exercises. There is enough meat in the pages to explain how to write C code and understand what is going on under the hood but K&R knows that no matter how many pages you write, it can't explain the complexity that comes with writing real C code. C is a language which is best written with the awareness of the underlying hardware and K&R damn well makes sure you get that. 

From Chapter 5, the book starts to get into the complexity of C, which is the actual working with the memory manually. C does manual memory management and that means you got pointers and immutable arrays you have to declare on init. It's probably got the best explanation of pointers I've ever read. Towards the end, you are implementing your own malloc and free functions that come with the standard library on Unix systems.

# The Bad

It's an old book. I'd be liar if I said it was going to be sufficient to learn how to program C. I'd argue it's not even that good at teaching you modern C and you are better off just going off on Youtube and building projects (which is ironically the best way to learn any language IMO). A lot of ideas are outdated and there are a few yeesh moments in the book. 

To that extent, reading the book is more akin to why you'd read the Wealth of Nations. It's not to learn economics, it's to understand the history of economics. K&R is that, except for one of the most fundamental languages in the world.

# The Ugly 

Have fun trying to run some of the programs from the book on modern machines. On my M1 Mac, some of the libs are deprecated or renamed and I had to do some workarounds to get the code to run. 

# Conclusion

This book is the Illmatic of programming books. If you are really bored, take a crack.