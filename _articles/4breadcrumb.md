---
id: 4
title: "Breadcrumb"
subtitle: "A new way to store your ideas and inspiration"
date: "2023-08-27"
tags: "New Release"
---

# Breadcrumb - empowering your next creative project

This is a link to the website - [Breadcrumb](https://www.breadcrumb.live/)

I'll be honest - I'm not the most prolific when it comes to creating art. 
I used to store that inspiration on apps like Twitter and Instagram, but I'd find myself sucked into the feed. 

I wanted a way to store my ideas and inspiration in a way that was easy to access, and easy to add to. It needed to also 
make sure I could rediscover my ideas later on and build momentum on my projects. To that extend, that is what Breadcrumb does well.

# How I use Breadcrumb

Breadcrumb excels at capture.

I take pictures of things, record little songs / ambient noises, write down stray thoughts and spam them on my dashboard. 

I can then tag them with whatever I want and come back to them later. It's helpful like that. 

Tags which get often added to get a 🔥 emoji to let me know I am building momentum on it.

## Technical Details 

The front-end is written using Typescript, React and Vite. 

The back-end is just a bunch of Python REST APIs written using Flask all hooked up together using API Gateway. Authentication and Hosting is managed using Amplify and calls to the back-end are secured using JWT tokens. A lot of the heavy lifting to be done server-side for this project since there are so many write operations involved.

Blocks are stored in a DynamoDB table with attributes like tags and their value / URL. Every page has a unique index which can correlate with a block such as on Tags or the day you made them. GSIs are used to give the data another index to search on. I did it this way honestly because it was simple to do and I wanted DynamoDB to do as much filtering / lifting as possible. It somehow worked and you can search blocks by tags too. 

I haven't added in a cache in yet which is tragic nor other optimisations. I also have to do things like let you upload high quality / long audio and then playback a thumbnail / sample of it and give you an option to download it later but TBH, for a new project, it was so much fun to write and architect this. I learned so much and got to play with so much stuff I don't usually touch! 
