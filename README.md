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


### How to use Next.js :
#### steps :
- npx create-next-app@latest
- create-next-app@13.4.4 ok to proceed ? (y) => y
- typescript (N/Y) => N
- ESLint => Y 
- Tailwind CSS => Y
- src/directory => N
- App Router => N
- import alias => N
- npm run dev => our project running on localhost

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

      src --> app --> page.tsx [homepage hai ye]

- [src -> app ] => app me folder banaya "about" nam se aur uske ander "about.tsx" nam se 
  file bna diya => toh error aaya

  agar "about.tsx" folder me "page.tsx" name se file banaya toh sahi hai , error nhi aayega

  src --> app --> about --> page.tsx
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
    <div>about page aaya</div>
  )
}

export default page
```
#### output :
```js
about page aaya 
```


## routing/nested routing
- routing
   - http://localhost:3000/about
```js
about[folder] --> page.tsx
```
- nested routing
    - http://localhost:3000/about/company
```js
about[folder] --> company[folder] 
     |                 |
     |                 |-------------------> page.tsx
     |
     |
     |-------------------------------------> page.tsx
```

## Dynamic routing : lec -7
-

## Loading UI  : chakra ui react
-
```js
```

## In Next.js => Link component :
- next.js me "react-router-dom" use nhi karte for routing
- Link :
    - alternate of anchor-tag 
```js
[src-->app]--> about[folder] --> page.tsx
---------------------
import React from 'react'

function page() {
  return (
    <div>about me</div>
  )
}

export default page
```
```js
[src-->app] --> page.tsx
-------------
import React from 'react'
import Link from 'next/link' // ye next ka hi link hona cahiye , react-dom ka nhi 

function page() {
  return (
    <>
      <h1>xaxi-Brand</h1>
      <Link href="/about">About</Link>

    </>
  )
}

export default page
```
- output:
```js
xaxi-Brand    About


note : 
1- "about" prr touch kiye toh about page prr bhej diya
ans aaya => about me
```

## In Next.js => Image component :
```js
page.tsx
----------
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function page() {
  return (
    <>
      <h1>xaxi-Brand</h1>
      <Link href="/about">About</Link>
      
      <Image
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      
    </>
  )
}

export default page
```
- another 
```js
page.tsx
----------
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../assets/me.png'

function page() {
  return (
    <>
      <h1>xaxi-Brand</h1>
      <Link href="/about">About</Link>
      
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      
    </>
  )
}

export default page
```

## components : header , footer , sidebar
- Home, About, Services, Review, Contact <= name se page banaya hai "components" folder k ander
- src --> app => componets -> Header.tsx
```js
components --> Header.tsx
-----------
import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
    <header >
        <nav className='flex'>
            <div className="box1">
               <h1>pepCoding</h1>
            </div>
            <div className="box2 mx-2">
                <ul className='flex'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/services'>Services</Link></li>
                    <li><Link href='/review'>Review</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>

                </ul>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header

```
- src-->app => page.tsx
```js
page.tsx
---------
import React from 'react'
import Header from './components/Header'

function page() {
  return (
    <>
     <Header/> 
    </>
  )
}

export default page

```
- output :
```js
pepCoding     Home About Services Review Contact



note :
- "About" touch karne prr 'about' wale page prr chale jayegen
- "Services" touch karne prr 'services' wale page prr chala jayega
```
#### Note :
- hamm chahte hai Header har page par show ho , toh usko hmm "page.tsx" k badle "layout.tsx" me rakhegen. jisse Header hamara har page prr show hoga.
 
     eg.    Nav bar 
