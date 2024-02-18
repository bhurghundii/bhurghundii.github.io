---
id: 4
title: "Introducing the /aiok.txt endpoint"
subtitle: "Developers, developers, developers"
date: "2023-11-03"
tags: "software"
---

My passion for making the Internet more accessible has led me to suggest a new endpoint for the web.

# LLMs are going to be the future of accessibility on the Web 

A post on HN showed me that people with visual and motor impairments are using LLMs to read content and interact with it. However, this means the content has to be accessible in the first place. Not all websites are scrape friendly, even if you use something like an LLM.

That's where the /aiok.txt endpoint comes in.

# What is the /aiok.txt endpoint?

Just like a robots.txt file, the /aiok.txt endpoint is a file that tells the LLM how to interact with the website. It's a simple text file which outlines the buttons, the links and the content on the website so it has context to read and interact with it. 

The idea here is that the LLM can read the /aiok.txt file and then use it to better reason when it's reading the website content. 

# How does it work?

Just add a file to the root of your website called aiok.txt. In this file, you can add the following:
1. How your website is structured
2. What are the main flows of your website
3. What are the main buttons and links on your website
4. What are the main content areas on your website