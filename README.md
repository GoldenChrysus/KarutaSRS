# [Karuta SRS](https://karutasrs.com/)
Rails and Ember spaced repetition system for memorizing the Ogura Hyakunin Isshu or the one hundred poets/poems used in kyogi karuta.

[![GitHub](https://img.shields.io/github/license/GoldenChrysus/KarutaSRS.svg)](https://github.com/GoldenChrysus/KarutaSRS/blob/master/LICENSE)
![GitHub package.json version](https://img.shields.io/github/package-json/v/GoldenChrysus/KarutaSRS.svg)
[![KarutaSRS.com](https://img.shields.io/badge/web-KarutaSRS.com-blueviolet)](https://karutasrs.com/)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/GoldenChrysus/KarutaSRS/master.svg)
![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/GoldenChrysus/KarutaSRS.svg)

#### Funding
<a href="https://paypal.me/goldenchrysus"><img src="https://i.imgur.com/ugzarwk.png" alt="Donate at PayPal" height="23"></a>
<a href="https://ko-fi.com/S6S611OOG"><img src="https://www.ko-fi.com/img/githubbutton_sm.svg" alt="Donate at Ko-fi" height="23"></a>
<a href="https://patreon.com/Chrysus"><img src="https://i.imgur.com/cjMRY6Q.png" alt="Become a Patron" height="23"></a>
<a href="https://streamelements.com/chrysus/tip"><img src="https://img.shields.io/badge/Donate-at%20StreamElements-green" alt="Donate at StreamElements" height="23"></a>

## Official Build

You can use all of the features of Karuta SRS at https://karutasrs.com/.

## To-Do List
- ☑️ Grabber card component
  - ☑️ Highlight grabber key characters based on state (learning: blue, review correct: lime green, review incorrect: light red)
  - ☑️ Fade in characters when character is added (for typing answers in review)
- ☑️ Lesson component
  - ☑️ Info grid (poem info and grabber card)
    - ☑️ First verse
    - ☑️ Kimariji
    - ☑️ 2nd verse key characters
    - ☑️ Reading audio
    - ☑️ Poem background info
    - ☑️ Poem translations
- ☑️ Lesson carousel component
  - ☑️ Sliding lesson components
  - ☑️ Lesson selector component
    - ☑️ Indicate complete lesson
    - ☑️ Show button to lesson review when complete
- ☑️ Review component
  - ☑️ Hiragana input below grabber
  - ☑️ Play reading audio for grabber reviews
  - ☑️ Randomize review queue
    - ☑️ User's overall queue should be split into segments to ensure related items are fairly close together
      - ☑️ Each review queue segment should be a continuous 20 items for 10 poems (i.e. grabber and kimariji for each poem)
      - ☑️ After an item leaves the queue (due to correct answer), another poem from the total queue should be added to the segment
      - ☑️ Repeat until total queue is empty or user ends the session
    - ☑️ A review consists of a kimariji review and a grabber review
    - ☑️ Each review portion should also be randomized
  - ☑️ Prompt for kimariji
    - ☑️ Show complete grabber card (but no highlighting)
    - ☑️ Kimariji portion of review is complete if entered characters exactly match kimariji
  - ☑️ Prompt for grabber key characters
    - ☑️ Empty grabber card that fills out (or removes) characters as the user types their answer
    - ☑️ Highlight right/wrong characters after user presses enter
    - ☑️ Grabber portion of review is complete as long as key characters are correct (even if other characters are wrong)
  - ☑️ Track when review is complete
    - ☑️ For lesson reviews, create a learned item when the review is complete
    - ☑️ For regular reviews, post the number of wrong answers to API to update the learned item
- ☑️ Session and security
  - ☑️ User is assigned a bearer token upon creation
  - ☑️ Relevant user data (id, bearer) should be stored as session data when ember-simple-auth completes, and user should redirect to dashboard
    - ☑️ When user logs in
    - ☑️ When user registers
  - ☑️ All calls to the API should include the current user's bearer in the header
  - ☑️ API call should be rejected if the relevant user for the called item does not match the bearer provided
    - ☑️ Calls to learned-items should be rejected if the owner of the learned item doesn't match the provided bearer
    - ☑️ Calls to users should be rejected if the fetched user's bearer doesn't match the provided bearer
      - ☑️ Also applies to custom controller methods such as those that build the lesson/review queues; these need an AJAX prefilter as the calls are not routed through Ember's adapter
- ❌ User stats
  - ☑️ Dashboard stats
    - ☑️ Next review time
    - ☑️ Number of items per level
    - ☑️ Best items (by correct answer rate)
    - ☑️ Worst items (by incorrect answer rate)
  - ❌ Review index stats
    - ☑️ Total number of reviews completed (1 poem = 1 review)
    - ☑️ Kimariji correct/incorrect percent
    - ☑️ 2nd verse correct/incorrect percent
    - ☑️ Performance (correct answer rate) by kimariji length
    - ☑️ Performance ("") by 2nd verse answer length
    - ☑️ Average correct response delay
    - ☑️ Average response delay
    - ❌ Ability to select time range
      - ❌ Unlimited time range will show correct answer rate over time

## License
[GNU General Public License v3.0 only](/LICENSE)

## Copyright
Copyright (C) 2019-2020, Patrick Golden. All rights reserved.

Copyrights licensed under GNU General Public License v3.0 only.

See the accompanying [LICENSE](/LICENSE) file for terms.