---
id: 1
title: "How to write your own audio transcription to ChatGPT without 4o"
subtitle: "Please stop releasing new models OpenAI"
date: "2019.12.08"
tags: "tech, examspeak"
---

# Who this article is for 
* You are building a web app with voice chat targeting iPhones
* You are not using audio capabilities with 4o and just the regular ChatGPT 4 Turbo (cause you are cheap x)
* You have to send not massive amounts of data

I had a problem with ExamSpeak when it was known as Flooency back in early 2024. ChatGPT 4 had just come out and I had a hard requirement of letting people use their microphones to speak to the model. 

This seemed simple enough: just send the audio data to Cloud Speech To Text by Google. The only problem was that it didn't work for iPhones.

# The Problem with iPhone

The iPhone browser environment uses the audio/mp4 for recording audio data. The problem is that the API we needed does not support that (https://cloud.google.com/speech-to-text/docs/encoding)

So, you got a React web app on an iPhone. What do you do? You check StackOverflow, of course...

Except I couldn't find anything concrete and useful. Nah, I had to build my own thing.

# The Solution

Given you need to send audio data to a backend anyways to get ChatGPT to respond, you might as well use a backend function to convert the audio data to the right format.

First, you use Base64 to encode the audio data. 

Then you use the Hail Mary of audio conversion tools, FFmpeg, to convert the audio data to the right format.

```javascript
export async function convertBase64MP4ToFlac(base64Audio: string)
: Promise<Buffer> {
  const audioBuffer = Buffer.from(decode(base64Audio));
  const inputStream = new Readable();
  inputStream.push(audioBuffer);
  inputStream.push(null);

  const outputStream = new PassThrough();
  const chunks: Buffer[] = [];

  return new Promise((resolve, reject) => {
    ffmpeg(inputStream)
      .toFormat("flac")
      .on("error", (err: any) => reject(err))
      .pipe(outputStream)
      .on("data", (chunk: Buffer) => chunks.push(chunk))
      .on("end", () => resolve(Buffer.concat(chunks)));
  });
}
```  

Given we were transcribing up to a minute of audio, it wasn't a whole lot of data to send to the back-end and it coped well.

I mean, give it a shot on your iPhone and see if the audio works: https://examspeak.co.uk/assignments/7377
