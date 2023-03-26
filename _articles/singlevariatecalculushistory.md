---
id: 1
title: "The History of Single Variate Calculus"
subtitle: "How we went from counting rocks to single variate calculus"
date: "2023.03.20"
tags: "math"
---

Going from counting sticks to Single Variable Calculus

Context: My sister is doing her A Levels and finds it incredibly boring. I wrote this to show that the story of Math is incredibly fun. Maths is a beautiful story about the creativity of humans and not just a solve x to find y deal.

I haven't figured out how to put images on this blog so I will stick with high-level concepts, linking proofs and fun things to go deeper on.

I also showed this to my friends.

Note:

I realise I probably made some mistakes. If I did, then call me out. I can only get better from here.

Without further ado, here we go:

Let's start at the end: why was Single Variable Calculus invented?

We invent techniques in math to solve problems. The problems we wanted to solve were the Tangent Problem (which gives us differentiation) and Area Problem (which gives us integration.)

Using these techniques, we are able to find the rate of change of a variable (differentiation) or add up the area of a curve to find out a certain quantity. If we restrict these techniques to a single variable such as y = x (where x is the single variable) - you get single variable calculus

# The Tangent Problem
This problem states that you can find the rate of change between two points in a curve if you bring the points really really close to each other and calculate the slope there. How close? Very very close. So close, we can't put a number on it.

# The Area Problem

This problem states that you can find the area under a curve by dividing up the area of the curve into small rectangles. The smaller the rectangles, the more accurate you are. How small? Very very small. So small, we can't put a number on it.

How did we solve this issue?

To create a number which "approaches" another number (this means a number which isn't the same as the number we want to approach but very very close to it), we have to create a few things:

1. We had to create a number system - the integers worked fine.
2. There are numbers between numbers - the rationals
3. There are numbers between the numbers stated in Point 2 - the irrationals
4. There are more gaps and smaller numbers between that - limits

# Counting - 50,000 Years Ago

Counting was invented in order to track goods. Sumerians would walk around with clay tablets - marks usually denoted the quantity of something.

The Sumerians used a Base 60 system so their numbering system was very different to how it is today. The Egyptians were the first to use a Base 10. Despite this, the usage remained the same. This gleans a very important property of the numbering system: it doesn't matter how it's counted, what matters is that you have a definite separation between the units. This means you can play around with the numbering system.

This is an important property because single-variate calculus is very interested in what happens in the gaps between numbers.

# Fast Forward to the 600 BC

At some point, a whole bunch of Greek mathematicians such as Pythagoras and Hippasus figured by taking two numbers and dividing them over each other, you can create a number which is between two numbers. Enter rational numbers.

A rational number is denoted by Q. It's a quotient of two integers (p over q, where q is greater than 0.)

Rational numbers are great - they let us calculate fractions so now, we can divide things amongst people nicely. Yay!

# Rationals are not enough

They have limitations. Say a bunch of farmers were counting up their stock every season and they plotted it out. They wanted to know the rate of change between one month and the next month (this would give the growth of crops in a way which wasn't visual.) They ran to the local mathematician (the Greeks were cool like that) and asked them to come up with this problem.

So the mathematician took out his ruler and started working out the distance between two points. As he got closer, he discovered that he ran out of rational numbers, he needed something a lot smaller. There were numbers that couldn't follow the pattern of p / q neatly. These are the irrationals. And they're great.

Proof that there is an irrational number between two numbers

A great wiki of proofs is https://proofwiki.org/wiki/Between_two_Real_Numbers_exists_Irrational_Number

Irrational numbers let us get up close and personal

We can conclusively say now that irrationals do exist, and sit between any two numbers, we can always say that there is a smaller number between the gap between two numbers. This gives us a very important thing: a limit.

Hm. Could we use limits to approach a value on the curve to find a rate of change between a point and a small increase of that point? Yes, we can!


# Epsilon-Delta Definition of a Limit

Read this before carrying on: https://calcworkshop.com/limits/epsilon-delta-definition/

This scary-looking thing basically means that on a graph, between two points, we can always find another point on the curve that approaches the limit. Huzzah! We don't need to bother finding a smaller number to calculate our difference between two points cause there will ALWAYS be a smaller gap on our curve.

Using this, we can create the Limit definition of differentiation (http://www2.gcc.edu/dept/math/faculty/BancroftED/teaching/handouts/differentiation.pdf)


# What about the Area Problem?

Remember how we use areas of rectangles below a curve to find the area?

This is formally defined as a Riemann Sum.

Let's pick a number of rectangles so unbelievably large, you couldn't come up with a number cause the number used is larger than that. This would mean the area of the rectangles would be incredibly tiny. This is formally known as infinity.

This gives us the Riemann Integral and it's smoooooth.

There is also Lebesgue integration which basically lets you integrate on way more things as well.