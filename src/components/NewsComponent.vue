<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

import radioCanadaLogo from '@clubcapra/assets/media/dashboard/radio-canada-logo.png';

const rssFeed = 'https://ici.radio-canada.ca/rss/1000524';

let newsContent: HTMLElement | null;
let newsContainer: HTMLElement | null;

const pos = ref(0);

const intervalPerPixel = 10;

const parser = new DOMParser();

let scrollNews = true;
let newsInterval: number;

onUnmounted(() => {
  clearInterval(newsInterval);
  scrollNews = false;
});

onMounted(() => {
  newsContent = document.getElementById('news-content');
  newsContainer = document.getElementById('news-container');
  feed();
});

/**
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 * @param text - The text to measure.
 * @param font - The font of the text.
 * @returns The width of the text.
 */
function getTextWidth(text: string, font: string) {
  // re-use canvas object for better performance
  const canvas: HTMLCanvasElement =
    (getTextWidth as any).canvas ||
    ((getTextWidth as any).canvas = document.createElement('canvas'));
  const context = canvas.getContext('2d');
  if (context) {
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }
  return 0;
}

/**
 * Get the computed style property value of an element.
 * @param element - The element to get the style from.
 * @param prop - The CSS property name.
 * @returns The value of the CSS property.
 */
function getCssStyle(element: HTMLElement, prop: string): string {
  return window.getComputedStyle(element, null).getPropertyValue(prop);
}

/**
 * Get the font of an element.
 * @param el - The element to get the font from.
 * @returns The font of the element.
 */
function getCanvasFont(el: HTMLElement) {
  const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
  const fontSize = getCssStyle(el, 'font-size') || '16px';
  const fontFamily = getCssStyle(el, 'font-family') || 'Times New Roman';

  return `${fontWeight} ${fontSize} ${fontFamily}`;
}

/**
 * Fetch the RSS feed and scroll the news.
 */
async function feed() {
  scrollNews = true;

  if (!newsContent || !newsContainer) {
    return;
  }

  let response: Response;
  let responseText: string = '';

  while (scrollNews) {
    try {
      response = await fetch(rssFeed);
      responseText = await response.text();
    } catch (error) {
      console.error('Error fetching RSS feed:', error);
      if (responseText === '') {
        console.log('Retrying in 5 seconds...');
        const promise = new Promise(r => setTimeout(r, 5_000));
        await promise;
        continue;
      }
    }

    const xmlDoc = parser.parseFromString(
      responseText.replaceAll('\r', ' ').replaceAll('\n', ' '),
      'text/xml'
    );
    const items = xmlDoc.getElementsByTagName('item');
    newsContent.innerHTML = ''; // using innerHTML because of em tags

    for (const item of items) {
      const title =
        item.getElementsByTagName('title')[0].childNodes[0].nodeValue;
      let description =
        item.getElementsByTagName('description')[0].childNodes[0].nodeValue ||
        '';
      description = description.replace(/<[^>]*>?/gm, '');
      newsContent.innerHTML +=
        title + ' - ' + description + '                                   '; // tabs are not accounted for in the width calculation
    }

    const textWidth = getTextWidth(
      newsContent.innerHTML,
      getCanvasFont(newsContent || document.body)
    );

    pos.value = newsContainer?.clientWidth || 0;

    let resolve: (value?: unknown) => void;
    const promise = new Promise(r => (resolve = r));

    newsInterval = setInterval(() => {
      if (pos.value < -textWidth) {
        clearInterval(newsInterval);
        resolve();
      } else {
        pos.value--;
      }
    }, intervalPerPixel);

    await promise;
  }
}
</script>

<template>
  <div class="news flex p-2.5 flex-row bg-gray-100">
    <div>
      <img class="m-auto max-w-fit news-logo" :src="radioCanadaLogo" />
    </div>
    <div id="news-container" class="m-y-auto h-full overflow-hidden">
      <div
        id="news-content"
        class="relative whitespace-pre h-fit font-medium"
        :style="`left: ${pos}px`"
      />
    </div>
  </div>
</template>

<style>
.news-logo {
  height: 40px;
}
#news-content {
  font-size: 24px;
  line-height: 24px;
  margin-top: calc((3vh - 10px) / 2);
}
</style>
