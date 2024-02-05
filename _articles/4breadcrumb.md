---
id: 4
title: "Building things as a way out of malaise"
subtitle: "Wake up honey, a new coping mechanism has  dropped"
date: "2023-08-27"
tags: "release"
---

# Breadcrumb - organise your photos, voice clips and notes with just a hashtag

This is a link to the website - [Breadcrumb](https://www.breadcrumb.live/)

Breadcrumb is an app which lets you upload things like photos, voice clips and notes. 

You then can very quickly organise them by adding a hashtag to all your things. No need to think about folder hierarchies or creating a new album - just one word and you are done.


![photoroll](/images/breadcrumb.png)

## Why did I make this?

I am the kind of person who takes a lot of photos. And when I say a lot of photos, I mean a lot. The worst part is as WhatsApp user, all the photos people send me gets into my Albums. I will not lie: my photo roll is pretty useless. 

![photoroll](/images/photoroll.png)

This really sucks: as an artist, I have to annoyingly scroll up and look for it.

# You could just use Albums or use the AI tagging systems? 

Great question and during my research, I found out that people were asked this too.

![funnygoogle](/images/funnygoogle.png)

Fundamentally, the problem is that when I take a photo of a cake or something, I usually want to use it for a different purpose than just it being a cake.
Cause of my need for this, I have so many genres of photos and notes: sometimes a photo will be for my attempts to understand anatomy and sometimes, it will be for a natural landscape I'd like to do later. 
I desperately wanted that fine-grained ability to organise stuff.

# Instagram and social media have got this right

Incredibly, the only app I found which actually helped me do this was Instagram because I could use Hashtags in the photo description and search from there. It was so easy and offered that really easy inteface to work through. No more "Create a new Album" for me!

# And that's not all!

I wanted the ability to also commentate on my photos too. Personally, I take a lot of voice notes. For a while, I have had to articulate my thoughts on a different app but not anymore! Breadcrumb lets you group the voice notes AND your photos in one place which is just magical for me: it's amazing to be able to go into design meetings and just take a photo of what we are talking about, then just record hte meeting on my phone and just group them both for later playback together. Really helps you focus on the important stuff!

# How I use Breadcrumb

Breadcrumb excels at organising things super quickly.

I take pictures of things, record my thoughts by speaking them out, write down stray thoughts and spam them on my dashboard.

I can then tag them with whatever I want and come back to them later. It's helpful like that. 


## Technical Details 

![breadcrumbarch](/images/breadcrumbarch.png)

It's just a simple 3 tier architecture: theres a user facing front-end, which talks to a bunch of services which sit behind an API gateway and those services do stuff for the user. Nothing fancy (yet (?) !) 

The front-end is written using Typescript, React and Vite. This is the first time I have used Vite in a serious way and I have to say I love it very much because the build times are just so ⚡️ snappy ⚡️  

I think I will use Vite as my go-to build tool because I love how compatible it is with the I do my React code.

The application back-end is just a bunch of Python REST APIs written using Flask all routed to using API Gateway. 

Authentication and Hosting is managed using Amplify and calls to the back-end are authenticated using JWT tokens using the Amplify managed Userpool. This part was really surprising to me - it was very easy to get this set up (I was expecting to do some weird stuff because this managed by Amplify.)

Metadata is stored in a DynamoDB table with attributes like the tags themselves. S3 is used to store media files. Nothing crazy. 

I used a GSI on the tags to give the app the search feature. I did it this way honestly because it was simple to do and I wanted DynamoDB to do as much filtering / lifting as possible. It works but I admit it isn't that great because you can only use one tag per item (for now.)

## Improvements

*Note: I am 100% going to do these things. I need this app more than any of y'all* 

In terms of actual feature work... I have to do things like let you upload high quality / long audio and then playback a thumbnail / sample of it and give you an option to download it later. I have been given some really good feedback on layouts and usability too so easy does it.

In terms of improvements which were not necessary but I wanted to do... I regret not picking GraphQL for this and instead opting for REST APIs. It became painfully clear later that I needed the flexibility of GraphQL to do things like search and filter. I will probably do this later.

# Retrospective 

To this date, Breadcrumb is being used by pretty much nobody. All the early users have stopped using it - including myself. That is OK - this post is all about a honest reflection.

# Breadcrumb was made for nobody other than myself, and I did poor research into solving my own problem

I think this is why a lot of the people who signed up eventually dropped off. At the start, I didn't really have a persona in mind. I just wanted to solve my own problem. And TBH, that's OK? I think it's OK to build something for yourself. In that sense, I think I was successful. I built something that I wanted to use. Good job!

LESSON 1: Be honest with your goals. Retrofitting is bad.
LESSON 2: Figure out who your honest users are. Find out where they are.

# The friction of existing solutions < using Breadcrumb 

One thing in app design I did not consider the alternatives... or how easy the alternative of just uploading all my media to Apple Notes with a title was. Hell, if I read the Photos docs a bit better, I would've noticed you could've just added a caption and sorted it. It really was exactly the same as Breadcrumb but had the added benefit of being on a native web app. 

LESSON 3: If you are going to build something, make sure it has less friction than the current solution.
LESSON 4: Solve your problem before coding the solution. And when you solve your problem, read the docs.

# Build to learn, not to ship

Given I made this app for myself, I feel like this lesson is a bit of a moot point. But I think it's worth mentioning. If I were to build for someone or even myself, I would start by creating an MVP using a wiremock with Figma or something. Make it super nice and see if there is an audience in there first. I made the mistake assuming a working prototype IS the MVP.

LESSON 5: An MVP doesn't have to work. It can literally be a screen shot. You can ship a screen shot.
LESSON 6: The most valuable work you can do is getting feedback from your users. Ship it on social media, ship it on Product Hunt / Reddit / Hacker News. Get feedback. Don't bother starting until you have some signal or unless you feel really really strong about it (in that case, just pull the trigger and ship it.)

# Actions 

I think I will get practice releasing stuff on Product Hunt and sharing my work. I got a working product here so I can share it on places like Reddit and stuff. That's a good start. 