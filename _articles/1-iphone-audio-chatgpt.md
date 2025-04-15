---
id: 1
title: "Audio and iPhones"
subtitle: "Please stop releasing new models OpenAI"
date: "2024.12.08"
tags: "tech, examspeak"
---

# What gives. 

Writing audio apps targeting iPhone's browser environment is an [interesting endeavour](https://phoboslab.org/log/2011/03/the-state-of-html5-audio)

Apple have a [tendency to be weird](https://devrant.com/rants/1925427/i-googled-fuck-apple-and-ended-up-here-so-yeah-fuck-this-piece-of-shit-company-w) with some of it's technical decisions when it comes to choices for it's Developer Experience. 

My specific problem with iPhones is that I was only getting MP4 audio and the only way to get it to work was to do some [weird polyfill magic](https://github.com/ai/audio-recorder-polyfill).

# Mission

Criteria for success:
* You are building a web app with voice chat targeting iPhones
* You are not using audio capabilities with 4o and just the regular ChatGPT 4 Turbo
* You have to send not massive amounts of data
* You are using Speech to Text that doesn't support MP4 (Google, please fix)

# Is this an accurate to say?

The iPhone browser environment uses the audio/mp4 for recording audio data. The problem is that the [API we needed does not support that](https://cloud.google.com/speech-to-text/docs/encoding)

# FFMPEG is the Universal Adapter Pattern We All Need That No One Ever Sees

[Relevant XKCD](https://xkcd.com/1406/)

[No sane individual would let you hit ChatGPT's API without a backend](https://www.reddit.com/r/ProgrammerHumor/comments/1gfkzoy/lastdayofunpaidinternship/) and given you need to send audio data to a backend anyways to get ChatGPT to respond, you might as well use a backend function to convert the audio data to the right format.

## The Recipe Is As Follows

First, you use Base64 to encode the audio data. 

Then you use the Hail Mary of audio conversion tools, [FFmpeg](https://ffmpeg.org/), to convert the audio data to the right format.

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
