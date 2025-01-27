##### workshop-task-8

# Workshop 8 : Application Programming Interfaces (APIs)

[Website Link] https://josephinepark.github.io/workshop-task-8/

- changes the background based on the time of day and provides a unique visual experience with a new joke every day.

## Task
[] Create a sketch that makes and API call to gather data from an external source. List of free-to-use APIs (which do not require authentication) : https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/ <br>
[] Visual elements of the sketch should be determined by data retrieved from the external source.

## Notes from the workshop video

API : https://www.ipify.org/
<br> 
<br>
IP address : a number that is a unique identifier that's given to any  device, any computer that's connected to the internet.
<br>
<img width="658" alt="image" src="https://github.com/user-attachments/assets/3f29aeb5-ddc6-4a3a-b075-1ff18fa7b072" />
<br>
Asynchronous function
<br>
<Br>
<img width="829" alt="image" src="https://github.com/user-attachments/assets/fdd8f18b-8f7d-47d3-9ab0-dccc289efd82" />
<Br>
<br>

-------------------------------------------------------------

Mixed Analytics : https://mixedanalytics.com/
<Br>
<img width="905" alt="image" src="https://github.com/user-attachments/assets/05fe891b-4387-436a-ac92-463c3bceded9" />
<br>
<br>

-------------------------------------------------------------

JokeAPT Documentation : https://sv443.net/jokeapi/v2/
<br>
<img width="505" alt="image" src="https://github.com/user-attachments/assets/b634fc2c-58c6-4db5-8cfa-cfdacf712a8d" />
<br>
<img width="476" alt="image" src="https://github.com/user-attachments/assets/ec395e26-bbf7-41d4-9e2c-be9e3130a4b6" />
<br>

-----------------------

Another open API : https://open-meteo.com/
<br>
<img width="935" alt="image" src="https://github.com/user-attachments/assets/f358155d-2903-4318-b169-8e4355a1a2a1" />
<br>
<img width="799" alt="image" src="https://github.com/user-attachments/assets/e06f66af-c83b-40cf-bd19-7a35ee5bd5d7" />
<br>
<img width="284" alt="image" src="https://github.com/user-attachments/assets/5ce6f940-4a43-4cf4-bb19-e4d512d4bea8" />
<br>






## Progress (Experimentation and Problem solving)

<img width="860" alt="image" src="https://github.com/user-attachments/assets/55f5ac0c-99b8-41c9-8ff6-ace015caa5d1" />
<br>
My sketch wasn't working so I have looked carefully from the beginning. The reason why the codes were not working was that I have made an mistake with the spelling of punchling -> punchline from the variables.
<br>
<img width="857" alt="image" src="https://github.com/user-attachments/assets/528df863-319c-49cb-b6b9-38edee82f4d2" />
<Br>
<Br>
<img width="851" alt="image" src="https://github.com/user-attachments/assets/aba426cf-3a71-487b-ad9a-26d928524ddf" />
<br>
<Br>
The color picker that my friend introduced to me was incredibly useful for this project. After selecting the desired colour, the corresponding colour code was displayed below, allowing me to simply copy and paste it into my code.
Using this tool saved me time from manually mixing colours and helped me maintain a more accurate and consistent colour palette. It was particularly helpful in achieving the desired aesthetic for the project and experimenting with different colour combinations effortlessly.
This experience made me realize the importance of colour selection in digital design, and I plan to continue using the colour picker to enhance the efficiency and accuracy of my future projects.
<Br>
<br>
<img width="728" alt="image" src="https://github.com/user-attachments/assets/d324dfa3-9833-45ad-ba8c-5e38b2568390" />
<br>
<br>
I decided to create a sketch that displays the temperature of Auckland, where I live and distinguishes between day and night. My goal was to not only show the temperature but also enhance the visual elements to create a more intuitive and engaging interface.
Following the workshop video, I integrated an API into my code, allowing me to retrieve real-time weather data for Auckland. To differentiate between day and night, I represented the circle in the sky as the sun during the day and the moon at night while visually separating the sky and the ground.
<br>
<Br>
I felt the project was a bit plain, so I added a Joke API to make it more engaging for the users. I thought displaying a daily joke along with the temperature would be fun, providing users with a lighthearted experience. I positioned the joke below the temperature display for better readability.
Placing each text element exactly where I wanted it took a significant amount of time. To achieve the desired placement, I had to experiment with textAlign(), textSize() and adjusting coordinate values multiple times. After numerous adjustments, I finally managed to position the text as intended.
This experience taught me the importance of carefully planning the visual layout of the interface, and I plan to practice more to improve my layout design skills in future projects.

