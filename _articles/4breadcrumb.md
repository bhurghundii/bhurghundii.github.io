---
id: 4
title: "Breadcrumb"
subtitle: "A Social Media Network Where It's Just You"
date: "2023-08-27"
tags: "social media, Breadcrumb, New Release"
---

# Show the 🌎: Breadcrumb

Breadcrumb is a digital scrapbook with some social media-lite features. 

The best to describe how it works is that it's basically just Pintrest except it's just you. This means that the way one interfaces with it is like a social media platform in the sense it lets you create posts and search for posts. However, on Breadcrumb, you are the only person in your network. I felt by designing it this way, I could make someone more attentive to the world around them as they attempt to find inspiration in there.

## What is the problem that Breadcrumb tries to solve?

Breadcrumb saves time for creatives by forcing you to accept how boring you really are. I wish I was kidding: just seeing a blank board every single day was more than enough to get me spurred into action!

To put it bluntly: modern day social media is a disease for creatives. What used to be a fantastic way to share ideas and connect with our friends has hijacked our attentions and we've been inundated in an Infinite Jest-esque endless reel of content designed to keep our fingers scrolling. This is a big problem for creatives: we need to share our projects and ideas out there but I suspect that most of the time, we are posting about 5% of the time and consuming 95% of the time.  

I find this system incredibly liberating: I don't have to worry about follower counts, I can very freely share my ideas, capture inspiration from the physical and digital world, and I feel like I have developed a far better relationship with myself. 

## Feed your creativity, don't kill it

To say you are alone is a lie: you have your past selves to talk to. In Breadcrumb, the idea is that the algorithm here would resurface your posts and ideas from the past to inspire you. For example, a small sketch on the back of a napkin would usually be forgotten very easily once your attention is pulled away. You wouldn't post it anywhere else because it's shit. But on Breadcrumb, this idea can resurface later and form inspiration and action on a new project. 

As a programmer, I also use Breadcrumb to write down problems I spot in the wild. These ideas have resurfaced at later dates and in just one look, I can act on them. It's been so incredibly helpful to do this with problems at work!

## What is next? 

The only algorithm available ATM is the ability to look at your posts from days earlier currently. 

Here is what is coming up:

1) More support for different types of posts like Images and Audio
2) Hashtag and searching
3) Recurring Posts that you can set automatically 
4) Algorithm for resurfacing ideas organically and a smart way

## Technical Details 

Breadcrumb is a reflection of the growth in my career in the sense that it's far more back-end intense than my earlier designs. The front-end is written using Typescript, React and Vite and the back-end is just a bunch of Python APIs written using Flask all hooked up together using AWS. Authentication and Hosting on the client side is handled using Amplify and the back-end is secured using JWT tokens. I wanted a lot of the heavy lifting to be done server-side for this project since there are so many write operations involved. I need to add some more things like a cache but given like, 10 people use this, I am not exactly in a rush to get that figured out.

I broke down KaizenTimer to create a front end template to fast forward a lot of the user account stuff and it all worked out so won't lie: very happy that all worked out! I did wind up scrapping Tailwind cause it was annoying me a lot.