---
id: 3
title: "KaizenTimer"
subtitle: "A New Project by Me"
date: "2023-06-28"
tags: "manual, kaizentimer, project docs"
---

# Welcome to KaizenTimer!

First of all, thank you for checking out my app. I hope it helps you as much as it helps me.

## What is KaizenTimer?

It's a super minimalist timer web application that lets you add lots of timers *shrugs*.

That's pretty much it. I was really upset with the options available online because they were so crowded and unfriendly, and the only good ones were behind some app subscription paywall. So I made my own, and honestly, it's perfect!

Like seriously, what on Earth is going on here:


(This one gives you a pop-up in 5 seconds)


Google, you are not helping...

Now, feast your eyes on this:

Much nicer. Straight to the point too!

## How do I use it?

It's a timer app. Just hit play and go.

## How do I get more timers?

You'll have to sign up, and you get 3 timers. No complaints: it's a minimalistic timer app.

If you really want to use multiple timers and don't want to sign up, reach out to me at @kindaburgundy and let me know. I preferred having my timers synced across my devices, so I disabled local storage saving.

# Why did I make this?

I made this because of a few things:
1) I wanted to get in the habit of building again. I am a creative, and I am happiest when I am creating things. This is a thing, and I hadn't created in a few months. I am super chuffed that I built something I use a lot.
2) I wanted to update my front-end skillset. This is the first app I've ever written which uses AWS, Tailwind CSS, and a whole bunch of other tech. This is also the first app I've written entirely off Vim as my main editor.

# What is my take on the work?

The back-end integration with the auth, GraphQL integration, and user management just came out how I needed it to. I am super stoked to get this right: this boilerplate boring stuff probs will get reused in future projects.

There are a few mistakes I made. So, I read Refactoring UI prior to doing this, and I made the mistake of not designing for the smallest screen first, which is why the mobile version is kinda borked. Once again, if you want me to fix it, let me know @kindaburgundy, but I am not that fussed because it works fine on my iPad and laptop, but for you, I'll do it :) Another mistake is I didn't add any social provider login systems. Not really a big mistake, but that kinda stops my dad from using my app because he HATES doing sign-up forms.

Another more egregious mistake was wanting to build for two customers at the start. Originally, I was going to add ChatGPT support so you could talk to an AI coach after your tasks. It occurred to me: I have no clue if that's what people wanted because I didn't really talk to anyone. However, I was also building it so I had something I could kick off future projects using. So I decided to spec heavily into the second use case. At least in the future, I will have boring stuff like DB integrations, Authentication, etc. all sorted out and coded.

The app is pretty much automated tested from top to bottom, believe it or not. It was a real joy using Cypress. I watched Ian Cooper's take on TDD and decided to implement some of the ideas into the process. This meant going away and figuring out what I wanted to build, how it would need to be, and writing tests to do this. A lot of time was spent doing stuff on paper and pen, but the result was a really smooth process (and best of all, reusable functionality.) The entire Red, Green, and Refactor idea is great - it meant I at least got something working before I decided to look at API calls to optimize everything out - in the past, I know I wouldn't have done that.

# What is next?

I think the real strength of this project is the simplicity. I wrote it with a lot of love and consideration for the way I work, so I hope you find it useful too. Under the hood, there's a lot of engineering decisions, and while the stack I decided to use isn't used much, I really think people should consider using AWS for their indie projects purely because of the incredible level of freedom you get. With that in mind, I am in the process of stripping things out and writing a boilerplate version of this code so people can adopt it quicker. The fact I could get an API running in like hours and send data back and forth is just too powerful and something I'll be using.