------------------------------------

(Developing Night)
<br>
<img width="865" alt="image" src="https://github.com/user-attachments/assets/17ed94c6-5c4f-45c5-83f1-56f4eeff21e6" />
<Br>
<br>
<img width="481" alt="image" src="https://github.com/user-attachments/assets/d3c6ad08-6bec-4dbd-a98f-e272a76c0c24" />
<br>
<br>
<img width="790" alt="image" src="https://github.com/user-attachments/assets/c30c897a-2ad0-46fd-b486-fa387573d56b" />

------------------------------------

(Developing Day)
<Br>
<img width="863" alt="image" src="https://github.com/user-attachments/assets/961f1c2a-3285-4784-8aa6-12a99ba1be2d" />
<br>
<Br>
<img width="509" alt="image" src="https://github.com/user-attachments/assets/f230691a-3e9b-4634-8897-31e7c9a695cb" />
<br>
<Br>
<img width="497" alt="image" src="https://github.com/user-attachments/assets/9263ed4a-85a8-4b43-81a1-46ab0294c081" />
<br>
<br>
Through a friend, I learned that basic colours, such as 'yellow,' are built-in by default, meaning there is no need to use RGB colour numbers. Instead of specifying colours using values like fill(255, 255, 0), I realized that simply writing fill('yellow') would achieve the same result.
This approach makes the code more concise and easier to read, which I found very helpful. It allows for quicker colour application without having to remember specific RGB values.

## codes

<img width="343" alt="image" src="https://github.com/user-attachments/assets/3a0ad9a5-0cd4-4675-ab09-d5092a5694df" />
<img width="325" alt="image" src="https://github.com/user-attachments/assets/3a960d56-6fb9-4661-a7b0-671e5cbfd8c5" />



## Future Development

Through this workshop, I gained a deeper understanding of how to utilize APIs. While creating something from nothing is fun, generating new outputs using external data sources was fascinating and exciting.
I was able to code representations of day and night and, through repeated practice, became more familiar with various functions and features. Additionally, learning about tools like the color picker and using built-in colour names such as 'yellow', thanks to my friend, helped me discover ways to speed up my workflow, which I found enjoyable.
Of course, I am still in the learning phase, and tasks take a long time to complete. I often struggle with functions and variables, leading to frequent mistakes. Moreover, there are parts I don't fully understand yet, requiring me to revisit and review concepts repeatedly. However, progressing through Workshop 8 has made me realize the importance of repetition in learning, and I feel proud to see that I can now recall and apply more concepts. I'm also starting to develop an intuition for how new functions should be structured, which feels rewarding.

If I further develop my project, I would like to enhance the current simple background by adding beautiful fonts, gradient effects, and simulations to create a more engaging experience for users. Additionally, instead of just differentiating between day and night, I could explore depicting various sky and ground changes based on different times of the day, making the project more dynamic and visually appealing.

## Reference / other sources that helped me

https://editor.p5js.org/re7l/sketches/rylwv-437

- color change example (p5.js)
<Br>
<Br>
https://www.google.com/search?q=color+picker&sca_esv=117ddad5b64f1f05&ei=Q3yUZ7GyFIDWseMP5de5yAQ&ved=0ahUKEwjx3-mol5CLAxUAa2wGHeVrDkkQ4dUDCBA&uact=5&oq=color+picker&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGNvbG9yIHBpY2tlcjIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzIKEAAYsAMY1gQYRzINEAAYgAQYsAMYQxiKBTINEAAYgAQYsAMYQxiKBUi6nQRQAFgAcAN4AZABAJgBAKABAKoBALgBA8gBAJgCA6ACC5gDAIgGAZAGCpIHATOgBwA&sclient=gws-wiz-serp

- color picker webpage
<br>
<br>
https://editor.p5js.org/kdriscoll/sketches/dN7vuGmuS

- My IP address example (p5.js)
<br>
<br>
https://www.youtube.com/watch?v=XO77Fib9tSI

- async/await tutorial Part 1
<br>
<br>
https://www.youtube.com/watch?v=chavThlNz3s

- async/await tutorial Part 2
