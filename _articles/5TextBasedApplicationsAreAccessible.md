---
id: 5
title: "Diagramming Tools and the Accessibility problem"
subtitle: "Introducing a DSL for generating AWS diagrams"
date: "2023-10-29"
tags: "new release"
---

# Accessibility is a problem on the web

If I had to define a metric for app accessibility, I'd say number of dynamic movements an user has to make to get a desired result. 

Let's take LucidChart for example. It's a great tool for diagramming but it's not accessible. It's not accessible because you are constantly moving the mouse up and down to get the right shape, the right line, the right text. 

I am not saying that LucidChart is a bad tool. It's a great tool. Now, I don't have a disability but I do have a pretty bad shoulder that gets really tired after a while. I can't imagine how hard it is for someone who has a disability to use LucidChart.

# Enter DSLs 

I think DSLs can be a solution to the accessibility. They are minimal, they are easy to use and they are accessible as you can use them without a mouse. Just type it out, run it and you are done.

# My attempt to make diagramming more accessible

Cloudian is a minimal DSL to generate AWS Diagrams. 

It has two rules: 
You can:
1. Declare AWS resources
2. Get them to either point to things, or contain things.

## Declaring AWS resources
```
    x::Resource
```

This declares a resource for the diagram of a certain type of AWS resource.

Example:
```
    dynamodb::dynamodb
```

## Get them to either point to things, or contain things.
```
    x => [A]
```

This declares relationship (goes to) for the resource to another resource Resources which are marked as "groups" mean that everything inside that [A] will go inside that resource. This is essentially how you create groups and subgroups. You can use this to create things like subnets and VPCs.

Example:
```
    dynamodb => [cognito]
```

Note: you have to have a list there

It's even got a little bit of sugar too:
```
    x::Resource => [A]
```

This is just shorthand for create a resource and getting it to point somewhere / create a group.
```
    region1::subnet => [amplify, cognito, storage]
```

## Precedence
Items at the top of the file have a higher precedence than below. So if you want to have subnets in a region, you got to have them like:
```
    region1::subnet => [subnet-a]
    subnet-a::subnet => [s3]
```

The highest precedence is global, which you can access by not putting a resource in any group

[Here is a Tweet I made with an example of a rendering](https://twitter.com/bhurghundii/status/1716963078305100121)

## Ideas for the future

- Cloudian web-app so you can write using an online editor and generate diagrams: https://github.com/bhurghundii/cloudianlang-app
- More assets! I want to add more assets to the language so you can create more complex diagrams, but that's a lot of manual work so it's going to take a while.
