## Next.js
- Next.js is a React Framework used for building interactive user interfaces.
- Next v-13 me react k latest version bhi add kiye gaye hai jisse hmm full stack application bna sakte hai.
- Next.js me koi bhi third-party package "install" nhi karna hota har package built-In mil jata hai
- custom fonts & Images use karna kafi easy hai 
- Next.js Imp features "SEO Effecient"
    - basically , google keywords ko target karte huye hamare website ko run karta hai mtlab jab bhi user koi particular keyword search karta hai toh "TOP" prr hamari website kaise show ho sakti hai, toh esi ko kahte hai "SEO" => search engine optimization
    - It aims to improve your websites position in search results pages.
    - Higher the website is listed , the more people will see it.

## install
- system requirement => Node.js 14.18.0
- npx create-next-app projectName
- npm run dev
## In next.js  : known about folders
- two imp folders "pubic" , "src"
- In public folder => svg 
- In src folder :
    -  api/hello => route.ts <= persional API likhate hai 
    -  global.css <= sari css hoti hai jo globally estemal karte hai
    - layout.tsx <= hmara diff pages ka layout aata hai ki kaun si chij pahle aayi , kaun si chij bad me aayi , esme hmm define karte hai.
    - page.tsx <= hamara main page hota hai jisme hmm pura data rakhate hai apna [esko hmare website ka home page bhi bol sakte hai]

## File Format :
- page.tsx 
    - page.tsx ka nam change krr mana home.tsx likh liye toh "error" dene lagega , 
      page.tsx ka nam change nhi krr sakte 
- [src -> app ] => app me folder banaya "about" nam se aur uske ander "about.tsx" nam se 
  file bna diya => toh error aaya

  agar "about.tsx" folder me "page.tsx" namse file banaya toh sahi hai , error nhi aayega
```js
In next.js:
about[folder] --> about.jsx
---------------------------------

import React from 'react'

function about() {
  return (
    <div>about</div>
  )
}

export default about

```
#### output :
```js
404 | This page could not be found.
```
```js
In next.js:
about[folder] --> page.jsx
---------------------------------
http://localhost:3000/about
---------------------------------
import React from 'react'

function page() {
  return (
    <div>page aaya</div>
  )
}

export default page
```
#### output :
```js
page aaya 
```
- 
