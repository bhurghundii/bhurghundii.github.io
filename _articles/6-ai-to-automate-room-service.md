---
id: 6
title: "Using AI to automate room service"
subtitle: "The origin story of Albert"
date: "2026.01.13"
tags: "Albert"
---

Fun fact: Albert, the AI companion for lonely elderly people, originally started out as a room service system for people at a care home.

I wanted to go over the engineering behind it—and how a failed automation project accidentally became something much more meaningful.

# The Starting Point

My family business is palliative care. We look after people who are at the end of their life to people living with dementia. That kind of environment can be demanding and people need a lot of attention. The staff are constantly moving between residents, managing medication schedules, coordinating with families, and responding to immediate needs.

So, we figured that we could probably try and use AI to help get people's requests to the right place. The goal was simple: make the system more responsive and free up staff time for the things that actually needed human attention.

# Current System 

All residents have the ability to call for help in the form of a button by their beds. The problem is that someone presses the button, someone comes over, has to triage the issue and then sort it out. The problem lies in the fact someone might take ages to get around sorting them out. 

Here's how it typically goes:
1. Resident presses the button
2. Staff member sees the alert but is busy with another resident
3. Staff member finishes what they're doing (5-15 minutes later)
4. Staff member walks over to find out what's needed
5. If it's something they can't do themselves (e.g., "I want to call my daughter"), they have to relay that to someone else
6. Eventually, it gets sorted

This system has poor responsiveness: you click the button, and nothing seems to happen. For someone with dementia, this wait time can mean they forget why they pressed it in the first place. For everyone else, it's just frustrating.

We figured that AI could help make the process more streamlined by doing the triage step automatically and routing requests to the right person immediately.

# MVP: ChatGPT Voice Mode

We first tried ChatGPT's voice mode to see if people would even talk to AI about their problems.

I literally just opened the ChatGPT app on my phone, hit the voice button, and held it up to residents to see what would happen. The prompt was something like: "You are Albert, a helpful assistant at a care home. Listen to what the resident needs and acknowledge their request."

Technically, it worked. People used it to communicate the stuff they wanted. Some people wanted a phone call with family, ChatGPT was able to say "Hey, I asked someone to sort out that phone call for you. Anything else?" and this was great. 

The key insight: people weren't confused or put off by talking to an AI. In fact, some preferred it because they felt less like they were bothering someone.

Now we had to actually make it usable.

# Making it accessible

To make this system actually usable in this environment, we couldn't rely on me walking around with my phone. 

This required 2 things:
1. A physical CTA for patients that was always available
2. A backend system to catch the requests so the team could collect them and action them

# A physical CTA for patients

I bought a tablet off Amazon for £30 and created a quick web app that allowed people to talk to an AI. The web app was dead simple: a big circular button that said "HELP" which, when pressed, would start a voice conversation with OpenAI's API.

We quickly found out that the loudspeaker on the tablet wasn't loud enough and the mic wasn't responsive enough to their voice. Many residents have quieter voices or speak less clearly due to age or medical conditions. So we got an external speaker/microphone extension which looked like a retro phone handset. This was a game-changer—suddenly the audio quality was good enough that the AI could actually understand what people were saying.

The result was the following setup:
- A tablet on a stand in the common room
- A big floating "HELP" button on screen
- A retro phone handset connected via Bluetooth
- Instructions: "Pick up the phone and press the button to talk to Albert"

We just used a stand, told people to hit the big floating "HELP" button to get some support and off they went. 

# A backend for catching requests

The conversations had to get vetted for the type of request. This was easy enough: just take the input from the user, have an LLM prompt say: "What does this person want?" and then categorize it into one of several categories:
- Phone call request (with whom)
- Physical need (water, bathroom, medication)
- Environmental issue (too hot, too cold, TV not working)
- Social/activity request (wants to go outside, play a game, etc.)

These requests came back on the nurses' portal—a simple web dashboard where staff could see all pending requests, mark them as completed, and see which residents needed attention. We color-coded them by urgency and time waited.

The system also logged the full conversation transcript so staff could see exactly what was said, which was helpful for context.

# The Result 

It worked well enough but the set up was clearly way too expensive for what it was doing.

We were spending about £200/month on API costs for OpenAI's voice model, plus the engineering time to maintain the system, for what amounted to a fancy request form. The ROI wasn't there—staff liked having better triage information, but it wasn't transforming operations enough to justify the cost.

We were about to shut it down.

# The Opportunity 

Then something unexpected happened: people started using the calls to just chat about anything they had on their mind. Like how their day went in the garden, what they had for lunch, memories from decades ago, complaints about their kids not visiting.

The early calls were quite funny: people would say "I was in the garden" and the AI (in its super alert state) would be like "That sounds wonderful. I will let a carer know to bring you home" and then ping the backend to say "X wants to come home". We had to tune the prompt significantly to distinguish between someone chatting and someone making an actual request.

We realized that a lot of people would use the calls as an opportunity to just talk when things were quiet and to play games. One resident started having regular conversations with Albert about his time in the Navy. Another would call just to play 20 questions. The usage data showed that about 60% of the conversations weren't requests at all—they were just people wanting to talk to someone.

This aligned perfectly with what I'd been observing about loneliness among older adults. Staff are busy. Family visits are irregular. There's a television in every room but that's not a conversation—it's just noise.

We figured: that might be much better use of Albert's time. And that's how Albert happened.

Instead of trying to automate room service, we pivoted to providing companionship. We rebuilt the system to focus on having engaging conversations, playing cognitive games, reminiscing, and just being there when someone needs to talk. The request-routing system became a secondary feature—something the AI could do if needed, but not the main purpose.

Turns out, what people needed wasn't faster room service. They needed someone to talk to. And sometimes, the best products come from watching what people actually do with your half-baked MVP and following that instead of your original plan.