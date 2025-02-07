---
id: 3
title: "Post Mortem on BladeCache"
subtitle: "Explorations into AOP and bringing my beloved @Cacheable to Dagger"
date: "2025.02.07"
tags: "post-mortem"
---

I love the Spring annotations. My favorite by far is @Cacheable. My goal was to see if I could bring the functionality to Dagger. 

A week in, and my experiments have shown me this is probably not a great idea. But let's talk about the positives.

# A real appreciation for Spring AOP and Spring Cache 

To make this project work, I would need to get Annotations to work without Spring AOP. It's actually really tricky to do that (even [Lombok had to has to do some trickery](https://www.baeldung.com/java-annotation-processing-builder))

The good news I learned how to write my own custom annotations as a part of figuring out how this all works. So in the future, look out for any attempts (and please stop me cause [AOP is actually a bad idea](https://en.wikipedia.org/wiki/Information_hiding))

# How far did I get? 

After doing research into AOP and studying a few implementations, I made a start using just AspectJ and other plugins. 

I wrote a Hello World style Annotation to see if I could get it to work. The real struggle was actually getting the Java compiler to pick it up and after some Googling, it became very obvious the set up requires whoever is using my library to run certain arguments to get it running, which would kind of be really annoying for them. Figuring that this was going to be bigger than an afternoon for something that could literally be replaced by this: 

```java
     cache.get(key, k -> {
            // cache miss - do something 
        });
```

seemed a bit overkill. And so, here lies my afternoon research project.
